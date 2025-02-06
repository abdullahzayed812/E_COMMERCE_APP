import { Router } from "express";
import { OrderController } from ".";

const router = Router();

router.post("/orders", OrderController.create);
router.get("/orders/:userId", OrderController.getByUserId);

export default router;
