// create web server
// using express.js

// import express module
const express = require("express");

// create an express instance
const app = express();

// create a route handler
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});