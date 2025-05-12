import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import {getHome,getHealth, getNotFound} from "./controllers/other.js";
dotenv.config();
import Film from "./models/Film.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/",getHome);
app.get("/health",getHealth);

//film
app.post("/films",async(req,res)=>{

    const {
        title,
        shortDescription,
        director,
        poster,
        releaseYear,
        category,
        language,
        rating,
        countries,
        awards
    }=req.body;

    const newFilm = new Film({
         title: title,
        shortDescription:shortDescription,
        director:director,
        poster:poster,
        releaseYear: releaseYear,
        category:category,
        language:language,
        rating:rating,
        countries:countries,
        awards:awards
    });

    const savedFilm = await newFilm.save();

    return res.status(201).json({
        success:true,
        message:"Film created.",
        data:savedFilm
    });
});

app.get ("/films",async(req,res)=>{
    const films = await Film.find();
    return res.status(200).json({success:true,data:films,message:"All Films fatched."})
});
const connectDB = async()=>{
  const conn = await mongoose.connect(process.env.MONGO_URI);
  if(conn){
    console.log("connect to mongodb");
  }
}

// app.get("*",getNotFound);

const PORT= process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    connectDB();
})