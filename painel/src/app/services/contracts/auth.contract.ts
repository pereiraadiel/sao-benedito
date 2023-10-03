export type SignUserIn = {
  username: string;
  password: string;
};

export type RequestUserResetPassword = {
  email: string;
};

export type ResetUserPassword = {
  password: string;
  token: string;
};
