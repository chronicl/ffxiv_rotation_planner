import create from "zustand";

const [useStore, { subscribe, getState }] = create((set) => ({
  mouseX: "0s",
  setMouseX: (x) => set((state) => ({ mouseX: x })),
}));

export { useStore, subscribe, getState };
