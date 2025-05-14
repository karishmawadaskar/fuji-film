import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import {getHome,getHealth, getNotFound} from "./controllers/other.js";
dotenv.config();
import Film from "./models/Film.js";
import { getFilm, postFilm,getFilmById ,deleteFilmById,updateFilmById,updateFilmRatingById} from './controllers/films.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get("/",getHome);
app.get("/health",getHealth);

//film
app.post("/films",postFilm);
app.get ("/films",getFilm);
app.get ("/films/:id",getFilmById);
app.delete("/films/:id",deleteFilmById);
app.put("/films/:id",updateFilmById);
app.patch("/films/rating/:id",updateFilmRatingById);

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