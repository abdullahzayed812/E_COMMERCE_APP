import userRoutes from "./features/users/userRoutes";
import productRoutes from "./features/products/productRoutes";
import categoryRoutes from "./features/categories/categoryRoutes";
import orderRoutes from "./features/orders/orderRoutes";

import express from "express";
import cors from "cors";
import { errorHandler, requestLogger } from "./middlewares";
import { AuthMiddleware } from "./middlewares/authMiddleware";
import { UserModel } from "./features/users";

export async function createServer(logRequests: boolean = true) {
  const app = express();

  const userModel = new UserModel();
  const auth = new AuthMiddleware(userModel);

  app.use(express.json());
  app.use(cors());

  if (logRequests) {
    app.use(requestLogger);
  }

  app.use("api/v1/users", userRoutes);

  app.use(auth.parseJwt, auth.enforceJwt);

  app.use("api/v1/products", productRoutes);
  app.use("api/v1/categories", categoryRoutes);
  app.use("api/v1/orders", orderRoutes);

  app.use(errorHandler);

  const { ENV } = process.env;

  if (!ENV) {
    throw "Environment not defined, make sure to pass in env vars or have a .env file at root.";
  }

  return app;
}
