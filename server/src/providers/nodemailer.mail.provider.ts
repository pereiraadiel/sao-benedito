import { MailConstant } from '../constants/mail.constant';
import { MailDataContract } from './contracts/mailData.contract';
import { MailProvider } from './mail.provider';
import * as nodemailer from 'nodemailer';

export class NodemailerMailProvider implements MailProvider {
  private instance: nodemailer.Transporter;

  constructor() {
    this.instance = nodemailer.createTransport<nodemailer.TransportOptions>({
      // service: 'gmail',
      host: MailConstant.host,
      port: MailConstant.port,
      secure: MailConstant.secure,
      auth: MailConstant.auth,
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    } as any);
  }

  async sendMail(data: MailDataContract): Promise<boolean> {
    return this.instance
      .sendMail({
        from: {
          name: 'Paróquia São Benedito',
          address: MailConstant.auth.user,
        },
        to: {
          name: data.to.split('@')[0].toUpperCase(),
          address: data.to,
        },
        html: data.html,
        subject: data.subject,
        text: data.text,
      })
      .then(() => true)
      .catch((error) => {
        console.error(error);
        return false;
      });
  }
}
