import type { IChatWithMembers } from "../types/chat";

interface Props {
  chat: IChatWithMembers | null;
}

export default function Chat({ chat }: Props) {
  if (!chat) return <div>Select a chat</div>;

  return (
    <main className="overflow-y-auto">
      {chat.messages.map((message, index) => (
        <span
          className={`block w-full ${
            message.sent ? "text-right" : "text-left"
          }`}
          key={index}
        >
          {message.content}
        </span>
      ))}
    </main>
  );
}
