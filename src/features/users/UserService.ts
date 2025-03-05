import { UserModel } from ".";
import { User } from "./types";

export class UserService {
  constructor(private userModel: UserModel) {}

  public async getUserByEmail(email: string) {
    try {
      const user = await this.userModel.findByEmail(email);

      if (user) {
        return { success: true, message: "User found", data: user };
      } else {
        return { success: false, message: "User not found" };
      }
    } catch (error) {
      return { success: false, message: "Error fetching user", errorDetails: error };
    }
  }

  public async getUserByUsername(username: string) {
    try {
      const user = await this.userModel.findByUsername(username);

      if (user) {
        return { success: true, message: "User found", data: user };
      } else {
        return { success: false, message: "User not found" };
      }
    } catch (error) {
      return { success: false, message: "Error fetching user", errorDetails: error };
    }
  }

  public async createUser(user: Partial<User>) {}
}
