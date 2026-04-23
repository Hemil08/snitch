import app from "./src/app.js"
import { config } from "dotenv"

config()



app.listen(3000,()=>{
    console.log("Server is runnig on port 3000")
})