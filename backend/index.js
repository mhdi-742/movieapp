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
app.use(cors())
app.listen("https://movieapp-api-742.vercel.app");
app.use(express.json());
app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
      );
      res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
      if (req.method === "OPTIONS") {
        return res.sendStatus(200);
      }
      next();
    });
app.use(routes);
