// import React from "react";
// import { observer } from "mobx-react-lite";
// import { useNavigate, Navigate } from "react-router-dom";
// import { getCookie } from "../../../Common/constants/utils/storageUtilities";
// import { WEBSITE_LOGOS } from "../../../Common/constants/Images/WebsiteLogos";
// import useAuthStore from "../../hooks/useAuthStore";

// import {
//   LoginContainer,
//   LoginCardContainer,
//   WebsiteLogo,
//   Label,
//   Form,
//   LoginButton,
//   ShowPasswordLabel,
//   LoginInput,
//   ErrorMsg,
// } from "./styledComponents";

// const Login: React.FC = observer(() => {
//   const navigate = useNavigate();
//   const logoURL = WEBSITE_LOGOS.light;
//   const { authStore } = useAuthStore();
//   const { setUsername, setPassword, toggleShowPassword } = authStore;

//   const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(event.target.value);
//   };

//   const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     toggleShowPassword();
//   };

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     authStore.login(navigate);
//   };

//   const jwtToken = getCookie();

//   if (jwtToken !== undefined) {
//     return <Navigate to="/" />;
//   }

//   return (
//     <LoginContainer data-testid="Login container">
//       <LoginCardContainer>
//         <WebsiteLogo src={logoURL} alt="website logo" />
//         <Form onSubmit={handleSubmit}>
//           <Label htmlFor="username">USERNAME</Label>
//           <LoginInput
//             type="text"
//             id="username"
//             placeholder="Username"
//             onChange={handleUsernameChange}
//             value={authStore.username}
//             data-testid="username"
//           />
//           <Label htmlFor="password">PASSWORD</Label>
//           <LoginInput
//             id="password"
//             data-testid="password"
//             placeholder="Password"
//             onChange={handlePasswordChange}
//             value={authStore.password}
//             type={authStore.showPassword ? "text" : "password"}
//           />
//           <input
//             type="checkbox"
//             id="showPassword"
//             data-testid="showPassword"
//             onChange={handleCheckboxChange}
//             checked={authStore.showPassword}
//             className="showPassword"
//           />
//           <ShowPasswordLabel htmlFor="showPassword">
//             Show Password
//           </ShowPasswordLabel>
//           <div>
//             <LoginButton
//               data-testid="login-button"
//               type="submit"
//               disabled={authStore.isLoading}
//             >
//               {authStore.isLoading ? "Logging in..." : "Login"}
//             </LoginButton>
//           </div>
//           <ErrorMsg data-testid="errorMsg">
//             {authStore.errorMsg && `* ${authStore.errorMsg}`}
//           </ErrorMsg>
//         </Form>
//       </LoginCardContainer>
//     </LoginContainer>
//   );
// });

// export default Login;

// src/Kossip/components/Login/index.tsx

import React from "react";
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
import { WEBSITE_LOGOS } from "../../../Common/constants/Images/WebsiteLogos";

type LoginProps = {
  username: string;
  password: string;
  showPassword: boolean;
  isLoading: boolean;
  errorMsg: string;
  onUsernameChange: (val: string) => void;
  onPasswordChange: (val: string) => void;
  onShowPasswordToggle: () => void;
  onSubmit: (e: React.FormEvent) => void;
};

const Login: React.FC<LoginProps> = ({
  username,
  password,
  showPassword,
  isLoading,
  errorMsg,
  onUsernameChange,
  onPasswordChange,
  onShowPasswordToggle,
  onSubmit,
}) => {
  const logoURL = WEBSITE_LOGOS.light;

  return (
    <LoginContainer data-testid="Login container">
      <LoginCardContainer>
        <WebsiteLogo src={logoURL} alt="website logo" />
        <Form onSubmit={onSubmit}>
          <Label htmlFor="username">USERNAME</Label>
          <LoginInput
            type="text"
            id="username"
            placeholder="Username"
            onChange={(e) => onUsernameChange(e.target.value)}
            value={username}
            data-testid="username"
          />
          <Label htmlFor="password">PASSWORD</Label>
          <LoginInput
            id="password"
            data-testid="password"
            placeholder="Password"
            onChange={(e) => onPasswordChange(e.target.value)}
            value={password}
            type={showPassword ? "text" : "password"}
          />
          <input
            type="checkbox"
            id="showPassword"
            data-testid="showPassword"
            onChange={onShowPasswordToggle}
            checked={showPassword}
            className="showPassword"
          />
          <ShowPasswordLabel htmlFor="showPassword">
            Show Password
          </ShowPasswordLabel>
          <div>
            <LoginButton
              data-testid="login-button"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </LoginButton>
          </div>
          <ErrorMsg data-testid="errorMsg">
            {errorMsg && `* ${errorMsg}`}
          </ErrorMsg>
        </Form>
      </LoginCardContainer>
    </LoginContainer>
  );
};

export default Login;
