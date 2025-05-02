import { IAuthService } from "./index";

class AuthServiceFixture implements IAuthService {
  async loginUser(username: string, password: string): Promise<string> {
    if (username === "test_user" && password === "test_pass") {
      return "mock_jwt_token";
    }
    throw new Error("Invalid mock credentials");
  }
}

export default AuthServiceFixture;
