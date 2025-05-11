import type { FC, ReactNode } from "react";
import { createContext, useContext, useMemo } from "react";
import { TRootStoreInstance } from "./rootStore";
import { initStore } from "./initStore.ts";

export const RootStoreContext = createContext<null | TRootStoreInstance>(null);

export const useStore = (): TRootStoreInstance => {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
};

export type TStoreProvider = {
  initialState?: TRootStoreInstance;
  children: ReactNode;
};

export const StoreProvider: FC<TStoreProvider> = ({ children }) => {
  const store = useMemo(() => initStore(), []);
  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  );
};
