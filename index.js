const express = require("express");
const http = require("http");
const PORT = 5000 || process.env.PORT;
const app = express();

const httpServer = http.createServer(app);
const { server, Server } = require("socket.io");
const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("new user connected to our app");

  io.on("disconnect", (socket) => {
    console.log("user disconnected");
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/app.html");
});

httpServer.listen(PORT, function () {
  console.log("Hellow server is running at 5000");
});
