import { VideoDetails } from "../../../types/VideoDetails";

export class Channel {
  name: string;
  profileImageUrl: string;
  subscriberCount: string;

  constructor(name: string, profileImageUrl: string, subscriberCount: string) {
    this.name = name;
    this.profileImageUrl = profileImageUrl;
    this.subscriberCount = subscriberCount;
  }
}

export class VideoDetailsModel {
  id: string;
  description: string;
  publishedAt: string;
  thumbnailUrl: string;
  title: string;
  videoUrl: string;
  viewCount: number;
  channel: Channel;

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
    this.channel = new Channel(
      channel.name,
      channel.profileImageUrl,
      channel.subscriberCount
    );
  }
}
