// src/controllers/UserController.ts
import { Request, Response } from "express";
import { UserService } from "../services/userService";
import { ResponseHandler } from "../utils/responseHandler";

export class UserController {
  static async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const result = await UserService.createUser({ name, email, password });

    if (result.success) {
      ResponseHandler.success(res, result.message, result.data);
    } else {
      ResponseHandler.error(res, result.message, 500, result.errorDetails);
    }
  }

  static async getByEmail(req: Request, res: Response) {
    const email = req.params.email;

    const result = await UserService.getUserByEmail(email);

    if (result.success) {
      ResponseHandler.success(res, result.message, result.data);
    } else {
      ResponseHandler.error(res, result.message, 404);
    }
  }
}
