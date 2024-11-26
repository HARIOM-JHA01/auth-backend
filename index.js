import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig.js";
dotenv.config();
import authRoutes from "./routes/authRoutes.js";
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/", authRoutes);
app.listen(process.env.PORT, () => {
    connectDB();
    console.log("Server is running on port " + process.env.PORT);
});
