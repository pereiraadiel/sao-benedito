export const ErrorConstant = {
  badRequest: {
    code: 400,
    message: 'This request was malformed',
  },
  unauthorized: {
    code: 401,
    message: 'This request was unauthorized',
  },
  forbidden: {
    code: 403,
    message: 'This request was forbidden',
  },
  notFound: {
    code: 404,
    message: 'This entity was not found',
  },
  alreadyExists: {
    code: 409,
    message: 'This entity already exists',
  },
  unprocessable: {
    code: 422,
    message: 'This entity was not completely processed',
  },
  tooManyRequest: {
    code: 429,
    message: 'Too many requests',
  },
  unexpected: {
    code: 500,
    message: 'An unexpected error occurred on the server',
  },
  notImplemented: {
    code: 501,
    message: 'This resource was not implemented',
  },
};
