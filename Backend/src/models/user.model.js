import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },

    contact:{
        country:{type:String,required:true,default:"+91"},
        number:{
            type:String,
            required:true,
            unique:true,    
        },
    },

    password:{
        type:String,
        required:true
    },

    fullname:{
        type:String,
        required:true
    },

    role:{
        type:String,
        enum:["seller","buyer"],
        default:"buyer"
    }
})

const userModel = mongoose.model("user",userSchema)

export default userModel