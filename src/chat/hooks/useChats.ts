import { useEffect, useState } from "react";

import { getChats } from "../services/service";

import type { IChat } from "../types/chat";

export default function useChats(): {
  chats: IChat[] | null;
  error: Error | null;
  loading: boolean;
} {
  const [chats, setChats] = useState<IChat[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const loading = chats === null && error === null;

  useEffect(() => {
    getChats().then((res) => {
      if (res instanceof Error) {
        setError(res);
      } else {
        setChats(res.data);
      }
    });
  }, []);

  return { chats, error, loading };
}
