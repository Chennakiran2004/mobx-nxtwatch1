import { useContext } from "react";
import { MobXProviderContext } from "mobx-react";
import rootStore from "../../stores";
export const useStores = () => {
  const stores = useContext(MobXProviderContext);

  return stores as typeof rootStore;
};
