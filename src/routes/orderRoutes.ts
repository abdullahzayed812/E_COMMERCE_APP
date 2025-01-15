// src/routes/orderRoutes.ts
import { Router } from "express";
import { OrderController } from "../controllers/OrderController";

const router = Router();

// Order routes
router.post("/orders", OrderController.create);
router.get("/orders/:userId", OrderController.getByUserId);

export default router;
