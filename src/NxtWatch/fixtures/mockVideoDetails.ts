import { VideoDetails } from "../types/VideoDetails";

const mockVideoDetails: VideoDetails = {
  id: "mock-id",
  description: "This is a mock video description",
  publishedAt: "2024-07-01",
  thumbnailUrl: "https://example.com/mock-thumbnail.jpg",
  title: "Mock Video Title",
  videoUrl: "https://example.com/mock-video.mp4",
  viewCount: 12345,
  channel: {
    name: "Mock Channel",
    profileImageUrl: "https://example.com/mock-channel.jpg",
    subscriberCount: "500K",
  },
};

export default mockVideoDetails;
