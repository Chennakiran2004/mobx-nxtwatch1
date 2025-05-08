import { Routes, Route, Navigate } from "react-router-dom";
import { LoginRoutes } from "../../../Profile/routes/LoginRoute";
import NxtWatchRoutes from "../../../NxtWatch/routes/NxtWatchRoutes";

const AppRoutes = () => (
  <Routes>
    {LoginRoutes}
    {NxtWatchRoutes}
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default AppRoutes;
