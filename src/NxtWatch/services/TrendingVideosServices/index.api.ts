import { TrendingVideosService } from ".";
import { TrendingVideoDetails } from "../../types/TrendingVideos";
import { getCookie } from "../../../Common/constants/utils/storageUtilities";
import getAuthHeaders from "../../../Common/constants/utils/getAuthHeaders";
import { API_ENDPOINTS } from "../APIEndpoints";

class TrendingVideosApi implements TrendingVideosService {
  async fetchTrendingVideosAPI(): Promise<TrendingVideoDetails[]> {
    const jwtToken = getCookie();
    if (!jwtToken) throw new Error("User is not authenticated");

    const response = await fetch(API_ENDPOINTS.trendingVideos, {
      headers: getAuthHeaders(jwtToken),
    });

    if (!response.ok) throw new Error("Failed to fetch trending videos");

    const data = await response.json();
    return data.videos.map((eachItem: any) => ({
      id: eachItem.id,
      channel: {
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
      },
      publishedAt: eachItem.published_at,
      thumbnailUrl: eachItem.thumbnail_url,
      title: eachItem.title,
      viewCount: eachItem.view_count,
    }));
  }
}

export default TrendingVideosApi;
