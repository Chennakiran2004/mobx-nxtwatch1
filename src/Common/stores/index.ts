import GamingStore from "../../NxtWatch/stores/GamingStore";
import HomeStore from "../../NxtWatch/stores/HomeStore";
import TrendingStore from "../../NxtWatch/stores/TrendingStore";
import VideoDetailsStore from "../../NxtWatch/stores/VideoDetailsStore";
import AuthStore from "../../Profile/stores/authStore";

export class RootStore {
  authStore: AuthStore;
  homeStore: HomeStore;
  gamingStore: GamingStore;
  trendingStore: TrendingStore;
  videoDetailsStore: VideoDetailsStore;

  constructor() {
    this.homeStore = new HomeStore();
    this.gamingStore = new GamingStore();
    this.trendingStore = new TrendingStore();
    this.videoDetailsStore = new VideoDetailsStore();
    this.authStore = new AuthStore();
  }
}

const rootStore = new RootStore();
export default rootStore;
