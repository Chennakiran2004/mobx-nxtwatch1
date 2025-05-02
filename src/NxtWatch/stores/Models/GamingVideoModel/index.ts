import { GamingVideoDetails } from "../../../types/GamingVideos";

export class GamingVideoModel {
  id: string;
  title: string;
  thumbnailUrl: string;
  viewCount: number;

  constructor(data: GamingVideoDetails) {
    const { id, title, thumbnailUrl, viewCount } = data;
    this.id = id;
    this.title = title;
    this.thumbnailUrl = thumbnailUrl;
    this.viewCount = viewCount;
  }
}
