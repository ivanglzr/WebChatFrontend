import { useEffect, useRef } from "react";
import MessageInput from "../../message/components/MessageInput";
import type { IChatWithMembers } from "../types/chat";

interface Props {
  chat: IChatWithMembers | null;
}

export default function Chat({ chat }: Props) {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = mainRef.current.scrollHeight;
    }
  }, [chat?.messages]); // Se ejecuta cuando cambia el chat

  if (!chat) return <div>Select a chat</div>;

  return (
    <main
      ref={mainRef}
      className="h-full overflow-y-auto px-2 flex flex-col justify-between"
    >
      <ul className="flex flex-col">
        {chat.messages.map((message) => (
          <li
            key={message.id}
            className={`${message.sent ? "text-right" : "text-left"} my-4`}
          >
            <span
              className={`rounded-xl p-2 ${
                message.sent
                  ? "outline outline-2 outline-primary"
                  : "bg-primary text-white"
              }`}
            >
              {message.content}
            </span>
          </li>
        ))}
      </ul>
      <MessageInput chatId={chat.id} />
    </main>
  );
}
