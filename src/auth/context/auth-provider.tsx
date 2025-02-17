import { ReactNode, useState } from "react";
import { AuthContext } from "./auth-context";

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }: Props) {
  const [userId, setId] = useState<string>(
    localStorage.getItem("userId") ?? ""
  );

  const setUserId = (id: string) => {
    setId(id);

    localStorage.setItem("userId", id);
  };

  return (
    <AuthContext.Provider value={{ userId, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
}
