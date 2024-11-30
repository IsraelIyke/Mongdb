const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API server");
});

mongoose
  .connect(
    `mongodb+srv://nwangwuisrael:${process.env.PASSWORD}@cluster1.1t9jl.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster1`
  )

  .then(() => {
    console.log("connected to database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
