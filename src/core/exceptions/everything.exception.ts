
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { Request, Response } from 'express';
import { ForeignKeyConstraintError, UniqueConstraintError } from 'sequelize';

@Catch()
export class CatchEverythingFilter implements ExceptionFilter {
  constructor() { }

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    if (exception instanceof UniqueConstraintError || exception instanceof ForeignKeyConstraintError) {
      response.status(409)
        .json({
          statusCode: 309,
          message: exception.message,
          error: exception.name
        });
      return
    } else if (exception instanceof HttpException) {
      const request = ctx.getRequest<Request>();
      const status = exception.getStatus();
      response.status(status)
        .json({
          statusCode: status,
          timestamp: new Date().toISOString(),
          path: request.url,
        });
      return
    }
    response.status(409)
      .json({
        statusCode: 409,
        message: "ConflicException"
      });
    return
  }
}
