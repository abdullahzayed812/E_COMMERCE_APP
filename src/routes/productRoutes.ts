// src/routes/productRoutes.ts
import { Router } from "express";
import { ProductController } from "../controllers/ProductController";

const router = Router();

// Product routes
router.post("/products", ProductController.create);
router.get("/products", ProductController.getAll);
router.get("/products/:id", ProductController.getById);

export default router;
