import { decrypt } from "dotenv";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected SuccessFully 🥳🥳");
    });
    await mongoose.connect(`${process.env.MONGDB_URI}/ecommerce`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
