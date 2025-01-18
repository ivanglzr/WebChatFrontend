import type { UUID } from "crypto";
import type { IUser } from "../../user/types/user";

export interface ICreateChat {
  chatName: string;
  memberIds: UUID[];
}

export interface IChat extends ICreateChat {
  id: UUID;
  ownerId: UUID;
  owner: IUser;
}

export interface IChatWithMembers extends IChat {
  members: IUser[];
}
