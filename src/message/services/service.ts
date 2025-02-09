import type { ICreateMessage } from "../types/message";

import { MESSAGES_ROUTES } from "./routes";

export async function postMessage(chatId: string, message: ICreateMessage) {
  try {
    const petition = await fetch(MESSAGES_ROUTES.POST_MESSAGE(chatId), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
      credentials: "include",
    });
    const res = await petition.json();

    return res;
  } catch (error) {
    return error as Error;
  }
}
