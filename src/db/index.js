import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


const connectDB = async () => {
    try {
        const connectionInstace = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB connected successfully DB HOST: ${connectionInstace.connection.host}`);
        
    } catch (error) {
        console.error("ERROR:", error)
        process.exit(1)
        
    }
}

export default connectDB