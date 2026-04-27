import express from "express"
import cookieparser from "cookie-parser"
import morgan from "morgan"
import authRouter from "./routes/auth.routes.js"
import cors from "cors"

const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(cookieparser())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

export default app 