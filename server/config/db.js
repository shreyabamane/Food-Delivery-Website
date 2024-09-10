import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_CONNECTION).then(()=>console.log("DB Connected"));
}