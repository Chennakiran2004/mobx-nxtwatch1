import { makeAutoObservable, flow } from "mobx";
import { HomeVideoDetails } from "../../types/HomeVidos";
import HomeVideosApi from "../../services/HomeVideoServices/index.api";
import { HomeVideoModel } from "../Models/HomeVideoModel";

class HomeStore {
  videosList: HomeVideoModel[] = [];
  status: "idle" | "loading" | "succeeded" | "failed" = "idle";
  error: string | null = null;

  constructor() {
    makeAutoObservable(this, {
      fetchVideos: flow,
    });
  }

  *fetchVideos(searchInput: string) {
    this.status = "loading";
    this.error = null;

    try {
      const apiInstance = new HomeVideosApi();
      const result: HomeVideoDetails[] = yield apiInstance.fetchHomeVideosAPI(
        searchInput
      );
      console.log("Fetched Home API data:", result);

      this.videosList = result.map(
        (video: HomeVideoDetails) => new HomeVideoModel(video)
      );

      this.status = "succeeded";
    } catch (error: any) {
      this.status = "failed";
      this.error = error.message || "Something went wrong";
    }
  }
}

const homeStore = new HomeStore();
export default homeStore;
