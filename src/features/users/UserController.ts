import { UserService } from ".";
import { ResponseHandler } from "../../utils";
import { SignInRequest, SignInResponse, SignUpRequest, SignUpResponse } from "./types";
import { ExpressHandler } from "../../types";
import { ValidationService } from "../../utils/validation";

export class UserController {
  constructor(private userService: UserService, private validationService: ValidationService) {}

  public signIn: ExpressHandler<SignInRequest, SignInResponse> = async (req, res) => {
    const credentials = req.body;

    const isValid = this.validationService.validateSignInRequest(credentials);

    if (!isValid) {
      ResponseHandler.error(res, "The user data are incomplete.", 400);
    }

    const result =
      (await this.userService.getUserByEmail(credentials.login!)) ||
      (await this.userService.getUserByUsername(credentials.login!));

    if (result.success) {
      ResponseHandler.success(res, result.message, result.data);
    } else {
      ResponseHandler.error(res, result.message, 500, result.errorDetails);
    }
  };

  public signUp: ExpressHandler<SignUpRequest, SignUpResponse> = async (req, res) => {
    const user = req.body;

    const isValid = this.validationService.validateSignUpRequest(user);

    if (!isValid) {
      ResponseHandler.error(res, "Invalid user data", 400);
    }

    const result = await this.userService.createUser(user);
  };
}
