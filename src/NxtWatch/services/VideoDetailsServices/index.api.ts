import { VideoDetailsService } from ".";
import { VideoDetails } from "../../types/VideoDetails";
import { getCookie } from "../../../Common/constants/utils/storageUtilities";
import getAuthHeaders from "../../../Common/constants/utils/getAuthHeaders";
import { API_ENDPOINTS } from "../APIEndpoints";

class VideoDetailsApi implements VideoDetailsService {
  async fetchVideoDetailsAPI(id: string): Promise<VideoDetails> {
    const jwtToken = getCookie();
    if (!jwtToken) throw new Error("User is not authenticated");

    const response = await fetch(API_ENDPOINTS.videoDetails(id), {
      headers: getAuthHeaders(jwtToken),
    });

    if (!response.ok) throw new Error("Failed to fetch video details");

    const data = await response.json();
    const video = data.video_details;

    return {
      id: video.id,
      description: video.description,
      publishedAt: video.published_at,
      thumbnailUrl: video.thumbnail_url,
      title: video.title,
      videoUrl: video.video_url,
      viewCount: video.view_count,
      channel: {
        name: video.channel.name,
        profileImageUrl: video.channel.profile_image_url,
        subscriberCount: video.channel.subscriber_count,
      },
    };
  }
}

export default VideoDetailsApi;
