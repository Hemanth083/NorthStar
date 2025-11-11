const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Connect to MongoDB
mongoose
  .connect("mongodb+srv://balaprudhvi78_db_user:Hemanthprudhvi%4078@loginsignup.wigxsx6.mongodb.net/")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// routes
app.use("/api/auth", authRoutes);

// ✅ Start server
app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
