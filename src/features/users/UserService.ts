import { UserModel } from ".";
import { User } from "./types";

export class UserService {
  constructor(private userModel: UserModel) {}

  public async getUserByEmail(email: string) {
    try {
      const user = await this.userModel.findByEmail(email);

      if (user) {
        return { success: true, message: "User found", data: user };
      }
      return { success: false, message: "User not found" };
    } catch (error) {
      return { success: false, message: "Error fetching user", errorDetails: error };
    }
  }

  public async getUserByUsername(username: string) {
    try {
      const user = await this.userModel.findByUsername(username);

      if (user) {
        return { success: true, message: "User found", data: user };
      }
      return { success: false, message: "User not found" };
    } catch (error) {
      return { success: false, message: "Error fetching user", errorDetails: error };
    }
  }

  public async createUser(user: Partial<User>) {
    const userExists = await this.userModel.findByEmail(user.email!);

    if (userExists) {
      return { success: false, message: "Email already used.", data: user };
    }

    const result = await this.userModel.create(user);

    if (result.affectedRows > 0) {
      return { success: true, message: `User is created successfully.`, data: user };
    }
  }
}
