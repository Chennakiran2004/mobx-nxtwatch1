export interface SavedVideo {
  id: string;
  title: string;
  thumbnailUrl: string;
  viewCount: string;
  publishedAt: string;
  channel: {
    name: string;
    profileImageUrl: string;
  };
}
