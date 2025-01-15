// src/routes/categoryRoutes.ts
import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController";

const router = Router();

// Category routes
router.post("/categories", CategoryController.create);
router.get("/categories", CategoryController.getAll);

export default router;
