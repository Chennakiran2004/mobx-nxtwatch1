import { Route, Outlet } from "react-router-dom";
import Layout from "../../../Common/components/Layout";
import ProtectedRoute from "../../../Common/hocs/ProtectedRoute";
import HomePage from "../HomePage";
import TrendingPage from "../TrendingPage";
import GamingPage from "../GamingPage";
import VideoDetailsPage from "../VideoDetilsPage";
import SavedVideosPage from "../SavedVideospage";

const NxtWatchRoutes = (
  <>
    <Route element={<ProtectedRoute />}>
      <Route
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        <Route path="/" element={<HomePage />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/gaming" element={<GamingPage />} />
        <Route path="/videos/:id" element={<VideoDetailsPage />} />
        <Route path="/saved-videos" element={<SavedVideosPage />} />
      </Route>
    </Route>
  </>
);

export default NxtWatchRoutes;
