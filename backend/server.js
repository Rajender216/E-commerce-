import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//App config
const app = express();
const PORT = process.env.PORT || 1024;
connectDB();
connectCloudinary();

//middleware
app.use(express.json());
app.use(cors({ credentials: true }));

//api endPoints
app.use("/api/v1/user", userRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/cart", cartRouter);
app.use("/api/v1/order", orderRouter);

app.get("/", (req, res) => res.send("API IS WORKING"));

app.listen(PORT, () => console.log(`Server is Running on ${PORT} 🎆🎆`));
