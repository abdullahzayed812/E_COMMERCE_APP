// src/models/UserModel.ts
import { DBHelper } from "../utils/databaseHelper";

export class UserModel {
  static async create(user: any) {
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    const params = [user.name, user.email, user.password];
    return DBHelper.execute(sql, params);
  }

  static async findByEmail(email: string) {
    const sql = "SELECT * FROM users WHERE email = ?";
    const params = [email];
    return DBHelper.query(sql, params);
  }
}
