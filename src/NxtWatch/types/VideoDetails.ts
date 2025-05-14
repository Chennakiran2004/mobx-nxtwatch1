import { ChannelData } from "../../Channel/types/CheannelDetails";

export type VideoDetails = {
  id: string;
  description: string;
  publishedAt: string;
  thumbnailUrl: string;
  title: string;
  videoUrl: string;
  viewCount: number;
  channel: ChannelData;
};
