export const AuthConstant = {
  jwt: {
    secret: process.env.APP_AUTH_SECRET,
    expiresIn: process.env.APP_AUTH_EXPIRES_IN_SECONDS,
  },
} as const;
