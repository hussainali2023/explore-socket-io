const express = require("express");

const app = express();

const http = require("http");

const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Start with socket io");
});

app.listen(5000, function () {
  console.log("Hellow server is running at 5000");
});
