export const MailConstant = {
  auth: {
    user: process.env.APP_EMAIL_USER as string,
    pass: process.env.APP_EMAIL_PASS as string,
  },
  port: process.env.APP_EMAIL_PORT as string,
  host: process.env.APP_EMAIL_HOST as string,
  secure: Boolean(process.env.APP_EMAIL_SECURE),
};
