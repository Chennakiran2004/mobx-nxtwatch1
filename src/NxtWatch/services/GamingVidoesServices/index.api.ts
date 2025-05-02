import { GamingVideosService } from ".";
import { GamingVideoDetails } from "../../types/GamingVideos";
import getAuthHeaders from "../../../Common/constants/utils/getAuthHeaders";
import { getCookie } from "../../../Common/constants/utils/storageUtilities";
import { API_ENDPOINTS } from "../APIEndpoints";


class GamingVideosApi implements GamingVideosService {
  async fetchGamingVideosAPI(): Promise<GamingVideoDetails[]> {
    const jwtToken = getCookie();
    if (!jwtToken) throw new Error("User is not authenticated");

    const response = await fetch(API_ENDPOINTS.gamingVideos, {
      headers: getAuthHeaders(jwtToken),
    });

    if (!response.ok) throw new Error("Failed to fetch gaming videos");

    const data = await response.json();
    return data.videos.map((eachItem: any) => ({
      id: eachItem.id,
      thumbnailUrl: eachItem.thumbnail_url,
      title: eachItem.title,
      viewCount: eachItem.view_count,
    })) as GamingVideoDetails[];
  }
}

export default GamingVideosApi;
