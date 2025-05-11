import { Instance, SnapshotIn, types } from "mobx-state-tree";

export const RootStore = types.model({});

export type TRootStoreInstance = Instance<typeof RootStore>;
export type TRootStoreIn = SnapshotIn<typeof RootStore>;
