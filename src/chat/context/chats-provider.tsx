import { useEffect, useState } from "react";
import { getChats } from "../services/service";

import { ChatsContext } from "./chats-context";
import { IChatWithMembers } from "../types/chat";

interface Props {
  children: React.ReactNode;
}

//TODO: use a reducer for chats state
export function ChatsContextProvider({ children }: Props) {
  const [chats, setChats] = useState<IChatWithMembers[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const loading = chats === null && error === null;

  useEffect(() => {
    getChats().then((res) => {
      if (res instanceof Error) {
        setError(res);

        return;
      }

      setChats(res.data);
    });
  }, []);

  return (
    <ChatsContext.Provider value={{ chats, error, loading }}>
      {children}
    </ChatsContext.Provider>
  );
}
