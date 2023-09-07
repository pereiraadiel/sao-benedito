import { Usecase } from '../usecase';
import { Inject, Injectable } from '@nestjs/common';
import { RequestResetUserPasswordTokenDTO } from '../../dtos/auth/requestResetUserPasswordToken.dto';
import { RedisService } from '../../services/redis.service';
import {
  USERS_REPOSITORY,
  UsersRepository,
} from '../../repositories/users/users.repository';
import { TokenUtil } from '../../utils/token.util';
import { MailService } from '../../services/mail.service';
import { AppConstants } from '../../constants/app.constant';

@Injectable()
export class RequestResetUserPasswordUsecase extends Usecase {
  protected usecaseName = 'Request Reset User Password Token Usecase';

  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly usersRepository: UsersRepository,
    private readonly redisService: RedisService,
    private readonly mailService: MailService,
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
      await this.mailService.sendEmail({
        subject: `${AppConstants.name} | Recuperar acesso!`,
        text: `Olá ${user.firstName}! Clique no link a seguir para recuperar o acesso a sua conta: ${token}`,
        html: `
          <style>
            main {
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;
              margin: 0 auto;
            }
          </style>
          <main>
            <h1>Olá ${user.firstName}!</h1> 
            <h3>Clique no link a seguir para recuperar o acesso a sua conta: http://localhost:3300/auth/reset/${token}</h3>
          </main>
        `,
        to: user.email,
      });
    } catch (error) {
      this.exceptionHandler(error, [
        {
          email,
        },
      ]);
    }
  }
}
