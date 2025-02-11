import { ReactNode, useState } from "react";
import { AuthContext } from "./auth-context";

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }: Props) {
  const [userId, setUserId] = useState<string>("");

  return (
    <AuthContext.Provider value={{ userId, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
}
