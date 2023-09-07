import { Usecase } from '../usecase';
import { Inject, Injectable } from '@nestjs/common';
import { RequestResetUserPasswordTokenDTO } from '../../dtos/auth/requestResetUserPasswordToken.dto';
import { RedisService } from '../../services/redis.service';
import {
  USERS_REPOSITORY,
  UsersRepository,
} from '../../repositories/users/users.repository';
import { TokenUtil } from '../../utils/token.util';

@Injectable()
export class RequestResetUserPasswordUsecase extends Usecase {
  protected usecaseName = 'Request Reset User Password Token Usecase';

  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly usersRepository: UsersRepository,
    private readonly redisService: RedisService,
  ) {
    super();
  }

  private async waitForIt() {
    const timeToAwaitInMillisseconds =
      (Math.floor(Math.random() * 4) + 2) * 1000;

    return new Promise((resolve) =>
      setTimeout(resolve, timeToAwaitInMillisseconds),
    );
  }

  async handle({ email }: RequestResetUserPasswordTokenDTO) {
    try {
      const user = await this.usersRepository.findOneByEmail(email);

      if (!user) {
        await this.waitForIt();
        return;
      }

      const token = TokenUtil.generateResetToken(user);

      await this.redisService.setValue(
        `@token:reset:${token}`,
        user.id,
        60 * 5, // 5 min expiração
      );

      // enviar email
    } catch (error) {
      this.exceptionHandler(error, [
        {
          email,
        },
      ]);
    }
  }
}
