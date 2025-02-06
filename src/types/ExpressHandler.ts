import { Request, Response } from "express";

export type ExpressHandler<ReqBody = any, ResBody = any, ReqQuery = any> = (
  req: Request<{}, {}, ReqBody, ReqQuery>,
  res: Response<ResBody>
) => Promise<void> | void;
