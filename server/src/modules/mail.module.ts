import { Module } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

import { MailService } from '../services/mail.service';
import { MailConstant } from '../constants/mail.constant';

const MailerProvider = {
  provide: 'MAILER_PROVIDER',
  useFactory: () =>
    nodemailer.createTransport({
      service: 'Gmail',
      auth: MailConstant,
    }),
};

@Module({
  providers: [MailerProvider, MailService],
  exports: [MailService, MailerProvider],
})
export class MailModule {}
