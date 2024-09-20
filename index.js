const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/api");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json()); 

const URL = process.env.DATABASE_URL;
const OPTION = { user: "", pass: "", autoIndex: true };

mongoose
  .connect(URL, OPTION)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.error("Database connection error:", err));

app.use("/api", router);

const port = process.env.PORT || 5414; 
app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
