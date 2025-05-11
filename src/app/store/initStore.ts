import { applySnapshot } from "mobx-state-tree";
import { RootStore, TRootStoreInstance } from "./rootStore";

export function initStore(snapshot?: TRootStoreInstance): TRootStoreInstance {
  const store = RootStore.create({});

  if (snapshot) {
    applySnapshot(store, snapshot);
  }

  return store;
}
