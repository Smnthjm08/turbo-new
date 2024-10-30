const express = require("express");
import { Server } from "socket.io";
import { createServer } from "http";

const server = createServer();

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["POST", "GET"],
  },
});

io.on("connection", (socket) => {
  // console.log("socket connected");
  io.emit("message", "Hello User", socket.id)
  // io.on()
});

const port = server.listen(4000, () => {
  console.log("Server started on PORT 4000");
});
