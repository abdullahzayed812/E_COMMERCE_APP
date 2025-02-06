import { Router } from "express";
import { CategoryController } from "./CategoryController";
import { CategoryService } from "./CategoryService";
import { CategoryModel } from "./CategoryModel";

const categoryModel = new CategoryModel();
const categoryService = new CategoryService(categoryModel);
const categoryController = new CategoryController(categoryService);

const router = Router();

router.post("/categories", (req, res) => categoryController.create(req, res));
router.get("/categories", (req, res) => categoryController.getAll(req, res));

export default router;
