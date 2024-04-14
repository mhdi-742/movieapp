const express=require('express');
require("dotenv").config();
const routes=require('./routes/routes');
const bcrypt=require('bcryptjs')
const app=express();
const User=require('./models/User')
const mongoose=require('mongoose');
const url=process.env.WE_MONGOOSE;
let cors=require('cors');
mongoose.connect(url)
.then((res)=>console.log("connected"))
.catch((err)=>console.log(err));
app.use(cors(
    {
        origin:["https://movieapp-api-742.vercel.app"],
        methords:["POST","GET"],
        credentials:true
    }
))
app.use(express.json());
app.use(routes);
