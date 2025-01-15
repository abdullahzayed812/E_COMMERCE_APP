// src/routes/userRoutes.ts
import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();

// User routes
router.post("/users", UserController.create);
router.get("/users/:email", UserController.getByEmail);

export default router;
