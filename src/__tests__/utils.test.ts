import { formatDuration, capitalize, truncate } from "@/lib/utils/format";
import { isValidEmail, isStrongPassword, clamp } from "@/lib/utils/validation";
import { calculateStreak, daysBetween } from "@/lib/utils/date";

describe("formatDuration", () => {
  it("formats 90 seconds as 01:30", () => expect(formatDuration(90)).toBe("01:30"));
  it("formats 0 as 00:00", () => expect(formatDuration(0)).toBe("00:00"));
  it("formats 3600 as 60:00", () => expect(formatDuration(3600)).toBe("60:00"));
});

describe("capitalize", () => {
  it("capitalizes first letter", () => expect(capitalize("hello")).toBe("Hello"));
  it("handles empty string", () => expect(capitalize("")).toBe(""));
});

describe("truncate", () => {
  it("truncates long strings", () => expect(truncate("Hello World", 8)).toBe("Hello..."));
  it("passes short strings through", () => expect(truncate("Hi", 10)).toBe("Hi"));
});

describe("isValidEmail", () => {
  it("accepts valid email", () => expect(isValidEmail("user@example.com")).toBe(true));
  it("rejects invalid email", () => expect(isValidEmail("not-an-email")).toBe(false));
});

describe("clamp", () => {
  it("clamps above max", () => expect(clamp(150, 0, 100)).toBe(100));
  it("clamps below min", () => expect(clamp(-5, 0, 100)).toBe(0));
  it("passes values in range", () => expect(clamp(50, 0, 100)).toBe(50));
});

describe("calculateStreak", () => {
  it("returns 0 for empty array", () => expect(calculateStreak([])).toBe(0));
});

describe("isStrongPassword", () => {
  it("accepts strong password", () => expect(isStrongPassword("Secure123")).toBe(true));
  it("rejects short password", () => expect(isStrongPassword("abc")).toBe(false));
  it("rejects password without uppercase", () => expect(isStrongPassword("secure123")).toBe(false));
});
