require("dotenv").config();

const express = require("express");

const app = express();

const port = process.env.PORT;
app.get("/", (req, res) => {
  res.send("Hello Homepage");
});

app.get("/twitter", (req, res) => {
  res.send("Twitter Page");
});

app.get("/login", (req, res) => {
  res.send("<h1>Hello Login Page</h1>");
});

app.listen(port, () => {
  console.log(`I am running ${port}`);
});
