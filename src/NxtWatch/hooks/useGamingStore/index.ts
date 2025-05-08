import { useStores } from "../../../Common/hooks/useStores";
const useGamingStore = () => {
  const { gamingStore } = useStores();
  return { gamingStore };
};

export default useGamingStore;
