// app/page.tsx
"use client";

import React from "react";
import socket from "../lib/socket";

function shootingTank(arrow: string) {
  socket.emit("move", {
    orient: arrow,
  });
}

function getRandomNumber() {
  return Math.floor(Math.random() * 4); // 0, 1, 2, hoặc 3
}

const arrows = ["UP", "DOWN", "LEFT", "RIGHT"];

const Home: React.FC = () => {
  // setInterval(() => {
  //   socket.emit("shoot", {});
  //   shootingTank(arrows[getRandomNumber()]);
  // }, 1300);

  const joinRoom = () => {
    socket.emit("join", {});
  };

  return (
    <div>
      <h1>room zinza tank</h1>
      <button onClick={joinRoom}>join room</button>
    </div>
  );
};

export default Home;
