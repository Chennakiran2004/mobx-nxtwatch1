import { makeAutoObservable, runInAction } from "mobx";
import { HomeVideoDetails } from "../../types/HomeVidos";
import HomeVideosApi from "../../services/HomeVideoServices/index.api";
import { HomeVideoModel } from "../Models/HomeVideoModel";
import { APIStatus } from "../../constants/APIStatus";

class HomeStore {
  videosList: HomeVideoModel[] = [];
  apiStatus: APIStatus = APIStatus.initial;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchVideos = async (searchInput: string): Promise<void> => {
    runInAction(() => {
      this.apiStatus = APIStatus.inProgress;
      this.error = null;
    });

    try {
      const apiInstance = new HomeVideosApi();
      const result: HomeVideoDetails[] = await apiInstance.fetchHomeVideosAPI(
        searchInput
      );

      runInAction(() => {
        this.videosList = result.map((video) => new HomeVideoModel(video));
        this.apiStatus = APIStatus.success;
      });
    } catch (error: any) {
      runInAction(() => {
        this.apiStatus = APIStatus.failure;
        this.error = error.message || "Something went wrong";
      });
    }
  };
}

export default HomeStore;
