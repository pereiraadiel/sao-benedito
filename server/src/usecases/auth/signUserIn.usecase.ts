import { Usecase } from '../usecase';
import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '../../exceptions/unauthorized.exception';
import {
  USERS_REPOSITORY,
  UsersRepository,
} from '../../repositories/users/users.repository';
import { HashService } from '../../services/hash.service';
import { SignUserInDTO } from '../../dtos/auth/signUserIn.dto';
import { RedisService } from '../../services/redis.service';
import { HashUtil } from '../../utils/hash.util';
import { UserEntity } from '../../entities/user.entity';
import { AuthConstant } from '../../constants/auth.constant';

@Injectable()
export class SignUserInUsecase extends Usecase {
  protected usecaseName = 'Sign User In Usecase';

  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly usersRepository: UsersRepository,
    private readonly hashService: HashService,
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

  async handle({ email, password }: SignUserInDTO) {
    try {
      const user = await this.usersRepository.findOneByEmail(email);

      if (!user) {
        throw new UnauthorizedException(
          [
            {
              email,
            },
          ],
          this.usecaseName,
        );
      }
      const isPasswordCorrect = await this.hashService.verify(
        password,
        user.passwordHash,
      );

      if (!isPasswordCorrect) {
        throw new UnauthorizedException(
          [
            {
              email,
            },
          ],
          this.usecaseName,
        );
      }

      delete user.passwordHash;

      return {
        accessToken: await this.generateToken(user),
      };
    } catch (error) {
      this.exceptionHandler(error, [
        {
          email,
        },
      ]);
    }
  }
}
