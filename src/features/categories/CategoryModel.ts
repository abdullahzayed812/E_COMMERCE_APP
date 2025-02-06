import { DBHelper } from "../../utils/DBHelper";
import { CreateCategoryRequest, Category } from ".";

export class CategoryModel {
  async create(category: CreateCategoryRequest): Promise<Category> {
    const sql = "INSERT INTO categories (name) VALUES (?)";
    const params = [category.name];
    const result = await DBHelper.execute<{ insertId: number }>(sql, params);
    return { id: result.insertId, name: category.name };
  }

  async getAll(): Promise<Category[]> {
    const sql = "SELECT * FROM categories";
    return DBHelper.query<Category[]>(sql, []);
  }
}
