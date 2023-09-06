import { AppConstants } from './../constants/app.constant';

export class LoggerUtil {
  info(msg: any) {
    console.info(
      '\n\x1b[34m\x1b[1m%s\x1b[0m',
      `[${AppConstants.name}]\t${msg}`,
    );
  }

  warn(msg: any) {
    console.warn(
      '\n\x1b[33m\x1b[1m%s\x1b[0m',
      `[${AppConstants.name}]\t${msg}`,
    );
  }

  success(msg: any) {
    console.log('\n\x1b[32m\x1b[1m%s\x1b[0m', `[${AppConstants.name}]\t${msg}`);
  }

  log(msg: any) {
    console.log('\n\x1b[35m\x1b[1m%s\x1b[0m', `[${AppConstants.name}]\t${msg}`);
  }

  error(msg: any) {
    console.error(
      '\n\x1b[31m\x1b[1m%s\x1b[0m',
      `[${AppConstants.name}]\t${msg}`,
    );
  }
}
