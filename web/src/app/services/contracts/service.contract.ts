export type ServiceResponse<T> = {
  message: string;
  data: T;
  totalItems?: number;
  hasError: boolean;
};
