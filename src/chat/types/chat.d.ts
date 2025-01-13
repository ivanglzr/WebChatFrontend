import type { UUID } from "crypto";

export interface ICreateChat {
  chatName: string;
  usersIds: UUID[];
}

export interface IChat extends ICreateChat {
  id: UUID;
  ownerId: UUID;
}
