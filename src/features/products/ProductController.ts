import { Request, Response } from "express";
import { ProductService } from "./ProductService";
import { ResponseHandler } from "../../utils/ResponseHandler";

export class ProductController {
  static async create(req: Request, res: Response) {
    const { name, description, price, categoryId } = req.body;

    const result = await ProductService.createProduct({ name, description, price, categoryId });

    if (result.success) {
      ResponseHandler.success(res, result.message, result.data);
    } else {
      ResponseHandler.error(res, result.message, 500, result.errorDetails);
    }
  }

  static async getAll(req: Request, res: Response) {
    const result = await ProductService.getAllProducts();

    if (result.success) {
      ResponseHandler.success(res, result.message, result.data);
    } else {
      ResponseHandler.error(res, result.message, 500, result.errorDetails);
    }
  }

  static async getById(req: Request, res: Response) {
    const productId = parseInt(req.params.id, 10);

    const result = await ProductService.getProductById(productId);

    if (result.success) {
      ResponseHandler.success(res, result.message, result.data);
    } else {
      ResponseHandler.error(res, result.message, 404);
    }
  }
}
