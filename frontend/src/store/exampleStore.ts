import type { StateCreator } from "zustand";

export interface ExampleSlice {}

export const createExampleSlice: StateCreator<
  ExampleSlice,
  [],
  [],
  ExampleSlice
> = () => ({});
