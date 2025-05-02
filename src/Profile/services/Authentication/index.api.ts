import { IAuthService } from "./index";
import fetchApi from "../../../Common/constants/utils/fetchUtilities";
import { setCookie } from "../../../Common/constants/utils/storageUtilities";

class AuthService implements IAuthService {
  async loginUser(username: string, password: string): Promise<string> {
    const apiUrl = "https://apis.ccbp.in/login";
    const response = await fetchApi(apiUrl, {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    if (response.success) {
      const token = response.data.jwt_token;
      setCookie("jwt_token", token, { expires: 30 });
      return token;
    } else {
      throw new Error(response.data.error_msg || "Login failed");
    }
  }
}

export default AuthService;
