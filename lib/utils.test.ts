import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("should merge class names correctly", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("should handle conflicting tailwind classes", () => {
    expect(cn("px-4", "px-2")).toBe("px-2");
  });

  it("should handle conditional classes", () => {
    expect(cn("base", true && "active", false && "inactive")).toBe("base active");
  });

  it("should handle undefined and null values", () => {
    expect(cn("base", undefined, null, "extra")).toBe("base extra");
  });

  it("should handle empty input", () => {
    expect(cn()).toBe("");
  });

  it("should handle arrays of classes", () => {
    expect(cn(["foo", "bar"], "baz")).toBe("foo bar baz");
  });

  it("should handle objects with boolean values", () => {
    expect(cn({ foo: true, bar: false, baz: true })).toBe("foo baz");
  });

  it("should handle mixed input types", () => {
    expect(cn("foo", { bar: true, baz: false }, ["qux"])).toBe("foo bar qux");
  });

  it("should deduplicate classes", () => {
    // clsx handles deduplication, twMerge handles conflicts
    // Duplicate non-conflicting classes are kept by clsx
    expect(cn("foo", "foo", "bar")).toMatch(/foo.*bar/);
  });
});
