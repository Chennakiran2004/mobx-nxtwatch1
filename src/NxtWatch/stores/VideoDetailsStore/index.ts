import { makeAutoObservable, flow } from "mobx";
import VideoDetailsApi from "../../services/VideoDetailsServices/index.api";
import { VideoDetails } from "../../types/VideoDetails";
import { VideoDetailsModel } from "../Models/VideoDetailsModel";

class VideoDetailsStore {
  videoDetails: VideoDetailsModel | null = null;
  status: "idle" | "loading" | "succeeded" | "failed" = "idle";
  error: string | null = null;
  like = false;
  dislike = false;

  constructor() {
    makeAutoObservable(this, {
      fetchVideoDetails: flow,
    });
  }

  toggleLike() {
    this.like = !this.like;
    if (this.like) this.dislike = false;
  }

  toggleDislike() {
    this.dislike = !this.dislike;
    if (this.dislike) this.like = false;
  }

  *fetchVideoDetails(videoId: string) {
    this.status = "loading";
    this.error = null;

    try {
      const apiInstance = new VideoDetailsApi();
      const video: VideoDetails = yield apiInstance.fetchVideoDetailsAPI(
        videoId
      );

      console.log(video, "Video Details");

      this.videoDetails = new VideoDetailsModel(video);
      this.status = "succeeded";
    } catch (error: any) {
      this.status = "failed";
      this.error = error.message || "Failed to fetch video details";
    }
  }
}

export default VideoDetailsStore;
