
import { Router } from "express";
import { signUp } from "../controllers/authController";

const authRouter = Router()

authRouter.post('/sigup', signUp)

export default authRouter