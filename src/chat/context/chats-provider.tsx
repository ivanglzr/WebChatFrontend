import { useEffect, useReducer, useState } from "react";
import { getChats } from "../services/service";

import { ChatsContext } from "./chats-context";
import { ChatsReducer } from "../reducers/chats";

import { EChatsReducerActions } from "../types/chats-reducer";

interface Props {
  children: React.ReactNode;
}

export function ChatsContextProvider({ children }: Props) {
  const [chats, dispatch] = useReducer(ChatsReducer, []);
  const [error, setError] = useState<Error | null>(null);
  const loading = chats === null && error === null;

  useEffect(() => {
    getChats().then((res) => {
      if (res instanceof Error) {
        setError(res);

        return;
      }

      dispatch({ type: EChatsReducerActions.SET_CHATS, payload: res.data });
    });
  }, []);

  return (
    <ChatsContext.Provider value={{ chats, error, loading, dispatch }}>
      {children}
    </ChatsContext.Provider>
  );
}
