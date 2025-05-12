import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {getHome,getHealth, getNotFound} from "./controllers/other.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/",getHome);
app.get("/health",getHealth);



// app.get("*",getNotFound);

const PORT= process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})