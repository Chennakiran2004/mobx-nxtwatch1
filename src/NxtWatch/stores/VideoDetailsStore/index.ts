import { makeAutoObservable, flow } from "mobx";
import VideoDetailsApi from "../../services/VideoDetailsServices/index.api";
import { VideoDetails } from "../../types/VideoDetails";
import { VideoDetailsModel } from "../Models/VideoDetailsModel";
import { APIStatus } from "../../constants/APIStatus";

class VideoDetailsStore {
  videoDetails: VideoDetailsModel | null = null;
  apiStatus: APIStatus = APIStatus.initial;
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
    this.apiStatus = APIStatus.inProgress;
    this.error = null;

    try {
      const apiInstance = new VideoDetailsApi();
      const video: VideoDetails = yield apiInstance.fetchVideoDetailsAPI(
        videoId
      );

      // console.log(video, "Video Details");

      this.videoDetails = new VideoDetailsModel(video);
      this.apiStatus = APIStatus.success;
    } catch (error: any) {
      this.apiStatus = APIStatus.failure;
      this.error = error.message || "Failed to fetch video details";
    }
  }
}

export default VideoDetailsStore;
