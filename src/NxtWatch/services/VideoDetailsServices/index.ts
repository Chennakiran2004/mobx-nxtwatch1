import { VideoDetails } from "../../types/VideoDetails";

export interface VideoDetailsService {
  fetchVideoDetailsAPI(id: string): Promise<VideoDetails>;
}
