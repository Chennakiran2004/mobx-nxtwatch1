import { TrendingVideoDetails } from "../../../types/TrendingVideos";

export class TrendingVideoModel {
  id: string;
  title: string;
  thumbnailUrl: string;
  viewCount: number;
  publishedAt: string;
  channel: {
    name: string;
    profileImageUrl: string;
  };

  constructor(data: TrendingVideoDetails) {
    const { id, title, thumbnailUrl, viewCount, publishedAt, channel } = data;
    this.id = id;
    this.title = title;
    this.thumbnailUrl = thumbnailUrl;
    this.viewCount = viewCount;
    this.publishedAt = publishedAt;
    this.channel = channel;
  }
}
