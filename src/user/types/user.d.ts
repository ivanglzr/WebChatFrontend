import type { ILogin } from "../../auth/types/auth";

export interface IUser extends Pick<ILogin, "email"> {
  fullname: string;
}
