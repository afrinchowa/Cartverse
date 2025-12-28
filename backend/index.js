import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
dotenv.config()
let port =process.env.PORT || 6000;
let app =express();

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true
}))
app.use("/api/auth" , authRoutes)


const url = "mongodb+srv://CartVerse:F5LO7RxuQYsKGccc@cluster0.8dojk.mongodb.net/"
app.listen(port,()=>{
    console.log("Hello from server")
    connectDB()
})