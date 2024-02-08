const mongoose = require('mongoose');

module.exports = async () => {
    const mongoUri = "mongodb+srv://binaya222003april:Dq4Jyu8W12kyQxEB@cluster0.igodrx2.mongodb.net/?retryWrites=true&w=majority";
  try {
   const connect=await mongoose.connect(mongoUri,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
   });

    console.log(`MongoDb connected: ${connect.connection.host}`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
