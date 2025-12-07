import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        // await mongoose.connect("http://localhost:27017")
        mongoose.connect('mongodb://127.0.0.1:27017/noteMohsen');
        console.log("DB connected");
    }
    catch (error) {
        console.log("Database connection error:", error);
        process.exit(1);
    }
}