// src/utils/responseHandler.ts
import { Request, Response } from "express";

export class ResponseHandler {
  static success(res: Response, message: string, data: any = null, statusCode: number = 200) {
    res.status(statusCode).json({
      status: "success",
      message,
      data,
    });
  }

  static error(res: Response, message: string, statusCode: number = 500, errorDetails: any = null) {
    res.status(statusCode).json({
      status: "error",
      message,
      errorDetails,
    });
  }
}
