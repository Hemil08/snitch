import { Router } from "express"
import { validateLoginUser, validateRegisterUser } from "../validators/auth.validator.js"
import * as authController from "../controllers/auth.controller.js"
import passport from "passport"
import { authenticateUser } from "../middlewares/auth.middleware.js"

const router = Router()

// @route POST /api/auth/register
// @desc Register a new user
// @access Public

router.post("/register", validateRegisterUser,authController.register)

// @route POST /api/auth/login
// @desc Authenticate user and return JWT token
// @access Public

router.post("/login", validateLoginUser,authController.login)

// @route GET /api/auth/google
// @desc Initiate Google OAuth login
// @access Public (but will redirect to Google for authentication)

router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }))

// @route GET /api/auth/google/callback
// @desc Handle Google OAuth callback
// @access Public (but will create or authenticate user)

router.get("/auth/google/callback", 
    passport.authenticate("google",{session: false, failureRedirect: "/login"}),
    authController.googleCallback
)

// @route GET /api/auth/me
// @desc Get the authenticated user's profile
// @access Private (requires authentication)

router.get("/me", authenticateUser ,authController.getMe)

export default router