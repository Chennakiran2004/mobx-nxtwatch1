import { HomeVideoDetails } from "../../types/HomeVidos";

export interface HomeVideosService {
  fetchHomeVideosAPI(searchInput: string): Promise<HomeVideoDetails[]>;
}
