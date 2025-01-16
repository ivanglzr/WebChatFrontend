import { createContext } from "react";

interface AuthContext {
  token: string | null;
}

export const AuthContext = createContext<AuthContext>({
  token: null,
});
