import { DBHelper } from "../../utils";
import { User } from "./types";

export class UserModel {
  async create(user: any) {
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    const params = [user.name, user.email, user.password];
    return DBHelper.execute(sql, params);
  }

  async findByEmail(email: string) {
    const sql = "SELECT * FROM users WHERE email = ?";
    const params = [email];
    return DBHelper.query<User[]>(sql, params);
  }

  async findByUsername(username: string) {
    const sql = "SELECT * FROM users WHERE username = ?";
    const params = [username];
    return DBHelper.query<User[]>(sql, params);
  }
}
