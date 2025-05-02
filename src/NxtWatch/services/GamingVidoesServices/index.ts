import { GamingVideoDetails } from "../../types/GamingVideos";

export interface GamingVideosService {
  fetchGamingVideosAPI(): Promise<GamingVideoDetails[]>;
}
