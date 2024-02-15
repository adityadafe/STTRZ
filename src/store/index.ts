import { create } from "zustand";

export const useIndexStore = create<CountState>((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count + 1 })),
  resetCount: () => set((state) => ({ count: state.count + 1 })),
}));
