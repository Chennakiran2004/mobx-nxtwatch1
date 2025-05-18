import { makeAutoObservable } from "mobx";
import { SavedVideoModel } from "../Models/SavedVideosModel";
import { VideoDetails } from "../../types/VideoDetails";

class SavedVideosStore {
  savedVideosList: SavedVideoModel[] = [];
  likedVideoIds: Set<string> = new Set();
  dislikedVideoIds: Set<string> = new Set();

  constructor() {
    makeAutoObservable(this);
  }

  isSaved = (id: string): boolean => {
    return this.savedVideosList.some((video) => video.id === id);
  };

  addVideo = (video: VideoDetails) => {
    if (!this.isSaved(video.id)) {
      const model = new SavedVideoModel(video);
      this.savedVideosList.push(model);
    }
  };

  removeVideo = (videoId: string) => {
    this.savedVideosList = this.savedVideosList.filter(
      (video) => video.id !== videoId
    );
  };

  toggleSave = (video: VideoDetails) => {
    if (this.isSaved(video.id)) {
      this.removeVideo(video.id);
    } else {
      this.addVideo(video);
    }
  };

  isLiked = (id: string): boolean => this.likedVideoIds.has(id);
  isDisliked = (id: string): boolean => this.dislikedVideoIds.has(id);

  toggleLike = (id: string) => {
    if (this.isLiked(id)) {
      this.likedVideoIds.delete(id);
    } else {
      this.likedVideoIds.add(id);
      this.dislikedVideoIds.delete(id);
    }
  };

  toggleDislike = (id: string) => {
    if (this.isDisliked(id)) {
      this.dislikedVideoIds.delete(id);
    } else {
      this.dislikedVideoIds.add(id);
      this.likedVideoIds.delete(id);
    }
  };
}

export default SavedVideosStore;
