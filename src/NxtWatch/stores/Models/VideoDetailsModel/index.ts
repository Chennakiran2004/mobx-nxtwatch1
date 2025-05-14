import { VideoDetails } from "../../../types/VideoDetails";
import { ChannelModel } from "../../../../Channel/stores/models/ChannelModel";

export class VideoDetailsModel {
  id: string;
  description: string;
  publishedAt: string;
  thumbnailUrl: string;
  title: string;
  videoUrl: string;
  viewCount: number;
  channel: ChannelModel;

  constructor(data: VideoDetails) {
    const {
      id,
      description,
      publishedAt,
      thumbnailUrl,
      title,
      videoUrl,
      viewCount,
      channel,
    } = data;

    this.id = id;
    this.description = description;
    this.publishedAt = publishedAt;
    this.thumbnailUrl = thumbnailUrl;
    this.title = title;
    this.videoUrl = videoUrl;
    this.viewCount = viewCount;
    this.channel = new ChannelModel(channel);
  }
}
