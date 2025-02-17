import { Outlet, Navigate } from "react-router";

import useToken from "../hooks/useToken";

import { ROUTES } from "../../routes";
import useUserId from "../hooks/useUserId";

export default function AuthLayout() {
  const token = useToken();
  const { userId } = useUserId();

  return !token || !userId ? <Navigate to={ROUTES.LOG_IN} /> : <Outlet />;
}
