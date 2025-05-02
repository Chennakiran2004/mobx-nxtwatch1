export interface HomeVideoDetails {
  id: string;
  channel: {
    name: string;
    profileImageUrl: string;
  };
  publishedAt: string;
  viewCount: number;
  title: string;
  thumbnailUrl: string;
}
