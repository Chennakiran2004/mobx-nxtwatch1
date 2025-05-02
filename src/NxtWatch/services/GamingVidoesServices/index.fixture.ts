import { GamingVideosService } from ".";
import { GamingVideoDetails } from "../../types/GamingVideos";
import mockGamingVideos from "../../fixtures/mockGamingVideos";

class GamingVideosFixture implements GamingVideosService {
  fetchGamingVideosAPI(): Promise<GamingVideoDetails[]> {
    return Promise.resolve(mockGamingVideos);
  }
}

export default GamingVideosFixture;
