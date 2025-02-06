import { ProductModel } from ".";

export class ProductService {
  static async createProduct(product: { name: string; description: string; price: number; categoryId: number }) {
    try {
      const result = await ProductModel.create(product);
      return { success: true, message: "Product created successfully", data: result };
    } catch (error) {
      return { success: false, message: "Failed to create product", errorDetails: error };
    }
  }

  static async getAllProducts() {
    try {
      const products = await ProductModel.getAll();
      return { success: true, message: "Products retrieved successfully", data: products };
    } catch (error) {
      return { success: false, message: "Error retrieving products", errorDetails: error };
    }
  }

  static async getProductById(productId: number) {
    try {
      const product = await ProductModel.findById(productId);
      if (product) {
        return { success: true, message: "Product found", data: product };
      } else {
        return { success: false, message: "Product not found" };
      }
    } catch (error) {
      return { success: false, message: "Error fetching product", errorDetails: error };
    }
  }
}
