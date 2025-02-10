import { useEffect, useRef } from "react";

import MessageInput from "../../message/components/MessageInput";
import Message from "../../message/components/Message";

import type { IChatWithMembers } from "../types/chat";

interface Props {
  chat: IChatWithMembers | null;
}

export default function Chat({ chat }: Props) {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mainRef.current) return;

    mainRef.current.scrollTo({
      top: mainRef.current.scrollHeight,
      behavior: "smooth",
    });
  });

  if (!chat) return <div>Select a chat</div>;

  return (
    <main
      ref={mainRef}
      className="h-full overflow-y-auto px-2 flex flex-col justify-between"
    >
      <ul className="flex flex-col">
        {chat.messages.map((message) => (
          <Message message={message} key={message.id} />
        ))}
      </ul>
      <MessageInput chatId={chat.id} />
    </main>
  );
}
