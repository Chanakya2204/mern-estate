import express from "express";
import mongoose from "mongoose";
import UserRouter from "./routes/user.route.js"




const connectToMongo = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mernestate2:8Y2bwAPld3ysTV1Y@mycluster2.svgjhex.mongodb.net/?retryWrites=true&w=majority",
      { dbName: "real-estate" }
    );
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
  }
};
// mongoose
// .connect(process.env.MONGO)
// .then(()=>{
//     console.log('connected to MOngoDb!');
// })
// .catch((err) => {
//     console.log(err);
// })

const app = express();

app.listen(3000, () => {
  connectToMongo();
  console.log("server is running on 3000!!! ");
});

//creating a api route
app.use("/api/user",UserRouter);
