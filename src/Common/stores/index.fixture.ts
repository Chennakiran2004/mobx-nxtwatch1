import GamingVideosFixture from "../../NxtWatch/services/GamingVidoesServices/index.fixture";
import HomeVideosFixture from "../../NxtWatch/services/HomeVideoServices/index.fixture";
import VideoDetailsFixture from "../../NxtWatch/services/VideoDetailsServices/index.fixture";
import TrendingVideosFixture from "../../NxtWatch/services/TrendingVideosServices/index.fixtures";
import AuthServiceFixture from "../../Profile/services/Authentication/index.fixture";

export const gamingVideosFixture = new GamingVideosFixture();
export const homeVideosFixture = new HomeVideosFixture();
export const videoDetailsFixture = new VideoDetailsFixture();
export const trendingVideosFixture = new TrendingVideosFixture();
export const authServiceFixture = new AuthServiceFixture();

export class RootFixture {
  gamingVideosFixture = gamingVideosFixture;
  homeVideosFixture = homeVideosFixture;
  videoDetailsFixture = videoDetailsFixture;
  trendingVideosFixture = trendingVideosFixture;
  authServiceFixture = AuthServiceFixture;

  getAllFixtures() {
    return {
      gaming: this.gamingVideosFixture,
      home: this.homeVideosFixture,
      videoDetails: this.videoDetailsFixture,
      trending: this.trendingVideosFixture,
      authServiceFixture: this.authServiceFixture,
    };
  }
}

export const rootFixture = new RootFixture();
export default rootFixture;
