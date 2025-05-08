import { Route } from "react-router-dom";
import Login from "../../components/Login";

export const LoginRoutes = (
  <>
    <Route path="/login" element={<Login />} />
  </>
);
export default LoginRoutes;
