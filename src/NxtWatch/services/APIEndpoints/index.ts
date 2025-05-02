export const API_BASE_URL = "https://apis.ccbp.in/videos";

export const API_ENDPOINTS = {
  HomeVideos: `${API_BASE_URL}/all`,
  gamingVideos: `${API_BASE_URL}/gaming`,
  trendingVideos: `${API_BASE_URL}/trending`,
  videoDetails: (id: string) => `${API_BASE_URL}/${id}`,
};
