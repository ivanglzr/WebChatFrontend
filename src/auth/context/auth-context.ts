import { createContext, Dispatch, SetStateAction } from "react";

interface IAuthContext {
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
}

export const AuthContext = createContext<IAuthContext>({
  userId: "",
  setUserId: () => {},
});
