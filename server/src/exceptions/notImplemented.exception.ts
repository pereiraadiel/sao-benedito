import { ErrorConstant } from '../constants/error.constant';
import { AppException, ExceptionContext } from './app.exception';

export class NotImplementedException extends AppException {
  constructor(context: ExceptionContext[], service: string) {
    super({
      code: ErrorConstant.notImplemented.code,
      message: ErrorConstant.notImplemented.message,
      context,
      service,
    });
  }
}
