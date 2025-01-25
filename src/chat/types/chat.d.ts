import type { UUID } from "crypto";
import type { IUser } from "../../user/types/user";
import type { IMessage } from "../../message/types/message";

export interface ICreateChat {
  chatName: string;
  memberIds: UUID[];
}

export interface IChat extends ICreateChat {
  id: UUID;
  ownerId: UUID;
  owner: IUser;
  messages: IMessage[];
}

export interface IChatWithMembers extends IChat {
  members: IUser[];
}
