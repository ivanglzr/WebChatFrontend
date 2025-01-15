import { parse } from "cookie";

export default function getAuthCookie() {
  const cookie = parse(document.cookie).access_token;

  return cookie;
}
