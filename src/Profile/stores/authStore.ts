import { makeAutoObservable, flow } from "mobx";
import { IAuthService } from "../services/Authentication/index";
import AuthService from "../services/Authentication/index.api";

class AuthStore {
  username = "";
  password = "";
  showPassword = false;
  errorMsg = "";
  isLoading = false;

  constructor() {
    makeAutoObservable(this, {
      login: flow,
    });
  }

  setUsername(value: string) {
    this.username = value;
  }

  setPassword(value: string) {
    this.password = value;
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  *login(
    navigate: (path: string) => void
  ): Generator<Promise<string>, void, unknown> {
    this.isLoading = true;
    this.errorMsg = "";
    try {
      const authService: IAuthService = new AuthService();
      const token = yield authService.loginUser(this.username, this.password);
      if (token) {
        navigate("/");
      }
    } catch (error: any) {
      this.errorMsg = error.message || "An unexpected error occurred";
    } finally {
      this.isLoading = false;
    }
  }
}

export const authStore = new AuthStore();
