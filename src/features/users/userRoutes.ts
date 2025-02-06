import { Router } from "express";
import { UserController } from ".";

const router = Router();

router.post("/users", UserController.create);
router.get("/users/:email", UserController.getByEmail);

export default router;
