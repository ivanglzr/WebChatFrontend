export interface ICreateMessage {
  content: string;
}

export interface IMessage extends ICreateMessage {
  id: string;
  chatId: string;
  createdAt: string;
  ownerId: string;
  sent: boolean;
}
