const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'});
const Router = require("./routers/blogRoute");
const Route = require("./routers/commentRoute")


const app = express();
app.use(express.json());
app.use('api', Router);
app.use('api', Route)


const DB = process.env.DATABASE

mongoose.connect(DB).then(()=>{
    console.log("Database Connected.")
}).then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("Server is Connected." + process.env.PORT)
    })
})