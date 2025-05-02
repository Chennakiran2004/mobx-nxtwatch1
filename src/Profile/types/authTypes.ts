export interface LoginResponse {
  jwt_token: string;
  error_msg?: string;
}

export interface LoginFormState {
  username: string;
  password: string;
  showPassword: boolean;
  errorMsg: string;
}
