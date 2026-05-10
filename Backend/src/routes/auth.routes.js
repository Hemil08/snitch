import { Router } from "express"
import { validateLoginUser, validateRegisterUser } from "../validators/auth.validator.js"
import * as authController from "../controllers/auth.controller.js"
import passport from "passport"

const router = Router()

router.post("/register", validateRegisterUser,authController.register)

router.post("/login", validateLoginUser,authController.login)

router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }))

router.get("/auth/google/callback", 
    passport.authenticate("google",{session: false, failureRedirect: "/login"}),
    authController.googleCallback
)

export default router