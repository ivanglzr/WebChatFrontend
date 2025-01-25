import { createContext, type Dispatch } from "react";

import type { IChatWithMembers } from "../types/chat";
import type { TChatsReducerPayloads } from "../types/chats-reducer";

interface ChatsContext {
  chats: IChatWithMembers[] | null;
  error: Error | null;
  loading: boolean;
  dispatch: Dispatch<TChatsReducerPayloads>;
}

export const ChatsContext = createContext<ChatsContext>({
  chats: [],
  error: null,
  loading: true,
  dispatch: () => {},
});
