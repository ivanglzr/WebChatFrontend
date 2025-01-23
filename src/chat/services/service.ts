import type { IResponseWithData } from "../../common/types/response";
import type { IChatWithMembers } from "../types/chat";

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
