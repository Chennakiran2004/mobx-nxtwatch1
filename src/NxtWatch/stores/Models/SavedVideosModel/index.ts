import { VideoDetails } from "../../../types/VideoDetails";
export class SavedVideoModel {
  id: string;
  title: string;
  thumbnailUrl: string;
  viewCount: number;
  publishedAt: string;
  channelName: string;
  channelProfileImageUrl: string;

  constructor(data: VideoDetails) {
    this.id = data.id;
    this.title = data.title;
    this.thumbnailUrl = data.thumbnailUrl;
    this.viewCount = data.viewCount;
    this.publishedAt = data.publishedAt;
    this.channelName = data.channel.name;
    this.channelProfileImageUrl = data.channel.profileImageUrl;
  }
}
