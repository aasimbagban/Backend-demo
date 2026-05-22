import dotenv from 'dotenv';
dotenv.config({
    path:'./.env'
})
import connectDB from "./db/index.js";
import { app } from './app.js';




// PORT=process.env.PORT;

 connectDB()
 .then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server is running on port:${process.env.PORT}`);
    })
 })
 .catch((err)=>{
    console.log("Mongo connection failed",err);
 }) 