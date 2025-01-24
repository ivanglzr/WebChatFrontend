import { createContext } from "react";
import { IChatWithMembers } from "../types/chat";

interface ChatsContext {
  chats: IChatWithMembers[] | null;
  error: Error | null;
  loading: boolean;
}

export const ChatsContext = createContext<ChatsContext>({
  chats: [],
  error: null,
  loading: true,
});
