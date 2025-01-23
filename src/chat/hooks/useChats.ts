import { useEffect, useState } from "react";

import { getChats } from "../services/service";

import type { IChatWithMembers } from "../types/chat";

export default function useChats(): {
  chats: IChatWithMembers[] | null;
  error: Error | null;
  loading: boolean;
} {
  const [chats, setChats] = useState<IChatWithMembers[] | null>(null);
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
