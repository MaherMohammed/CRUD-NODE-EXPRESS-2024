import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required:[true,"Please Enter the product name"]
    },

    quantity:{
        type:Number,
        required:true
    }
})