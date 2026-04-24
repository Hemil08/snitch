import express from "express"
import cookieparser from "cookie-parser"
import morgan from "morgan"
import authRouter from "./routers/authRouter.js"

const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(cookieparser())

export default app 