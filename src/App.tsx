import { useEffect } from "react";

import socket from "./socket";

import useToken from "./auth/hooks/useToken";

export default function App() {
  const token = useToken();

  useEffect(() => {
    socket.auth = { token };

    if (!socket.connected) socket.connect();

    return () => {
      socket.disconnect();
    };
  }, [token]);

  return <h1>Hello world</h1>;
}
