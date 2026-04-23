import express from "express"
import cookieparser from "cookie-parser"
import morgan from "morgan"

const app = express()

app.use(morgan("dev"))
app.use(express(json))
app.use(cookieparser())

export default app 