import { MailDataContract } from './contracts/mailData.contract';

export const MAIL_PROVIDER = 'MAIL_PROVIDER';

export interface MailProvider {
  sendMail(data: MailDataContract): Promise<boolean>;
}
