export interface TrendingVideoDetails {
  id: string;
  channel: {
    name: string;
    profileImageUrl: string;
  };
  publishedAt: string;
  thumbnailUrl: string;
  title: string;
  viewCount: number;
}
