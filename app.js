import express from "express";
import userRoutes from "./routes/user.js";
import categoryRoutes from "./routes/categories.js";
import productRoutes from "./routes/product.js";
import dotenv from "dotenv";
dotenv.config();

const app=express();

app.use(express.json());

// Registering the Routes

app.use("/user",userRoutes);

app.use("/category",categoryRoutes);

app.use("/product",productRoutes);


const start = async () =>{
    try{

     app.listen({port:3000,host:"0.0.0.0"}, (err,addr) =>{
        if(err){
            console.log("error starting the server",err)
        }else{
            console.log("server started at localhost:3000") 
        }
     })

    }catch{(error)
        console.log("error starting the server",error)
    }
}

start()
