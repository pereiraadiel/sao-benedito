import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { UnauthorizedException } from '../exceptions/unauthorized.exception';

@Injectable()
export class AuthGuard implements CanActivate {
  private guardName = 'AuthGuard';
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext) {
    try {
      const isPublic = this.reflector.getAllAndOverride(IS_PUBLIC_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);

      if (isPublic) {
        return true;
      }

      const authorization = context.switchToHttp().getRequest()
        .headers.authorization;

      if (!authorization) {
        throw new UnauthorizedException([], this.guardName);
      }

      const [, token] = authorization.split(' ');
      if (!token) {
        throw new UnauthorizedException([], this.guardName);
      }

      return true;
    } catch (error) {
      throw new UnauthorizedException([], this.guardName);
    }
  }
}
