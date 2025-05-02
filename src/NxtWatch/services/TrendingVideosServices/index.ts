import { TrendingVideoDetails } from "../../types/TrendingVideos";

export interface TrendingVideosService {
  fetchTrendingVideosAPI(): Promise<TrendingVideoDetails[]>;
}
