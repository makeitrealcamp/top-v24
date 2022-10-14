import { Request, Response, NextFunction } from "express"
import User, { IUser } from "./user.model"


export async function signUp(req: Request, res: Response, next: NextFunction): Promise<void> {
  const userData: IUser = await User.create(req.body)

  res.status(200).json(userData)
}