import { Request, Response } from "express";
import { UserService } from ".";
import { ResponseHandler } from "../../utils";
import { SignInRequest, SignInResponse, User } from "./types";
import { ExpressHandler } from "../../types";

export class UserController {
  constructor(private userService: UserService) {}

  public signIn: ExpressHandler<SignInRequest, SignInResponse> = async (req, res) => {
    const { login, password } = req.body;

    const isValid = validate({ login, password });

    if (!isValid) {
      ResponseHandler.error(res, "The user data are incomplete.", 400);
    }

    const result = await this.userService.getUserByEmail(login!);

    if (result.success) {
      ResponseHandler.success(res, result.message, result.data);
    } else {
      ResponseHandler.error(res, result.message, 500, result.errorDetails);
    }
  };
}
