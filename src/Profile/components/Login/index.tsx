import React from "react";
import { observer } from "mobx-react-lite";
import { useNavigate, Navigate } from "react-router-dom";
import { getCookie } from "../../../Common/constants/utils/storageUtilities";
import { authStore } from "../../stores/authStore";
import { WEBSITE_LOGOS } from "../../../Common/constants/Images/WebsiteLogos";

import {
  LoginContainer,
  LoginCardContainer,
  WebsiteLogo,
  Label,
  Form,
  LoginButton,
  ShowPasswordLabel,
  LoginInput,
  ErrorMsg,
} from "./styledComponents";

const Login: React.FC = observer(() => {
  const navigate = useNavigate();
  const logoURL = WEBSITE_LOGOS.light;

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    authStore.setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    authStore.setPassword(event.target.value);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    authStore.toggleShowPassword();
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    authStore.login(navigate);
  };

  const jwtToken = getCookie();

  if (jwtToken !== undefined) {
    return <Navigate to="/" />;
  }

  return (
    <LoginContainer data-testid="Login container">
      <LoginCardContainer>
        <WebsiteLogo src={logoURL} alt="website logo" />
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="username">USERNAME</Label>
          <LoginInput
            type="text"
            id="username"
            placeholder="Username"
            onChange={handleUsernameChange}
            value={authStore.username}
            data-testid="username"
          />
          <Label htmlFor="password">PASSWORD</Label>
          <LoginInput
            id="password"
            data-testid="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={authStore.password}
            type={authStore.showPassword ? "text" : "password"}
          />
          <input
            type="checkbox"
            id="showPassword"
            data-testid="showPassword"
            onChange={handleCheckboxChange}
            checked={authStore.showPassword}
            className="showPassword"
          />
          <ShowPasswordLabel htmlFor="showPassword">
            Show Password
          </ShowPasswordLabel>
          <div>
            <LoginButton
              data-testid="login-button"
              type="submit"
              disabled={authStore.isLoading}
            >
              {authStore.isLoading ? "Logging in..." : "Login"}
            </LoginButton>
          </div>
          <ErrorMsg data-testid="errorMsg">
            {authStore.errorMsg && `* ${authStore.errorMsg}`}
          </ErrorMsg>
        </Form>
      </LoginCardContainer>
    </LoginContainer>
  );
});

export default Login;
