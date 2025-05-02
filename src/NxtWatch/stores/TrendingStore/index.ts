import { makeAutoObservable, flow } from "mobx";
import TrendingVideosApi from "../../services/TrendingVideosServices/index.api";
import { TrendingVideoDetails } from "../../types/TrendingVideos";
import { TrendingVideoModel } from "../Models/TrendingVideoModel";

class TrendingStore {
  videosList: TrendingVideoModel[] = [];
  apiStatus: "initial" | "inProgress" | "success" | "failure" = "initial";
  error: string | null = null;

  constructor() {
    makeAutoObservable(this, {
      fetchVideos: flow,
    });
  }

  *fetchVideos() {
    this.apiStatus = "inProgress";
    this.error = null;

    try {
      const apiInstance = new TrendingVideosApi();
      const result: TrendingVideoDetails[] =
        yield apiInstance.fetchTrendingVideosAPI();

      this.videosList = result.map(
        (video: TrendingVideoDetails) => new TrendingVideoModel(video)
      );
      this.apiStatus = "success";
    } catch (err: any) {
      this.apiStatus = "failure";
      this.error = err.message || "Failed to fetch data";
    }
  }
}

const trendingStore = new TrendingStore();
export default trendingStore;
