// src/services/CategoryService.ts
import { CategoryModel } from "../models/CategoryModel";
import { ResponseHandler } from "../utils/responseHandler";

export class CategoryService {
  static async createCategory(category: { name: string }) {
    try {
      const result = await CategoryModel.create(category);
      return { success: true, message: "Category created successfully", data: result };
    } catch (error) {
      return { success: false, message: "Failed to create category", errorDetails: error };
    }
  }

  static async getAllCategories() {
    try {
      const categories = await CategoryModel.getAll();
      return { success: true, message: "Categories retrieved successfully", data: categories };
    } catch (error) {
      return { success: false, message: "Error retrieving categories", errorDetails: error };
    }
  }
}
