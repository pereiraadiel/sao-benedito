import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { AppException, ExceptionContext } from '../exceptions/app.exception';
import { UnexpectedException } from '../exceptions/unexpected.exception';
import { LoggerUtil } from '../utils/logger.util';
import { UnprocessableException } from '../exceptions/unprocessable.exception';

export abstract class Usecase {
  protected logger: LoggerUtil;
  protected abstract usecaseName: string;

  constructor() {
    this.logger = new LoggerUtil();
  }

  protected buildPage<T>(items: T[]) {
    return {
      items,
      total: items.length,
    };
  }

  protected exceptionHandler(error: any, context: ExceptionContext[] = []) {
    this.logger.error(error);
    this.logger.error(context);
    console.error(error);
    if (error instanceof AppException) throw error;
    else if (error instanceof PrismaClientKnownRequestError) {
      const messages = {
        P2002: 'entity already exists',
        P2025: 'entity required to conection was not found',
      };
      const message = messages[error.code] || 'Database integration failed';

      throw new UnprocessableException(
        [
          {
            message,
            ...context[0],
          },
        ],
        this.usecaseName,
      );
    } else throw new UnexpectedException(context, this.usecaseName);
  }
}
