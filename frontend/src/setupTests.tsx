import "@testing-library/jest-dom/vitest";

import { vi } from "vitest";
import { h } from "preact";
import { PropsWithChildren } from "preact/compat";

vi.mock("react-markdown", () => {
  return {
    __esModule: true,
    default: ({ children }: PropsWithChildren) => h("div", {}, children),
  };
});
