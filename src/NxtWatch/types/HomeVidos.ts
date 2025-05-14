import { BaseChannelData } from "../../Channel/types/CheannelDetails";

export interface HomeVideoDetails {
  id: string;
  publishedAt: string;
  viewCount: number;
  title: string;
  thumbnailUrl: string;
  channel: BaseChannelData;
}
