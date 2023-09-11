import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UnauthorizedException } from '../../exceptions/unauthorized.exception';
import { Usecase } from '../usecase';
import { RefreshUserTokenDTO } from '../../dtos/auth/refreshUserToken.dto';
import { RedisService } from '../../services/redis.service';
import { HashUtil } from '../../utils/hash.util';
import { AuthConstant } from '../../constants/auth.constant';
import { Payload } from '../../interfaces/token.interface';

@Injectable()
export class RefreshUserTokenUsecase extends Usecase {
  protected usecaseName = 'Refresh User Token Usecase';

  constructor(
    private readonly jwtService: JwtService,
    private readonly redisService: RedisService,
  ) {
    super();
  }

  private async generateToken(payload: Payload) {
    delete (payload as any).exp;
    delete (payload as any).iat;

    const accessToken = this.jwtService.sign(payload);
    const refreshToken = HashUtil.hash(
      `${payload.id}:${accessToken}`,
    ).replaceAll('=', '');

    await this.redisService.setValue(
      `@token:refresh:${refreshToken}`,
      payload.id,
      60 * 60 * 72, // 72 hours or 3 days
    );
    await this.redisService.setValue(
      `@token:access:${HashUtil.hash(accessToken)}`,
      payload.id,
      Number(AuthConstant.jwt.expiresIn),
    );

    return accessToken;
  }

  async handle({ accessToken }: RefreshUserTokenDTO) {
    try {
      const isValidToken = await this.jwtService
        .verifyAsync(accessToken, {
          ignoreExpiration: true,
        })
        .catch(() => {
          return false;
        });

      if (!isValidToken) {
        throw new UnauthorizedException(
          [
            {
              accessToken,
            },
          ],
          this.usecaseName,
        );
      }

      const payload = this.jwtService.decode(accessToken) as any;
      const refreshToken = HashUtil.hash(
        `${payload.id}:${accessToken}`,
      ).replaceAll('=', '');

      const userId = await this.redisService.getRawValue(
        `@token:refresh:${refreshToken}`,
      );

      if (!userId) {
        throw new UnauthorizedException(
          [
            {
              accessToken,
            },
          ],
          this.usecaseName,
        );
      }

      await this.redisService.deleteValue(
        `@token:access:${HashUtil.hash(accessToken)}`,
      );
      await this.redisService.deleteValue(`@token:refresh:${refreshToken}`);

      return {
        accessToken: await this.generateToken(payload),
      };
    } catch (error) {
      this.exceptionHandler(error, [
        {
          accessToken,
        },
      ]);
    }
  }
}
