// src/models/CategoryModel.ts
import { DBHelper } from "../utils/databaseHelper";

export class CategoryModel {
  static async create(category: any) {
    const sql = "INSERT INTO categories (name) VALUES (?)";
    const params = [category.name];
    return DBHelper.execute(sql, params);
  }

  static async getAll() {
    const sql = "SELECT * FROM categories";
    return DBHelper.query(sql, []);
  }
}
