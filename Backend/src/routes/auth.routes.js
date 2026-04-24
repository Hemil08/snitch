import { Router } from "express"
import { validateRegisterUser } from "../validators/auth.validator.js"
import * as authController from "../controllers/auth.controller.js"

const router = Router()

router.post("/register",validateRegisterUser,authController.register)

export default router