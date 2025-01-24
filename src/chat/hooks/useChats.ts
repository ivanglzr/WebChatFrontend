import { useContext } from "react";

import { ChatsContext } from "../context/chats-context";

import type { IChatWithMembers } from "../types/chat";

export default function useChats(): {
  chats: IChatWithMembers[] | null;
  error: Error | null;
  loading: boolean;
} {
  const context = useContext(ChatsContext);

  if (!context)
    throw new Error(
      "To use chats context the component must be inside a provider"
    );

  return context;
}
