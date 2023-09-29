import { Injectable, Inject } from '@nestjs/common';

import { MAIL_PROVIDER, MailProvider } from '../providers/mail.provider';
import { MailDataContract } from '../providers/contracts/mailData.contract';

@Injectable()
export class MailService {
  constructor(
    @Inject(MAIL_PROVIDER) private readonly mailerProvider: MailProvider,
  ) {}

  async sendEmail(data: MailDataContract) {
    const mailOptions = {
      to: data.to,
      subject: data.subject,
      text: data.text,
      html: data.html,
    };

    return this.mailerProvider.sendMail(mailOptions);
  }
}
