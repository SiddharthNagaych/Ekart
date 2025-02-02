import mongoose,{Document,Schema} from "mongoose";

const ItemSchema=new Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
});

const OrderSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    delivery_date:{
        type:Data,
        required:true,
    },
    address:{
        type:String,
    },
    items:{type:[ItemSchema],required:true},
    status:{
        enum:["Order Placed","Delivered","Cancelled","Shipped","Out for delivery"],
        default:"Order Placed",
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    updatedAt:{
        type:Date,
        default:Date.now,   
    },
});
const Order=mongoose.model("Order",OrderSchema);
export default Order;
