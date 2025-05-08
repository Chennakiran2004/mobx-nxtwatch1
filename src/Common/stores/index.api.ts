import GamingVideosApi from "../../NxtWatch/services/GamingVidoesServices/index.api";
import HomeVideosApi from "../../NxtWatch/services/HomeVideoServices/index.api";
import TrendingVideosApi from "../../NxtWatch/services/TrendingVideosServices/index.api";
import VideoDetailsApi from "../../NxtWatch/services/VideoDetailsServices/index.api";
import AuthService from "../../Profile/services/Authentication/index.api";

const gamingVideosApi = new GamingVideosApi();
const homeVideosApi = new HomeVideosApi();
const trendingVideosApi = new TrendingVideosApi();
const videoDetailsApi = new VideoDetailsApi();
const authServiceApi = new AuthService();

export class RootApi {
  gamingVideosApi = gamingVideosApi;
  homeVideosApi = homeVideosApi;
  trendingVideosApi = trendingVideosApi;
  videoDetailsApi = videoDetailsApi;
  authServiceApi = authServiceApi;

  fetchAllInitialData = async () => {
    await Promise.all([
      this.gamingVideosApi.fetchGamingVideosAPI(),
      this.homeVideosApi.fetchHomeVideosAPI(""),
      this.trendingVideosApi.fetchTrendingVideosAPI(),
      this.videoDetailsApi.fetchVideoDetailsAPI(""),
      this.authServiceApi.loginUser("admin", "admin"),
    ]);
  };
}

export const rootApi = new RootApi();
export default rootApi;
