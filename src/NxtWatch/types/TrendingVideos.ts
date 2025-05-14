import { BaseChannelData } from "../../Channel/types/CheannelDetails";

export interface TrendingVideoDetails {
  id: string;
  publishedAt: string;
  thumbnailUrl: string;
  title: string;
  viewCount: number;
  channel: BaseChannelData;
}
