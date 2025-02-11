import { useContext } from "react";

import { ChatsContext } from "../context/chats-context";

import useUserId from "../../auth/hooks/useUserId";

import { EChatsReducerActions } from "../types/chats-reducer";

import type { IChatWithMembers } from "../types/chat";
import type { IMessage } from "../../message/types/message";

export default function useChats() {
  const { userId } = useUserId();

  const { chats, error, loading, dispatch } = useContext(ChatsContext);

  const addChat = (chat: IChatWithMembers) =>
    dispatch({ type: EChatsReducerActions.ADD_CHAT, payload: chat });

  const editChat = (payload: IChatWithMembers) =>
    dispatch({ type: EChatsReducerActions.EDIT_CHAT, payload });

  const deleteChat = (chatId: string) =>
    dispatch({ type: EChatsReducerActions.DELETE_CHAT, payload: chatId });

  const addMessage = (payload: IMessage) =>
    dispatch({
      type: EChatsReducerActions.ADD_MESSAGE,
      payload: { ...payload, sent: payload.ownerId === userId },
    });

  const editMessage = (payload: IMessage) =>
    dispatch({ type: EChatsReducerActions.EDIT_MESSAGE, payload });

  const deleteMessage = (payload: IMessage) =>
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
