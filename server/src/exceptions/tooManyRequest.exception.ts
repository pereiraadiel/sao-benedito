import { ErrorConstant } from '../constants/error.constant';
import { AppException, ExceptionContext } from './app.exception';

export class TooManyRequestException extends AppException {
  constructor(context: ExceptionContext[], service: string) {
    super({
      code: ErrorConstant.tooManyRequest.code,
      message: ErrorConstant.tooManyRequest.message,
      context,
      service,
    });
  }
}
