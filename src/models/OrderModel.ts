// src/models/OrderModel.ts
import { DBHelper } from "../utils/databaseHelper";

export class OrderModel {
  static async create(order: any) {
    const sql = "INSERT INTO orders (user_id, total_price, status) VALUES (?, ?, ?)";
    const params = [order.userId, order.totalPrice, order.status];
    return DBHelper.execute(sql, params);
  }

  static async getByUserId(userId: number) {
    const sql = "SELECT * FROM orders WHERE user_id = ?";
    const params = [userId];
    return DBHelper.query(sql, params);
  }
}
