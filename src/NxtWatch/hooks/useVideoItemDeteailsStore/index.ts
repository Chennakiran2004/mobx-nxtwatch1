import { useStores } from "../../../Common/hooks/useStores";

const useVideoDetailsStore = () => {
  const { videoDetailsStore } = useStores();
  return { videoDetailsStore };
};

export default useVideoDetailsStore;
