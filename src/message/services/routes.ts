const BACKEND_URL: string = import.meta.env.VITE_BACKEND_URL;

export const MESSAGES_ROUTES = {
  GET_MESSAGE: (chatId: string, messageId: string) =>
    `${BACKEND_URL}/user/chat/${chatId}/message/${messageId}`,
  GET_MESSAGES: (chatId: string) =>
    `${BACKEND_URL}/user/chat/${chatId}/message`,
  POST_MESSAGE: (chatId: string) =>
    `${BACKEND_URL}/user/chat/${chatId}/message`,
  PUT_MESSAGE: (chatId: string, messageId: string) =>
    `${BACKEND_URL}/user/chat/${chatId}/message/${messageId}`,
  DELETE_MESSAGE: (chatId: string, messageId: string) =>
    `${BACKEND_URL}/user/chat/${chatId}/message/${messageId}`,
};
