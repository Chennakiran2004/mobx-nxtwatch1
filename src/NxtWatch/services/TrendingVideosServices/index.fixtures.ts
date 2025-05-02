import { TrendingVideosService } from ".";
import { TrendingVideoDetails } from "../../types/TrendingVideos";
import mockTrendingVideos from "../../fixtures/mockTrendingVideos";

class TrendingVideosFixture implements TrendingVideosService {
  fetchTrendingVideosAPI(): Promise<TrendingVideoDetails[]> {
    return Promise.resolve(mockTrendingVideos);
  }
}

export default TrendingVideosFixture;
