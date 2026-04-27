import { Router } from "express"
import { validateLoginUser, validateRegisterUser } from "../validators/auth.validator.js"
import * as authController from "../controllers/auth.controller.js"

const router = Router()

router.post("/register", validateRegisterUser,authController.register)

router.post("/login", validateLoginUser,authController.login)

export default router