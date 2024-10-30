"use client";
import React, { useMemo } from "react";
import { io } from "socket.io-client";

const SocketTest = () => {
  const socket = useMemo(() => io("http://localhost:4000"), []);

  socket.on("connect", () => {
    console.log("Connected to socket");
  });

  socket.on("message", (data, id) => {
    console.log(data + "  " +id);
  });

  return (
    <main className="p-24">
      {/* <main className="flex min-h-screen flex-col items-center justify-center p-24"> */}
      <h3 className=" text-4xl font-bold mb-2">Inside Room </h3>
    </main>
  );
};

export default SocketTest;
