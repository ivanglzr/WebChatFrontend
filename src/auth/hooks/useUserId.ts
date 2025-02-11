import { useContext } from "react";

import { AuthContext } from "../context/auth-context";

export default function useUserId() {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error("To use the auth context you must be inside the provider");

  return context;
}
