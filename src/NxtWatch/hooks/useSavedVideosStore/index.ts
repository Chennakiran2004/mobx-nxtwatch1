import { useStores } from "../../../Common/hooks/useStores";
const useSavedVideosStore = () => {
  const { savedVideosStore } = useStores();
  return { savedVideosStore };
};

export default useSavedVideosStore;
