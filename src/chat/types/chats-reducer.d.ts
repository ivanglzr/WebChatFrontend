import type { IMessage } from "../../message/types/message";
import type { IChatWithMembers } from "./chat";

export enum EChatsReducerActions {
  ADD_MESSAGE = "ADD_NEW_MESSAGE",
  EDIT_MESSAGE = "EDIT_MESSAGE",
  DELETE_MESSAGE = "DELETE_MESSAGE",
  ADD_CHAT = "ADD_NEW_CHAT",
  EDIT_CHAT = "EDIT_CHAT",
  DELETE_CHAT = "DELETE_CHAT",
}

export type TChatsReducerPayloads =
  | { type: EChatsReducerActions.ADD_CHAT; payload: IChatWithMembers }
  | {
      type: EChatsReducerActions.EDIT_CHAT;
      payload: { chatId: string; chat: IChatWithMembers };
    }
  | { type: EChatsReducerActions.DELETE_CHAT; payload: string }
  | {
      type: EChatsReducerActions.ADD_MESSAGE;
      payload: { chatId: string; message: IMessage };
    }
  | {
      type: EChatsReducerActions.EDIT_MESSAGE;
      payload: { chatId: string; messageId: string; message: IMessage };
    }
  | {
      type: EChatsReducerActions.DELETE_MESSAGE;
      payload: { chatId: string; messageId: string };
    };
