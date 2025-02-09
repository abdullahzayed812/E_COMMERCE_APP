export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}

export interface SignInRequest {
  login: string;
  password: string;
}

export type SignInResponse = {
  user: Pick<User, "id" | "email" | "username">;
  accessToken: string;
};
