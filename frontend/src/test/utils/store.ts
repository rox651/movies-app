import useStore from "@/store";
import type { ExampleSlice } from "@/store/exampleStore";

export function resetStore(): void {
  const initial: ExampleSlice = {};
  useStore.setState(initial);
}
