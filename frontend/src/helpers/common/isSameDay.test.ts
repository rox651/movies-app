import { describe, expect, it } from "vitest";
import { isSameDay } from "./isSameDay";

describe("isSameDay", () => {
  it("should return true if the date is today", () => {
    const today = new Date().toLocaleDateString();
    expect(isSameDay(today)).toBe(true);
  });

  it("should return false if the date is not today", () => {
    const yesterday = new Date(
      new Date().setDate(new Date().getDate() - 1),
    ).toLocaleDateString();
    expect(isSameDay(yesterday)).toBe(false);
  });

  it("should return false if the date is null", () => {
    expect(isSameDay(null)).toBe(false);
  });
});
