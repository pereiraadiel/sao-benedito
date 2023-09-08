import { AppConstants } from './../constants/app.constant';

export class LoggerUtil {
  info(msg: any) {
    console.info(
      `\x1b[34m\x1b[1m[${AppConstants.name}]\t%s\x1b[0m`,
      JSON.stringify(msg),
    );
  }

  warn(msg: any) {
    console.warn(
      `\x1b[33m\x1b[1m[${AppConstants.name}]\t%s\x1b[0m`,
      JSON.stringify(msg),
    );
  }

  success(msg: any) {
    console.log(
      `\x1b[32m\x1b[1m[${AppConstants.name}]\t%s\x1b[0m`,
      JSON.stringify(msg),
    );
  }

  log(msg: any) {
    console.log(
      `\x1b[35m\x1b[1m[${AppConstants.name}]\t%s\x1b[0m`,
      JSON.stringify(msg),
    );
  }

  error(msg: any) {
    console.log(
      `\x1b[31m\x1b[1m[${AppConstants.name}]\t%s\x1b[0m`,
      JSON.stringify(msg),
    );
  }
}
