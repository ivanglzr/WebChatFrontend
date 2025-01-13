const BACKEND_URL: string = import.meta.env.VITE_BACKEND_URL;

export const CHAT_ROUTES = {
  GET_CHATS: BACKEND_URL + "/user/chat",
  GET_CHAT: (chatId: string) => `/user/chat/${chatId}`,
  POST_CHAT: BACKEND_URL + "/user/chat",
  PUT_CHAT: (chatId: string) => `/user/chat/${chatId}`,
  DELETE_CHAT: (chatId: string) => `/user/chat/${chatId}`,
};
