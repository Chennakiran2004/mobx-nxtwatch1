import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getCookie } from "../../../Common/constants/utils/storageUtilities";
import { observer } from "mobx-react-lite";
import useAuthStore from "../../hooks/useAuthStore";
import Login from "../../components/Login";

const LoginPage: React.FC = observer(() => {
  const { authStore } = useAuthStore();
  const navigate = useNavigate();

  const jwtToken = getCookie();
  if (jwtToken !== undefined) {
    return <Navigate to="/" />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    authStore.login(navigate);
  };

  return (
    <Login
      username={authStore.username}
      password={authStore.password}
      showPassword={authStore.showPassword}
      isLoading={authStore.isLoading}
      errorMsg={authStore.errorMsg}
      onUsernameChange={authStore.setUsername}
      onPasswordChange={authStore.setPassword}
      onShowPasswordToggle={authStore.toggleShowPassword}
      onSubmit={handleSubmit}
    />
  );
});

export default LoginPage;
