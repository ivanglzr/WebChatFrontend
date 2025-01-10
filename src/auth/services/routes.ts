const BACKEND_URL = import.meta.env.BACKEND_URL;

export const AUTH_ROUTES = {
  LOG_IN: BACKEND_URL + "/auth/log-in",
  REGISTER: BACKEND_URL + "/auth/register",
};
