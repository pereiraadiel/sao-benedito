import { Usecase } from '../usecase';
import { Injectable } from '@nestjs/common';
import { UpdateOneUserPasswordUsecase } from '../users/updateOneUserPassword.usecase';
import { ResetUserPasswordDTO } from '../../dtos/auth/resetUserPassword.dto';
import { RedisService } from '../../services/redis.service';
import { UnauthorizedException } from '../../exceptions/unauthorized.exception';

@Injectable()
export class ResetUserPasswordUsecase extends Usecase {
  protected usecaseName = 'Reset User Password Usecase';

  constructor(
    private readonly updateOneUserPasswordUsecase: UpdateOneUserPasswordUsecase,
    private readonly redisService: RedisService,
  ) {
    super();
  }

  async handle({ token, password }: ResetUserPasswordDTO) {
    try {
      const storedToken = await this.redisService.getRawValue(
        `@token:reset:${token}`,
      );

      if (!storedToken) {
        throw new UnauthorizedException(
          [
            {
              token,
            },
          ],
          this.usecaseName,
        );
      }

      const user = await this.updateOneUserPasswordUsecase.handle({
        id: storedToken,
        password,
      });

      await this.redisService.deleteValue(`@token:reset:${token}`);
      delete user.passwordHash;

      return user;
    } catch (error) {
      this.exceptionHandler(error, [
        {
          token,
        },
      ]);
    }
  }
}
