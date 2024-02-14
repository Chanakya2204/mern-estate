import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"



const connectToMongo = async () => {
  try {
    await mongoose.connect("mongodb+srv://binaybeheramongodb:2pUE64YBxssakhlM@mycluster.4rfssmx.mongodb.net/?retryWrites=true&w=majority",
      { dbName: "real-estate" }
    );
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
  }
};


const app = express();

app.use(express.json())
 
app.listen(3000, () => {
  connectToMongo();
  console.log("server is running on 3000!!! ");
});

//creating a api route
app.use("/api/user",userRouter);

app.use("/api/auth",authRouter);

app.use((err,req,res,next)=>{
  const statusCode =err.message || 'internal server error';
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message,
  })
})

