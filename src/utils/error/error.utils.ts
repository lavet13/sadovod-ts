export type ErrorResponse = {
  statusCode?: string;
  errorMessage: string;
};

export type ValidationErrors = {
  errorMessage: string;
  fieldErrors: Record<string, string>;
};

export const createError = (
  errorMessage: string,
  statusCode?: string
): ErrorResponse => ({ errorMessage, statusCode });
