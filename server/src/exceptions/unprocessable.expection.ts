import { ErrorConstant } from '../constants/error.constant';
import { AppException, ExceptionContext } from './app.exception';

export class UnprocessableException extends AppException {
  constructor(context: ExceptionContext[], service: string) {
    super({
      code: ErrorConstant.unprocessable.code,
      message: ErrorConstant.unprocessable.message,
      context,
      service,
    });
  }
}
