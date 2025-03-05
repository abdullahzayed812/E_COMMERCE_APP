import { SignInRequest, SignUpRequest } from "../features/users/types";

const validate = (obj: any) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      if (!value) {
        return false;
      }
    }
  }

  return true;
};

export class ValidationService {
  public validateSignInRequest(data: Partial<SignInRequest>): boolean {
    return data && data.login && data.password ? true : false;
  }

  public validateSignUpRequest(data: Partial<SignUpRequest>): boolean {
    return data && data.username && data.email && data.password ? true : false;
  }
}
