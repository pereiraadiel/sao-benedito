import { ErrorConstant } from '../constants/error.constant';
import { AppException, ExceptionContext } from './app.exception';

export class ForbiddenException extends AppException {
  constructor(context: ExceptionContext[], service: string) {
    super({
      code: ErrorConstant.forbidden.code,
      message: ErrorConstant.forbidden.message,
      context,
      service,
    });
  }
}
