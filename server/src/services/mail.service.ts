import { Injectable, Inject } from '@nestjs/common';
import { MailConstant } from '../constants/mail.constant';

type SendMail = {
  subject: string;
  text: string;
  html: string;
  to: string;
};

@Injectable()
export class MailService {
  constructor(@Inject('MAILER_PROVIDER') private readonly mailerProvider) {}

  async sendEmail(data: SendMail) {
    const mailOptions = {
      from: MailConstant.user,
      to: data.to,
      subject: data.subject,
      text: data.text,
      html: data.html,
    };

    return this.mailerProvider.sendMail(mailOptions);
  }
}
