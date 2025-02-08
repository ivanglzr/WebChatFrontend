import socket from "./socket";

import { useEffect, useState } from "react";

import useChats from "./chat/hooks/useChats";
import useToken from "./auth/hooks/useToken";

import ChatsList from "./chat/components/ChatsList";
import Chat from "./chat/components/Chat";

import type { IChatWithMembers } from "./chat/types/chat";
import type { IMessage } from "./message/types/message";

export default function App() {
  const { chats, loading, error, addMessage } = useChats();

  const [selectedChat, setSelectChat] = useState<IChatWithMembers | null>(null);

  const token = useToken();

  useEffect(() => {
    socket.auth = { token };

    if (!socket.connected) socket.connect();

    const addNewMessage = (message: IMessage, socketId: string) =>
      addMessage(message, socket.id === socketId);

    socket.on("Message created", addNewMessage);

    return () => {
      socket.off("Message created", addNewMessage);

      socket.disconnect();
    };
  }, [token]);

  if (loading) return <span>Loading...</span>;
  if (error) return <span>{error.message}</span>;
  if (!chats) return <span>There isn&apos;t any chats</span>;

  return (
    <div className="grid grid-cols-[20%_auto] h-full">
      <ChatsList chats={chats} setSelectedChat={setSelectChat} />
      <Chat chat={selectedChat} />
    </div>
  );
}
