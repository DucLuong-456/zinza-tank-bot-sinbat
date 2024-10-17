"use client";
import { io } from "socket.io-client";
const auth = {
  token: "fr56c7q2",
};

const socket = io("https://zarena-dev3.zinza.com.vn/", {
  transports: ["websocket"],
  auth,
});

export default socket;
