import { ErrorConstant } from '../constants/error.constant';
import { AppException, ExceptionContext } from './app.exception';

export class AlreadyExistsException extends AppException {
  constructor(context: ExceptionContext[], service: string) {
    super({
      code: ErrorConstant.alreadyExists.code,
      message: ErrorConstant.alreadyExists.message,
      context,
      service,
    });
  }
}
