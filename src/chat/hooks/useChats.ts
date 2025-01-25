import { useContext } from "react";

import { ChatsContext } from "../context/chats-context";

import { EChatsReducerActions } from "../types/chats-reducer";

import type { IChatWithMembers } from "../types/chat";
import type { IMessage } from "../../message/types/message";

export default function useChats() {
  const { chats, error, loading, dispatch } = useContext(ChatsContext);

  const addChat = (chat: IChatWithMembers) =>
    dispatch({ type: EChatsReducerActions.ADD_CHAT, payload: chat });

  const editChat = (payload: { chat: IChatWithMembers; chatId: string }) =>
    dispatch({ type: EChatsReducerActions.EDIT_CHAT, payload });

  const deleteChat = (chatId: string) =>
    dispatch({ type: EChatsReducerActions.DELETE_CHAT, payload: chatId });

  const addMessage = (payload: { chatId: string; message: IMessage }) =>
    dispatch({ type: EChatsReducerActions.ADD_MESSAGE, payload });

  const editMessage = (payload: {
    chatId: string;
    messageId: string;
    message: IMessage;
  }) => dispatch({ type: EChatsReducerActions.EDIT_MESSAGE, payload });

  const deleteMessage = (payload: { chatId: string; messageId: string }) =>
    dispatch({ type: EChatsReducerActions.DELETE_MESSAGE, payload });

  return {
    chats,
    error,
    loading,
    addChat,
    editChat,
    deleteChat,
    addMessage,
    editMessage,
    deleteMessage,
  };
}
