require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const newslistRoutes = require("./routes/newslistRoutes");
const connectToMongoDB = require("./DBconnection");

const app = express();

// Connect to MongoDB
connectToMongoDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/news", newslistRoutes);

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
