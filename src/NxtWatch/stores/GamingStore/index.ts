import { makeAutoObservable, flow } from "mobx";
import GamingVideosApi from "../../services/GamingVidoesServices/index.api";
import { GamingVideoDetails } from "../../types/GamingVideos";
import { GamingVideoModel } from "../Models/GamingVideoModel";

class GamingStore {
  videosList: GamingVideoModel[] = [];
  status: "idle" | "loading" | "succeeded" | "failed" = "idle";
  error: string | null = null;

  constructor() {
    makeAutoObservable(this, {
      fetchVideos: flow,
    });
  }

  *fetchVideos() {
    this.status = "loading";
    this.error = null;

    try {
      const apiInstance = new GamingVideosApi();
      const result: GamingVideoDetails[] =
        yield apiInstance.fetchGamingVideosAPI();

      this.videosList = result.map(
        (video: GamingVideoDetails) =>
          new GamingVideoModel(
            video
          )
      );

      this.status = "succeeded";
    } catch (err: any) {
      this.status = "failed";
      this.error = err.message || "Something went wrong";
    }
  }
}

const gamingStore = new GamingStore();
export default gamingStore;
