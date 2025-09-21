import "./index.css";
import { render } from "preact";
import { RouterProvider } from "@tanstack/react-router";
import { ReactNode } from "react";
import { createRouter } from "./router";

const router = createRouter();

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
  render((<RouterProvider router={router} />) as ReactNode, rootElement);
}
