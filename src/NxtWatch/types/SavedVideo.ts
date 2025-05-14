import { BaseChannelData } from "../../Channel/types/CheannelDetails";

export interface SavedVideo {
  id: string;
  title: string;
  thumbnailUrl: string;
  viewCount: string;
  publishedAt: string;
  channel: BaseChannelData;
}
