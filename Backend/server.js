const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/loginSignUp")
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.log(err));

// routes
app.use("/api/auth", authRoutes);

app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
