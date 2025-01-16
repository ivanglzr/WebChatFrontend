import { useContext } from "react";

import { AuthContext } from "../context/auth-context";

export default function useToken() {
  const context = useContext(AuthContext);

  if (!context) throw new Error("Component is not included in authProvider");

  return context.token;
}
