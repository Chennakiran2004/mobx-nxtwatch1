import { makeAutoObservable } from "mobx";
import TrendingVideosApi from "../../services/TrendingVideosServices/index.api";
import { TrendingVideoDetails } from "../../types/TrendingVideos";
import { TrendingVideoModel } from "../Models/TrendingVideoModel";
import { APIStatus } from "../../constants/APIStatus";

class TrendingStore {
  videosList: TrendingVideoModel[] = [];
  apiStatus: APIStatus = APIStatus.initial;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchVideos = async (): Promise<void> => {
    this.apiStatus = APIStatus.inProgress;
    this.error = null;

    try {
      const apiInstance = new TrendingVideosApi();
      const result: TrendingVideoDetails[] =
        await apiInstance.fetchTrendingVideosAPI();

      this.videosList = result.map(
        (video: TrendingVideoDetails) => new TrendingVideoModel(video)
      );
      this.apiStatus = APIStatus.success;
    } catch (err: any) {
      this.apiStatus = APIStatus.failure;
      this.error = err.message || "Failed to fetch data";
    }
  };
}

export default TrendingStore;
