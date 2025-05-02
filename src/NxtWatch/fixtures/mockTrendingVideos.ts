import { TrendingVideoDetails } from "../types/TrendingVideos";

const mockTrendingVideos: TrendingVideoDetails[] = [
  {
    id: "1",
    channel: {
      name: "Mock Channel A",
      profileImageUrl: "https://example.com/channel-a.jpg",
    },
    publishedAt: "2024-10-01",
    thumbnailUrl: "https://example.com/thumb-a.jpg",
    title: "Mock Trending Video A",
    viewCount: 1000,
  },
];

export default mockTrendingVideos;
