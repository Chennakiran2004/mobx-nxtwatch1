import { useStores } from "../../../Common/hooks/useStores";

const useHomeStore = () => {
  const { homeStore } = useStores();
  return { homeStore };
};

export default useHomeStore;
