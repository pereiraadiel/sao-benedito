import { ErrorConstant } from '../constants/error.constant';
import { AppException, ExceptionContext } from './app.exception';

export class UnexpectedException extends AppException {
  constructor(context: ExceptionContext[], service: string) {
    super({
      code: ErrorConstant.unexpected.code,
      message: ErrorConstant.unexpected.message,
      context,
      service,
    });
  }
}
