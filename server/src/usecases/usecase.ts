import { AppException, ExceptionContext } from '../exceptions/app.exception';
import { UnexpectedException } from '../exceptions/unexpected.exception';
import { LoggerUtil } from '../utils/logger.util';

export abstract class Usecase {
  protected logger: LoggerUtil;
  protected abstract usecaseName: string;

  constructor() {
    this.logger = new LoggerUtil();
  }

  protected exceptionHandler(error: any, context: ExceptionContext[] = []) {
    this.logger.error(error);
    this.logger.error(context);
    if (error instanceof AppException) throw error;
    else throw new UnexpectedException(context, this.usecaseName);
  }
}
