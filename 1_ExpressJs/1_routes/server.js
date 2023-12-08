const express = require("express");
const app = express();

const fruits = ["apple", "tomato", "pear"];

app.get("/fruits/:id", (req, res, next) => {
  console.log(`request to /fruits/${req.params.id}`);
  res.send(fruits[req.params.id]);
});

app.get("/fruits", (req, res, next) => {
  console.log("request to /fruits, looking good!");
  res.send(fruits);
});

app.get("/fruits", (req, res, next) => {
  console.log("request to /fruits, feeling good!");
  res.send(fruits);
});

app.listen(8000, () => console.log("server on run"));
