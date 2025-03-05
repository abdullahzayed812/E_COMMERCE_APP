import { ExpressHandler, JwtPayload } from "../types/apis";
import { TokenExpiredError, VerifyErrors } from "jsonwebtoken";
import { ResponseHandler } from "../utils";
import { UserModel } from "../features/users";
import { verifyJwt } from "../utils/auth";

export class AuthMiddleware {
  constructor(private userModel: UserModel) {}

  public parseJwt: ExpressHandler<any, any> = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return next();
    }

    let jwtPayload: JwtPayload;

    try {
      jwtPayload = verifyJwt(token);
    } catch (error) {
      const verifyError = error as VerifyErrors;

      if (verifyError instanceof TokenExpiredError) {
        return ResponseHandler.error(res, "Token Expired...", 401);
      }

      return ResponseHandler.error(res, "Bad Token", 401);
    }

    const user = await this.userModel.findById(jwtPayload.userId);

    if (!user) {
      return ResponseHandler.error(res, "User not found...", 401);
    }

    res.locals.userId = user[0].id;

    return next();
  };

  public enforceJwt: ExpressHandler<any, any> = async (_, res, next) => {
    if (!res.locals.userId) {
      return ResponseHandler.error(res, "Enforce jwt error...", 401);
    }

    return next();
  };
}
