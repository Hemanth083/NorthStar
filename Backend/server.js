import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Connect to MongoDB
mongoose
  .connect("mongodb+srv://balaprudhvi78_db_user:Hemanthprudhvi%4078@loginsignup.wigxsx6.mongodb.net/")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// ✅ Routes
app.use("/api/auth", authRoutes);

// ✅ Start server
app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
