import { BaseChannelModel } from "../../../../Channel/stores/models/BaseChannleModel";
import { TrendingVideoDetails } from "../../../types/TrendingVideos";

export class TrendingVideoModel {
  id: string;
  title: string;
  thumbnailUrl: string;
  viewCount: number;
  publishedAt: string;
  channel: BaseChannelModel;

  constructor(data: TrendingVideoDetails) {
    const { id, title, thumbnailUrl, viewCount, publishedAt, channel } = data;
    this.id = id;
    this.title = title;
    this.thumbnailUrl = thumbnailUrl;
    this.viewCount = viewCount;
    this.publishedAt = publishedAt;
    this.channel = new BaseChannelModel(channel);
  }
}
