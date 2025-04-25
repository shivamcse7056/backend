import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
// import app from '../app.js';

const app = require('../app.js');

dotenv.config({
    path: "./.env"
});


connectDB()
.then(() => {
    app.listen(process.env.PORT|| 8000), () => {
        console.log(`Server is running on port ${process.env.PORT}`);
        
    }
})
.catch((err) => {
    console.error("ERROR:", err)
    process.exit(1)
})



/*
import express from "express";

const app = express()


( async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error", (error) => {
        console.log("err", error);
        throw error
       })

       app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
       })
        
    } catch (error) {
        console.error("ERROR:", error)
        throw err
    }

}) ()
    */