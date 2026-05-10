import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    seller : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    price:{
        amount:{
            type:Number,
            required:true
        },
        currency:{
            type:String,
            enum: ["EUR", "USD", "INR", "GBP", "JPY", "CNY"],
            default:"EUR"
        }
    },
    images:[
        {
            url:{
                type:String,
                required:true
            }
        }
    ]
},{
    timestamps:true
})

const productModel = mongoose.model("product",productSchema)

export default productModel