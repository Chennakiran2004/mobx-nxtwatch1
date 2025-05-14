import { makeAutoObservable } from "mobx";
import GamingVideosApi from "../../services/GamingVidoesServices/index.api";
import { GamingVideoDetails } from "../../types/GamingVideos";
import { GamingVideoModel } from "../Models/GamingVideoModel";
import { APIStatus } from "../../constants/APIStatus";

class GamingStore {
  videosList: GamingVideoModel[] = [];
  apiStatus: APIStatus = APIStatus.initial;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchVideos = async (): Promise<void> => {
    this.apiStatus = APIStatus.inProgress;
    this.error = null;

    try {
      const apiInstance = new GamingVideosApi();
      const result: GamingVideoDetails[] =
        await apiInstance.fetchGamingVideosAPI();

      this.videosList = result.map(
        (video: GamingVideoDetails) => new GamingVideoModel(video)
      );
      this.apiStatus = APIStatus.success;
    } catch (err: any) {
      this.apiStatus = APIStatus.failure;
      this.error = err.message || "Failed to fetch data";
    }
  };
}

export default GamingStore;
