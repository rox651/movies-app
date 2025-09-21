import { describe, expect, it } from "vitest";
import transformDate from "./transformDate";

describe("transformDate", () => {
  it("should return valid date with time", () => {
    expect(transformDate("2023-01-01T00:00:00.000Z")).toBe("1 Jan 2023");
  });

  it("should return valid date", () => {
    expect(transformDate("2023-01-01T00:00:00.000Z")).toBe("1 Jan 2023");
  });

  it("should throw for invalid date string", () => {
    expect(() => transformDate("2023-13-01")).toThrow("Invalid Date");
  });

  it("should throw when input is empty", () => {
    expect(() => transformDate("")).toThrow("Date input is required");
  });
});
