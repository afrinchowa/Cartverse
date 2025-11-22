import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
let port =process.env.PORT || 6000;
let app =express();

const url = "mongodb+srv://CartVerse:F5LO7RxuQYsKGccc@cluster0.8dojk.mongodb.net/"
app.listen(port,()=>{
    console.log("Hello from server")
})