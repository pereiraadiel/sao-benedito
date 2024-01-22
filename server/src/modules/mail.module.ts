import { Module } from '@nestjs/common';

import { MailService } from '../services/mail.service';
import { NodemailerMailProvider } from '../providers/nodemailer.mail.provider';
import { MAIL_PROVIDER } from './../providers/mail.provider';

const MailerProvider = {
  provide: MAIL_PROVIDER,
  useClass: NodemailerMailProvider,
};

@Module({
  providers: [MailerProvider, MailService],
  exports: [MailService, MailerProvider],
})
export class MailModule {}
