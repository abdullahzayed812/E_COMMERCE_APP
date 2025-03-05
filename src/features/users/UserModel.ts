import { DBHelper } from "../../utils";
import { User } from "./types";

export class UserModel {
  public async create(user: Partial<User>) {
    const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    const params = [user.username, user.email, user.password];
    return DBHelper.execute(sql, params);
  }

  public async findByEmail(email: string) {
    const sql = "SELECT * FROM users WHERE email = ?";
    const params = [email];
    return DBHelper.query<User[]>(sql, params);
  }

  public async findByUsername(username: string) {
    const sql = "SELECT * FROM users WHERE username = ?";
    const params = [username];
    return DBHelper.query<User[]>(sql, params);
  }

  public async findById(id: string) {
    const sql = "SELECT * FROM users WHERE id = ?";
    const params = [id];
    return DBHelper.query<User[]>(sql, params);
  }
}
