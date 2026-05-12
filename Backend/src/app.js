import express from "express"
import cookieparser from "cookie-parser"
import morgan from "morgan"
import authRouter from "./routes/auth.routes.js"
import productRouter from "./routes/product.routes.js"
import cors from "cors"
import passport from "passport"
import {Strategy as GoogleStrategy} from "passport-google-oauth20"
import {config} from "./config/config.js"

const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieparser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))
app.use(passport.initialize())

passport.use(new GoogleStrategy({
    clientID: config.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'auth/google/callback',
},(accessToken, refreshToken, profile, done) => {
    return done(null, profile)
}))

// auth routes
app.use("/api/auth",authRouter)

app.use("/api/products", productRouter)

export default app 