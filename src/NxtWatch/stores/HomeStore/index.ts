import { makeAutoObservable } from "mobx";
import { HomeVideoDetails } from "../../types/HomeVidos";
import HomeVideosApi from "../../services/HomeVideoServices/index.api";
import { HomeVideoModel } from "../Models/HomeVideoModel";

class HomeStore {
  videosList: HomeVideoModel[] = [];
  apiStatus: "initial" | "inProgress" | "success" | "failure" = "initial";
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchVideos = async (searchInput: string): Promise<void> => {
    this.apiStatus = "inProgress";
    this.error = null;

    try {
      const apiInstance = new HomeVideosApi();
      const result: HomeVideoDetails[] = await apiInstance.fetchHomeVideosAPI(
        searchInput
      );
      console.log("Fetched Home API data:", result);

      this.videosList = result.map(
        (video: HomeVideoDetails) => new HomeVideoModel(video)
      );
      this.apiStatus = "success";
    } catch (error: any) {
      this.apiStatus = "failure";
      this.error = error.message || "Something went wrong";
    }
  };
}

export default HomeStore;
