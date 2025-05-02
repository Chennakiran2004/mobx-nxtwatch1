import { HomeVideosService } from ".";
import { HomeVideoDetails } from "../../types/HomeVidos";
import mockHomeVideos from "../../fixtures/mockHomeVideos";

class HomeVideosFixture implements HomeVideosService {
  fetchHomeVideosAPI(): Promise<HomeVideoDetails[]> {
    return new Promise((resolve) => {
      resolve(mockHomeVideos);
    });
  }
}

export default HomeVideosFixture;
