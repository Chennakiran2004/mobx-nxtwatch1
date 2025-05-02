import { VideoDetailsService } from ".";
import { VideoDetails } from "../../types/VideoDetails";
import mockVideoDetails from "../../fixtures/mockVideoDetails";

class VideoDetailsFixture implements VideoDetailsService {
  fetchVideoDetailsAPI(_: string): Promise<VideoDetails> {
    return Promise.resolve(mockVideoDetails);
  }
}

export default VideoDetailsFixture;
