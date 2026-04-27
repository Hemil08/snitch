import { createBrowserRouter } from "react-router";
import Register from "../features/auth/pages/Register.jsx";


const router = createBrowserRouter([
    {
        path:"/",
        element:<h1> Home Page</h1> 
    },
    {
        path:"/register",
        element:<Register />
    },
    {
        path:"/login",
        element:<h1> Login Page</h1>
    }
])

export default router