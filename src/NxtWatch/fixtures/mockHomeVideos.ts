import { HomeVideoDetails } from "../types/HomeVidos";

const mockHomeVideos: HomeVideoDetails[] = [
  {
    id: "1",
    channel: {
      name: "Mock Channel 1",
      profileImageUrl: "https://example.com/mock1.jpg",
    },
    publishedAt: "2024-08-08",
    viewCount: 10,
    title: "Mock Video 1",
    thumbnailUrl: "https://example.com/mock1.jpg",
  },
];

export default mockHomeVideos;
