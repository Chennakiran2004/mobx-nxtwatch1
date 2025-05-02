import { HomeVideosService } from ".";
import { HomeVideoDetails } from "../../types/HomeVidos";
import { getCookie } from "../../../Common/constants/utils/storageUtilities";
import getAuthHeaders from "../../../Common/constants/utils/getAuthHeaders";
import { API_ENDPOINTS } from "../APIEndpoints";

class HomeVideosApi implements HomeVideosService {
  async fetchHomeVideosAPI(searchInput: string): Promise<HomeVideoDetails[]> {
    const jwtToken = getCookie();
    if (!jwtToken) throw new Error("User is not authenticated");

    const response = await fetch(API_ENDPOINTS.HomeVideos, {
      headers: getAuthHeaders(jwtToken),
    });

    if (!response.ok) throw new Error("Failed to fetch videos");

    const data = await response.json();

    return data.videos.map((eachItem: any) => ({
      id: eachItem.id,
      channel: {
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
      },
      publishedAt: eachItem.published_at,
      viewCount: eachItem.view_count,
      title: eachItem.title,
      thumbnailUrl: eachItem.thumbnail_url,
    }));
  }
}

export default HomeVideosApi;
