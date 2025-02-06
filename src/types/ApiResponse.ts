export type ApiError = {
  code: string;
  message: string;
  stack?: string; // Include stack trace in development
};

export type ApiResponse<T = any> = {
  success: boolean;
  message: string;
  data?: T;
  errorDetails?: ApiError;
};
