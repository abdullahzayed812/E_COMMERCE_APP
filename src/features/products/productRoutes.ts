import { Router } from "express";
import { ProductController } from ".";

const router = Router();

router.post("/products", ProductController.create);
router.get("/products", ProductController.getAll);
router.get("/products/:id", ProductController.getById);

export default router;
