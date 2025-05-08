import { useStores } from "../../../Common/hooks/useStores";

const useTrendingStore = () => {
  const { trendingStore } = useStores();
  return { trendingStore };
};

export default useTrendingStore;
