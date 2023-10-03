export type SignUserIn = {
  username: string;
  password: string;
};

export type SignUserOut = {
  accessToken: string;
};

export type RefreshToken = {
  accessToken: string;
};

export type IsAuth = {
  accessToken: string;
};

export type RequestUserResetPassword = {
  email: string;
};

export type ResetUserPassword = {
  password: string;
  token: string;
};
