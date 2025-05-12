import { Route } from "react-router-dom";
import LoginPage from "../LoginPage";

export const LoginRoutes = (
  <>
    <Route path="/login" element={<LoginPage />} />
  </>
);
export default LoginRoutes;
