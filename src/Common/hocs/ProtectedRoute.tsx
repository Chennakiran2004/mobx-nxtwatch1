import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "../constants/utils/storageUtilities";

const ProtectedRoute = () => {
  const jwtToken = getCookie();
  if (!jwtToken) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
