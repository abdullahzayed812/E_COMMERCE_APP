// src/services/UserService.ts
import { UserModel } from "../models/UserModel";

export class UserService {
  static async createUser(user: { name: string; email: string; password: string }) {
    try {
      const result = await UserModel.create(user);
      return { success: true, message: "User created successfully", data: result };
    } catch (error) {
      return { success: false, message: "Failed to create user", errorDetails: error };
    }
  }

  static async getUserByEmail(email: string) {
    try {
      const user = await UserModel.findByEmail(email);
      if (user) {
        return { success: true, message: "User found", data: user };
      } else {
        return { success: false, message: "User not found" };
      }
    } catch (error) {
      return { success: false, message: "Error fetching user", errorDetails: error };
    }
  }
}
