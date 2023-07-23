export type ErrorResponse = {
  statusCode?: string;
  message: string;
};

export const createError = (
  message: string,
  statusCode?: string
): ErrorResponse => ({ message, statusCode });
