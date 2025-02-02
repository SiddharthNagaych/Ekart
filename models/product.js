import mongoose, { mongo } from "mongoose";


const ProductSchema=new mongoose.Schema({
 
    name:{
        type:String,
        required:true
    },
    image_uri:{
        type:String,
        required:true
    },
    ar_uri:{
        type:String,
    },
    price:{
        type:Number,
        required:true,
    },
    category:[{type:mongoose.Schema.Types.ObjectId,ref:"Category"}],
    createdAt:{
        type:Date,
        default:Date.now,
    },
    updatedAt:{
        type:Date,
        default:Date.now,   
    },
});


const Product=mongoose.model("Product",ProductSchema);
export default Product;