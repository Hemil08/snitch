import express from "express"
import cookieparser from "cookie-parser"
import morgan from "morgan"
import authRouter from "./routes/auth.routes.js"
import cors from "cors"

const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieparser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use("/api/auth",authRouter)

export default app 