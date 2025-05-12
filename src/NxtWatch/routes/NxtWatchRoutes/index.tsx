import { Route } from "react-router-dom";

import ProtectedRoute from "../../../Common/hocs/ProtectedRoute";
import HomePage from "../HomePage";
import TrendingPage from "../TrendingPage";
import GamingPage from "../GamingPage";
import VideoDetailsPage from "../VideoDetilsPage";
import SavedVideosPage from "../SavedVideospage";

export const NxtWatchRoutes = (
  <>
    <Route element={<ProtectedRoute />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/trending" element={<TrendingPage />} />
      <Route path="/gaming" element={<GamingPage />} />
      <Route path="/videos/:id" element={<VideoDetailsPage />} />
      <Route path="/saved-videos" element={<SavedVideosPage />} />
    </Route>
  </>
);

export default NxtWatchRoutes;
