import { LoginFormState } from "../../types/authTypes";

export class AuthModel {
  username: string;
  password: string;
  showPassword: boolean;
  errorMsg: string;

  constructor(data: LoginFormState) {
    const { username, password, showPassword, errorMsg } = data;
    this.username = username;
    this.password = password;
    this.showPassword = showPassword;
    this.errorMsg = errorMsg;
  }
}
