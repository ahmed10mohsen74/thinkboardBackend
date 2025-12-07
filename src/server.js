import express from 'express';
import notesRouter from './router/notesRouter.js';
import { connectDB } from './config/db.js';
import dotenv from "dotenv"
import cors from 'cors';

dotenv.config()
 
const app =express();
const PORT = 5000;

console.log("process.env.MONGO_URL:", process.env.MONGO_URL);
console.log("process.env.PORT:", process.env.PORT);

connectDB()
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

app.use(express.json())

app.use("/api/notes", notesRouter)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})