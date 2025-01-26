import { IChatWithMembers } from "../types/chat";
import {
  EChatsReducerActions,
  TChatsReducerPayloads,
} from "../types/chats-reducer";

export function ChatsReducer(
  state: IChatWithMembers[],
  action: TChatsReducerPayloads
) {
  const { type, payload } = action;

  switch (type) {
    case EChatsReducerActions.SET_CHATS: {
      const chats = payload;

      return chats;
    }

    case EChatsReducerActions.ADD_CHAT: {
      const chat = payload;

      return [...state, chat];
    }

    case EChatsReducerActions.EDIT_CHAT: {
      const chat = payload;

      const chatIndex = state.findIndex((c) => c.id === chat.id);

      if (chatIndex === -1) return state;

      const newChats = [...state];
      newChats[chatIndex] = chat;

      return newChats;
    }

    case EChatsReducerActions.DELETE_CHAT: {
      const chatId = payload;

      const chatIndex = state.findIndex((chat) => chat.id === chatId);

      if (chatIndex === -1) return state;

      const newChats = [...state];
      newChats.splice(chatIndex, 1);

      return newChats;
    }

    case EChatsReducerActions.ADD_MESSAGE: {
      const message = payload;

      const chatIndex = state.findIndex((chat) => chat.id === message.chatId);

      if (chatIndex === -1) return state;

      const newChats = [...state];
      newChats[chatIndex].messages.push(message);

      return newChats;
    }

    case EChatsReducerActions.EDIT_MESSAGE: {
      const message = payload;

      const chatIndex = state.findIndex((chat) => chat.id === message.chatId);

      if (chatIndex === -1) return state;

      const messageIndex = state[chatIndex].messages.findIndex(
        (m) => m.id === message.id
      );

      if (messageIndex === -1) return state;

      const newChats = [...state];
      newChats[chatIndex].messages[messageIndex] = message;

      return newChats;
    }

    case EChatsReducerActions.DELETE_MESSAGE: {
      const message = payload;

      const chatIndex = state.findIndex((chat) => chat.id === message.chatId);

      if (chatIndex === -1) return state;

      const messageIndex = state[chatIndex].messages.findIndex(
        (message) => message.id === message.id
      );

      if (messageIndex === -1) return state;

      const newChats = [...state];
      newChats[chatIndex].messages.splice(messageIndex, 1);

      return newChats;
    }

    default:
      return state;
  }
}
