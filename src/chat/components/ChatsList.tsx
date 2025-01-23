import { Dispatch, SetStateAction } from "react";
import { IChatWithMembers } from "../types/chat";

interface Props {
  chats: IChatWithMembers[];
  setSelectedChat: Dispatch<SetStateAction<IChatWithMembers | null>>;
}

export default function ChatsList({ chats, setSelectedChat }: Props) {
  return (
    <ul className="inline-block h-full border border-black">
      {chats.map((chat) => (
        <li key={chat.id} onClick={() => setSelectedChat(chat)}>
          <h4>{chat.chatName}</h4>
          <span>
            Created by <strong>{chat.owner.fullname}</strong>
          </span>
        </li>
      ))}
    </ul>
  );
}
