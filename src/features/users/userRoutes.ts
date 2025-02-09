import { Router } from "express";
import { UserController, UserModel, UserService } from ".";

const router = Router();

const userModel = new UserModel();
const userService = new UserService(userModel);
const userController = new UserController(userService);

router.get("/signIn", userController.signIn);

export default router;
