import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        // await mongoose.connect("http://localhost:27017")
        mongoose.connect('mongodb+srv://amgaming195_db_user:r97CneVTqvgCVUgL@cluster0.qj3xlnb.mongodb.net/notes-db?appName=Cluster0');
        console.log("DB connected");
    }
    catch (error) {
        console.log("Database connection error:", error);
        process.exit(1);
    }
}
// mongodb+srv://amgaming195_db_user:r97CneVTqvgCVUgL@cluster0.qj3xlnb.mongodb.net/?appName=Cluster0 