import React from "react";
import { getCookie } from "../constants/utils/storageUtilities";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
  const jwtToken = getCookie();

  if (jwtToken === undefined) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
