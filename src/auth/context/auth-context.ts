import { createContext } from "react";

interface IAuthContext {
  userId: string;
  setUserId: (id: string) => void;
}

export const AuthContext = createContext<IAuthContext>({
  userId: "",
  setUserId: () => {},
});
