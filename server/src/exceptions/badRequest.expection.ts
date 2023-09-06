import { ErrorConstant } from '../constants/error.constant';
import { AppException, ExceptionContext } from './app.exception';

export class BadRequestException extends AppException {
  constructor(context: ExceptionContext[], service: string) {
    super({
      code: ErrorConstant.badRequest.code,
      message: ErrorConstant.badRequest.message,
      context,
      service,
    });
  }
}
