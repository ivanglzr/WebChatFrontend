import { AuthContext } from "./auth-context";

import getAuthCookie from "../../common/utils/getAuthCookie";

interface Props {
  children: React.ReactNode;
}

export function AuthContextProvider({ children }: Props) {
  const token = getAuthCookie() ?? null;

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
}
