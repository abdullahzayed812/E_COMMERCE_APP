import { ApiResponse } from "../../types";
import { CreateCategoryRequest, GetAllCategoriesResponse } from ".";
import { CategoryModel } from "./CategoryModel";

export class CategoryService {
  private categoryModel: CategoryModel;

  constructor(categoryModel: CategoryModel) {
    this.categoryModel = categoryModel;
  }

  async createCategory(category: CreateCategoryRequest): Promise<ApiResponse> {
    try {
      const result = await this.categoryModel.create(category);
      return { success: true, message: "Category created successfully", data: result };
    } catch (error: any) {
      return { success: false, message: "Failed to create category", errorDetails: error };
    }
  }

  async getAllCategories(): Promise<ApiResponse<GetAllCategoriesResponse>> {
    try {
      const categories = await this.categoryModel.getAll();
      return { success: true, message: "Categories retrieved successfully", data: { categories } };
    } catch (error: any) {
      return { success: false, message: "Error retrieving categories", errorDetails: error };
    }
  }
}
