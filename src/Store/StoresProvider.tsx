import React, { createContext, useContext } from "react";
import { stores, StoresType } from "./RootStore";

const StoresContext = createContext<StoresType>(stores);

export const StoresProvider = ({ children }: { children: React.ReactNode }) => (
  <StoresContext.Provider value={stores}>{children}</StoresContext.Provider>
);

export const useStores = () => useContext(StoresContext);

export const useGamingStore = () => useStores().gamingStore;
export const useHomeStore = () => useStores().homeStore;
export const useTrendingStore = () => useStores().trendingStore;
export const useVideoDetailsStore = () => useStores().videoDetailsStore;
