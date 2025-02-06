export interface CreateCategoryRequest {
  name: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface GetAllCategoriesResponse {
  categories: Category[];
}
