// src/controllers/CategoryController.ts
import { Request, Response } from "express";
import { CategoryService } from "../services/CategoryService";
import { ResponseHandler } from "../utils/responseHandler";

export class CategoryController {
  static async create(req: Request, res: Response) {
    const { name } = req.body;

    const result = await CategoryService.createCategory({ name });

    if (result.success) {
      ResponseHandler.success(res, result.message, result.data);
    } else {
      ResponseHandler.error(res, result.message, 500, result.errorDetails);
    }
  }

  static async getAll(req: Request, res: Response) {
    const result = await CategoryService.getAllCategories();

    if (result.success) {
      ResponseHandler.success(res, result.message, result.data);
    } else {
      ResponseHandler.error(res, result.message, 500, result.errorDetails);
    }
  }
}
