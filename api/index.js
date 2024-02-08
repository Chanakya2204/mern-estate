
import express from "express";

// const dbConnect = require('./dbConnect.js');
import dbConnect from "./dbConnect";
// mongoose.connect("mongodb+srv://Chanakya:HUrr0DVFMA8xlfgs@cluster0.ymin3zh.mongodb.net/")

const app= express()

app.listen(3000,()=>{
    dbConnect();
    console.log("server is running on 3000!!! ");
})