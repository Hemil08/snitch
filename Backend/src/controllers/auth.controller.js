import userModel from "../models/user.model.js"
import jwt from "jsonwebtoken"
import { config } from "../config/config.js"

async function sendTokenRequest(user,res){

    const token = jwt.sign({
        id:user._id,
    },config.jwtSecret,{
        expiresIn:"7d"
    })

    res.status(200).json({
        token,
        user:{
            id:user._id,
            email:user.email,
            contact:user.contact,
            fullname:user.fullname,
            role:user.role
        }
    })
}

export const register = async(req,res) => {
    const {email,contact,password,fullname,isSeller} = req.body

    try {
        const existingUser = await userModel.findOne({
            $or:[
                {email},
                {"contact.number":contact.number}
            ]
        })

        if(existingUser){
            return res.status(400).json({
                message:"User with the provided email or contact number already exists"
            })
        }

        const user = await userModel.create({
            email,
            contact,
            password,
            fullname,
            role: isSeller ? "seller" : "buyer"
        })

        await sendTokenRequest(user,res)


    }
    catch(error) {
        console.error("Error in user registration:", error);
        res.status(500).json({ message: "Server error" });
    }
}