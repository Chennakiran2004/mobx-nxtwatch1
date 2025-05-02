import gamingStore from "../NxtWatch/stores/GamingStore";
import homeStore from "../NxtWatch/stores/HomeStore";
import trendingStore from "../NxtWatch/stores/TrendingStore";
import videoDetailsStore from "../NxtWatch/stores/VideoDetailsStore";

export const stores = {
  gamingStore,
  homeStore,
  trendingStore,
  videoDetailsStore,
};

export type StoresType = typeof stores;
