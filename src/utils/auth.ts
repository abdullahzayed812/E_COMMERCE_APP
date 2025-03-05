import jwt from "jsonwebtoken";
import { JwtPayload } from "../types";
import { getJwtSecret } from "./env";

const { sign, verify } = jwt;

export function signJwt(payload: JwtPayload): string {
  return sign(payload, getJwtSecret(), { expiresIn: "3d" });
}

export function verifyJwt(token: string): JwtPayload {
  return verify(token, getJwtSecret()) as JwtPayload;
}
