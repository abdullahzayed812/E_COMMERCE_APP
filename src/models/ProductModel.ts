// src/models/ProductModel.ts
import { DBHelper } from "../utils/databaseHelper";

export class ProductModel {
  static async create(product: any) {
    const sql = "INSERT INTO products (name, description, price, category_id) VALUES (?, ?, ?, ?)";
    const params = [product.name, product.description, product.price, product.categoryId];
    return DBHelper.execute(sql, params);
  }

  static async findById(productId: number) {
    const sql = "SELECT * FROM products WHERE id = ?";
    const params = [productId];
    return DBHelper.query(sql, params);
  }

  static async getAll() {
    const sql = "SELECT * FROM products";
    return DBHelper.query(sql, []);
  }
}
