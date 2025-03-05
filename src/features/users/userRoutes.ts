import { Router } from "express";
import { UserController, UserModel, UserService } from ".";
import { ValidationService } from "../../utils/validation";

const router = Router();

const userModel = new UserModel();
const userService = new UserService(userModel);
const validationService = new ValidationService();
const userController = new UserController(userService, validationService);

router.get("/signIn", userController.signIn);
router.get("/signUp", userController.signUp);

export default router;
