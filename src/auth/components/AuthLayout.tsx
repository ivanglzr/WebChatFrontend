import { Outlet, Navigate } from "react-router";

import useToken from "../hooks/useToken";

import { ROUTES } from "../../routes";

export default function AuthLayout() {
  const token = useToken();

  return !token ? <Navigate to={ROUTES.LOG_IN} /> : <Outlet />;
}
