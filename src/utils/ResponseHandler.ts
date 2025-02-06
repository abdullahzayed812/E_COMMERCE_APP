import { Response } from "express";
import { ApiResponse } from "../types/ApiResponse";

export class ResponseHandler {
  static success<T>(res: Response, message: string, data?: T) {
    const response: ApiResponse<T> = { success: true, message, data };
    res.status(200).json(response);
  }

  static error(res: Response, message: string, statusCode: number, errorDetails?: any) {
    const response: ApiResponse = { success: false, message, errorDetails };
    res.status(statusCode).json(response);
  }
}
