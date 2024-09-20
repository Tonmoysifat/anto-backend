const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/api");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// MongoDB connection
const URL = process.env.DATABASE_URL;
const OPTION = { user: "", pass: "", autoIndex: true };

mongoose
  .connect(URL, OPTION)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.error("Database connection error:", err));

// Routes
app.use("/api", router); // Routes from your routes/api.js file

// Port configuration for Vercel
const port = process.env.PORT || 5414; 
app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
