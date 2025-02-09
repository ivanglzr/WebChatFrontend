export interface ICreateMessage {
  content: string;
  socketId: string;
}

export interface IMessage extends Pick<ICreateMessage, "content"> {
  id: string;
  chatId: string;
  createdAt: string;
  ownerId: string;
  sent: boolean;
}
