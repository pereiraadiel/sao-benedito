import { ErrorConstant } from '../constants/error.constant';
import { AppException, ExceptionContext } from './app.exception';

export class UnauthorizedException extends AppException {
  constructor(context: ExceptionContext[], service: string) {
    super({
      code: ErrorConstant.unauthorized.code,
      message: ErrorConstant.unauthorized.message,
      context,
      service,
    });
  }
}
