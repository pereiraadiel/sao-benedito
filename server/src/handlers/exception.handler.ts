import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppException } from '../exceptions/app.exception';

@Catch(AppException)
export class ExceptionHandler implements ExceptionFilter {
  catch(exception: AppException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status = exception.code;
    const message = exception.message;
    const context = exception.context;
    const service = exception.service;

    response.status(status).json({
      statusCode: status,
      message,
      context,
      service,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
