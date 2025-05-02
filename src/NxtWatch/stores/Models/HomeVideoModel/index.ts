import { HomeVideoDetails } from "../../../types/HomeVidos";

export class HomeVideoModel {
  id: string;
  title: string;
  thumbnailUrl: string;
  viewCount: number;
  publishedAt: string;
  channel: {
    name: string;
    profileImageUrl: string;
  };

  constructor(data: HomeVideoDetails) {
    const { id, title, thumbnailUrl, viewCount, publishedAt, channel } = data;
    this.id = id;
    this.title = title;
    this.thumbnailUrl = thumbnailUrl;
    this.viewCount = viewCount;
    this.publishedAt = publishedAt;
    this.channel = channel;
  }
}
