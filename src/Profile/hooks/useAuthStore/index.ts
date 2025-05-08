import { useStores } from "../../../Common/hooks/useStores";
const useAuthStore = () => {
  const { authStore } = useStores();
  return { authStore };
};

export default useAuthStore;
