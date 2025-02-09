import getAuthCookie from "../../common/utils/getAuthCookie";

export default function useToken() {
  const token = getAuthCookie();

  return token;
}
