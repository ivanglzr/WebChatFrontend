import type { IResponse } from "../../common/types/response";
import type { ILogin, IRegister } from "../types/auth";

import { AUTH_ROUTES } from "./routes";

export async function logIn(login: ILogin): Promise<IResponse | Error> {
  try {
    const petition = await fetch(AUTH_ROUTES.LOG_IN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
      credentials: "include",
    });
    const res = await petition.json();

    return res;
  } catch (error) {
    return error as Error;
  }
}

export async function register(
  registerData: IRegister
): Promise<IResponse | Error> {
  try {
    const petition = await fetch(AUTH_ROUTES.REGISTER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
      credentials: "include",
    });
    const res = await petition.json();

    return res;
  } catch (error) {
    return error as Error;
  }
}
