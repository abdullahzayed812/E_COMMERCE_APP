import { RequestHandler } from "express";

export interface JwtPayload {
  userId: string;
}

export type ApiError = {
  code: string;
  message: string;
  stack?: string;
};

export type ApiResponse<T = any> = {
  success: boolean;
  message: string;
  data?: T;
  errorDetails?: ApiError;
};

export type ExpressHandler<Req, Res> = RequestHandler<string, Partial<ApiResponse<Res>>, Partial<Req>, any>;
