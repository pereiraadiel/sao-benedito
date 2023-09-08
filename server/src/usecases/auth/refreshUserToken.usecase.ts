import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UnauthorizedException } from '../../exceptions/unauthorized.exception';
import { Usecase } from '../usecase';
import {
  USERS_REPOSITORY,
  UsersRepository,
} from '../../repositories/users/users.repository';
import { RefreshUserTokenDTO } from '../../dtos/auth/refreshUserToken.dto';
import { RedisService } from '../../services/redis.service';
import { HashUtil } from '../../utils/hash.util';
import { UserEntity } from '../../entities/user.entity';
import { AuthConstant } from '../../constants/auth.constant';

@Injectable()
export class RefreshUserTokenUsecase extends Usecase {
  protected usecaseName = 'Refresh User Token Usecase';

  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
    private readonly redisService: RedisService,
  ) {
    super();
  }

  private async generateToken(user: UserEntity) {
    const date = new Date();
    const refreshToken = HashUtil.hash(
      `${user.id}:${date.getTime()}:${Math.random()}`,
    ).replaceAll('=', '');

    const payload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      cpf: HashUtil.encode(user.cpf),
      email: HashUtil.encode(user.email),
      refreshToken,
    };

    const accessToken = this.jwtService.sign(payload);

    await this.redisService.setValue(
      `@token:refresh:${refreshToken}`,
      user.id,
      60 * 60 * 72, // 72 hours or 3 days
    );
    await this.redisService.setValue(
      `@token:access:${HashUtil.hash(accessToken)}`,
      user.id,
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

      const { refreshToken } = this.jwtService.decode(accessToken) as any;

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

      const user = await this.usersRepository.findOneById(userId);

      if (!user) {
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
      delete user.passwordHash;

      return {
        accessToken: await this.generateToken(user),
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
