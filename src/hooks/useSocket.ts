// hooks/useSocket.ts
import { useEffect } from "react";
import socket from "../lib/socket";

const useSocket = (eventName: string, callback: (...args: any[]) => void) => {
  useEffect(() => {
    socket.on(eventName, callback);

    return () => {
      socket.off(eventName, callback);
    };
  }, [eventName, callback]);
};

export default useSocket;
