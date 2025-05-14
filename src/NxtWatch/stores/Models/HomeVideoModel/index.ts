import { HomeVideoDetails } from "../../../types/HomeVidos";
import { BaseChannelModel } from "../../../../Channel/stores/models/BaseChannleModel";

export class HomeVideoModel {
  id: string;
  title: string;
  thumbnailUrl: string;
  viewCount: number;
  publishedAt: string;
  channel: BaseChannelModel;

  constructor(data: HomeVideoDetails) {
    const { id, title, thumbnailUrl, viewCount, publishedAt, channel } = data;
    this.id = id;
    this.title = title;
    this.thumbnailUrl = thumbnailUrl;
    this.viewCount = viewCount;
    this.publishedAt = publishedAt;
    this.channel = new BaseChannelModel(channel);
  }
}
