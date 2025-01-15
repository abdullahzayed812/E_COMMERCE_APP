// src/services/OrderService.ts
import { OrderModel } from "../models/OrderModel";
import { ResponseHandler } from "../utils/responseHandler";

export class OrderService {
  static async createOrder(order: { userId: number; totalPrice: number; status: string }) {
    try {
      const result = await OrderModel.create(order);
      return { success: true, message: "Order created successfully", data: result };
    } catch (error) {
      return { success: false, message: "Failed to create order", errorDetails: error };
    }
  }

  static async getOrdersByUserId(userId: number) {
    try {
      const orders = await OrderModel.getByUserId(userId);
      return { success: true, message: "Orders retrieved successfully", data: orders };
    } catch (error) {
      return { success: false, message: "Error retrieving orders", errorDetails: error };
    }
  }
}
