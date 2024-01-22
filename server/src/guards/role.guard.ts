import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { ExtractJwt } from 'passport-jwt';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { ROLE_KEY } from '../decorators/role.decorator';
import { ForbiddenException } from '../exceptions/forbidden.exception';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class RoleGuard implements CanActivate {
  private guardName = 'Role Guard';
  private extractJwt = ExtractJwt.fromAuthHeaderAsBearerToken();

  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
  ) {}

  canActivate(context: ExecutionContext) {
    try {
      const requiredRole = this.reflector.getAllAndOverride<string>(ROLE_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);

      const isPublic = this.reflector.getAllAndOverride(IS_PUBLIC_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);

      if (!requiredRole || isPublic) {
        return true;
      }

      const request = context.switchToHttp().getRequest();
      const jwt = this.extractJwt(request);
      const decodedJwt = this.jwtService.decode(jwt) as UserEntity;

      return decodedJwt && decodedJwt?.role === requiredRole;
    } catch (error) {
      throw new ForbiddenException(
        [
          {
            context: context.switchToHttp().getRequest(),
          },
        ],
        this.guardName,
      );
    }
  }
}
