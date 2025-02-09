import { ExpressHandler } from "../../types/apis";
import { CategoryService } from "./CategoryService";
import { ResponseHandler } from "../../utils/ResponseHandler";
import { ApiResponse } from "../../types/ApiResponse";
import type { CreateCategoryRequest, GetAllCategoriesResponse } from ".";

export class CategoryController {
  private categoryService: CategoryService;

  constructor(categoryService: CategoryService) {
    this.categoryService = categoryService;
  }

  create: ExpressHandler<CreateCategoryRequest, ApiResponse> = async (req, res) => {
    const { name } = req.body;

    const result = await this.categoryService.createCategory({ name });

    if (result.success) {
      ResponseHandler.success(res, result.message, result.data);
    } else {
      ResponseHandler.error(res, result.message, 500, result.errorDetails);
    }
  };

  getAll: ExpressHandler<{}, ApiResponse<GetAllCategoriesResponse>> = async (req, res) => {
    const result = await this.categoryService.getAllCategories();

    if (result.success) {
      ResponseHandler.success(res, result.message, result.data);
    } else {
      ResponseHandler.error(res, result.message, 500, result.errorDetails);
    }
  };
}
