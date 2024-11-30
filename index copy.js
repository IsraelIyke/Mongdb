const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Node API server");
});

app.post("/api/products", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

mongoose
  .connect(
    "mongodb+srv://nwangwuisrael:fBuHI76s05nO95w4@cluster1.1t9jl.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster1"
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
