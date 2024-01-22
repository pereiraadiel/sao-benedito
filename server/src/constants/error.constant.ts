export const ErrorConstant = {
  badRequest: {
    code: 400,
    message:
      'Há algum problema no conteúdo da requisição, verifique os dados e tente novamente!',
  },
  unauthorized: {
    code: 401,
    message: 'Solicitação recusada! verifique as credenciais',
  },
  forbidden: {
    code: 403,
    message:
      'Solicitação recusada! Você não possui as autorizações necessárias',
  },
  notFound: {
    code: 404,
    message: 'Recurso não encontrado!',
  },
  alreadyExists: {
    code: 409,
    message: 'Um recurso com dados conflitantes já existe!',
  },
  unprocessable: {
    code: 422,
    message: 'O recurso não foi totalmente processado, tente novamente!',
  },
  tooManyRequest: {
    code: 429,
    message: 'Muitas solicitações recorrentes',
  },
  unexpected: {
    code: 500,
    message: 'Ocorreu um erro inesperado no servidor',
  },
  notImplemented: {
    code: 501,
    message: 'Recurso ainda não implementado!',
  },
} as const;
