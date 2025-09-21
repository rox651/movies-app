import {
  HEIGHT_DESKTOP,
  WIDTH_DESKTOP,
} from "@/domain/entities/common/constants";
import { test } from "@playwright/test";
// import { loadEnv } from "vite";

// const env = loadEnv(process.env.NODE_ENV || "development", process.cwd(), "");

// const BACKEND_URL = env.VITE_API_URL;

test.use({ viewport: { width: WIDTH_DESKTOP, height: HEIGHT_DESKTOP } });

test.describe("Test e2e", () => {
  test("viewport is set", async () => {
    // Placeholder test to keep template green
    test.expect(test.info().project.use?.viewport).toEqual({
      width: WIDTH_DESKTOP,
      height: HEIGHT_DESKTOP,
    });
  });
});
