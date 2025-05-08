import { Route } from "react-router-dom";
import Home from "../../components/HomeVideos";
import Trending from "../../components/Trending";
import Gaming from "../../components/Gaming";
import VideoDetails from "../../components/VideoDetails";
import SavedVideos from "../../components/SavedVideos";
import ProtectedRoute from "../../../Common/hocs/ProtectedRoute";

export const NxtWatchRoutes = (
  <>
    <Route element={<ProtectedRoute />}>
      <Route path="/" element={<Home />} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/gaming" element={<Gaming />} />
      <Route path="/videos/:id" element={<VideoDetails />} />
      <Route path="/saved-videos" element={<SavedVideos />} />
    </Route>
  </>
);

export default NxtWatchRoutes;
