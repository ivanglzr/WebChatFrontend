import { io } from "socket.io-client";

const url: string = import.meta.env.VITE_BACKEND_URL;

const socket = io(url, { autoConnect: false });

export default socket;
