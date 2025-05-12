export interface BaseVideo {
  id: string;
  thumbnailUrl: string;
  title: string;
  viewCount: string;
  cardType: "home" | "trending" | "gaming" | "saved";
  profileImageUrl?: string;
  channelName?: string;
  publishedAt?: string;
}
