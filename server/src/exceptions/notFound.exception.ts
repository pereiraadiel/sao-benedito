import { ErrorConstant } from '../constants/error.constant';
import { AppException, ExceptionContext } from './app.exception';

export class NotFoundException extends AppException {
  constructor(context: ExceptionContext[], service: string) {
    super({
      code: ErrorConstant.notFound.code,
      message: ErrorConstant.notFound.message,
      context,
      service,
    });
  }
}
