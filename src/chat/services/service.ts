import type { IResponse, IResponseWithData } from "../../common/types/response";
import type { IChatWithMembers, ICreateChat } from "../types/chat";

import { CHAT_ROUTES } from "./routes";

export async function getChats(): Promise<
  IResponseWithData<IChatWithMembers[]> | Error
> {
  try {
    const petition = await fetch(CHAT_ROUTES.GET_CHATS, {
      method: "GET",
      credentials: "include",
    });
    const res: IResponseWithData<IChatWithMembers[]> = await petition.json();

    return res;
  } catch (error) {
    return error as Error;
  }
}

export async function postChat(chat: ICreateChat): Promise<IResponse | Error> {
  try {
    const petition = await fetch(CHAT_ROUTES.POST_CHAT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(chat),
    });
    const res: IResponse = await petition.json();

    return res;
  } catch (error) {
    return error as Error;
  }
}
