export type VideoDetails = {
  id: string;
  description: string;
  publishedAt: string;
  thumbnailUrl: string;
  title: string;
  videoUrl: string;
  viewCount: number;
  channel: {
    name: string;
    profileImageUrl: string;
    subscriberCount: string;
  };
};
