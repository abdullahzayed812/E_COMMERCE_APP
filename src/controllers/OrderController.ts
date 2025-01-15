// src/controllers/OrderController.ts
import { Request, Response } from "express";
import { OrderService } from "../services/OrderService";
import { ResponseHandler } from "../utils/responseHandler";

export class OrderController {
  static async create(req: Request, res: Response) {
    const { userId, totalPrice, status } = req.body;

    const result = await OrderService.createOrder({ userId, totalPrice, status });

    if (result.success) {
      ResponseHandler.success(res, result.message, result.data);
    } else {
      ResponseHandler.error(res, result.message, 500, result.errorDetails);
    }
  }

  static async getByUserId(req: Request, res: Response) {
    const userId = parseInt(req.params.userId, 10);

    const result = await OrderService.getOrdersByUserId(userId);

    if (result.success) {
      ResponseHandler.success(res, result.message, result.data);
    } else {
      ResponseHandler.error(res, result.message, 500, result.errorDetails);
    }
  }
}
