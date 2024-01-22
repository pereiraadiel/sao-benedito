export const AppConstants = {
  name: process.env.APP_NAME as string,
  port: Number(process.env.APP_PORT) || 3000,
} as const;
