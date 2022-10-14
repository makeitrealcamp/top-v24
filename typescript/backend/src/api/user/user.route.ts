import { Router } from "express";
import { signUp } from "./user.controller";


const router = Router()

router.route("/").post(signUp)

export default router