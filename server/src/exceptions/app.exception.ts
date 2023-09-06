export type ExceptionContext = {
  [key: string]: string | string[];
};

export type Exception = {
  message: string;
  code: number;
  context: ExceptionContext[];
  service: string;
};

export class AppException {
  message: string;
  code: number;
  context: ExceptionContext[];
  service: string;

  constructor(exception: Exception) {
    Object.assign(this, exception);
  }
}
