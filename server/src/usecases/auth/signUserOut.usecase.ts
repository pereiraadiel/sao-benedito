import { HashUtil } from './../../utils/hash.util';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { Usecase } from '../usecase';
import { RedisService } from '../../services/redis.service';
import { SignUserOutDTO } from '../../dtos/auth/signUserOut.dto';

@Injectable()
export class SignUserOutUsecase extends Usecase {
  protected usecaseName = 'Sign User Out Usecase';

  constructor(
    private readonly jwtService: JwtService,
    private readonly redisService: RedisService,
  ) {
    super();
  }

  async handle({ accessToken }: SignUserOutDTO) {
    try {
      const { id } = this.jwtService.decode(accessToken) as any;
      const refreshToken = HashUtil.hash(`${id}:${accessToken}`).replaceAll(
        '=',
        '',
      );

      await this.redisService.deleteValue(`@token:refresh:${refreshToken}`);
      await this.redisService.deleteValue(
        `@token:access:${HashUtil.hash(accessToken)}`,
      );
    } catch (error) {
      this.exceptionHandler(error, [
        {
          accessToken,
        },
      ]);
    }
  }
}
