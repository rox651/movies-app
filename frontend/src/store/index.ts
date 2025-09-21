import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ExampleSlice } from "./exampleStore";
import { createExampleSlice } from "./exampleStore";

type RootState = ExampleSlice;

const useStore = create<RootState>()(
  persist(
    (...a) => ({
      ...createExampleSlice(...a),
    }),
    {
      name: "example-storage",
    },
  ),
);

export default useStore;
