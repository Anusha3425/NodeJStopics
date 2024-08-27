import mongoose from "mongoose";

const connectDB = () => {
  const url = "mongodb+srv://anushak:Anusha34@cluster0.cylgc.mongodb.net/";
  try {
    mongoose.connect(url);
    console.log("MongoDB is connected");
  } catch (err) {
    console.error(err.message);
  }
  return;
}

export default connectDB;