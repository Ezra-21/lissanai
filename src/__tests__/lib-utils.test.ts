import { formatBytes } from "@/lib/utils/format";
import {
  isValidUrl,
  sanitizeInput,
  isNonEmptyString,
} from "@/lib/utils/validation";
import {
  daysBetween,
  isSameDay,
  calculateStreak,
  formatDate,
  startOfDay,
} from "@/lib/utils/date";
import { hasPermission, requireRole } from "@/lib/utils/rbac";
import { sm2Next, SM2_INITIAL } from "@/lib/utils/spacedRepetition";
import { AppError, handleApiError, HTTP_ERRORS } from "@/lib/utils/apiError";
import { setCache, getCache, clearCache, hashInput } from "@/lib/utils/cache";

describe("format.formatBytes", () => {
  it("returns 0 B for zero", () => expect(formatBytes(0)).toBe("0 B"));
  it("formats bytes", () => expect(formatBytes(512)).toBe("512 B"));
  it("formats kilobytes", () => expect(formatBytes(1536)).toBe("1.5 KB"));
  it("formats megabytes", () => expect(formatBytes(1048576)).toBe("1 MB"));
});

describe("validation.isValidUrl", () => {
  it("accepts a valid http url", () => expect(isValidUrl("https://a.com")).toBe(true));
  it("rejects a non-url", () => expect(isValidUrl("not a url")).toBe(false));
});

describe("validation.sanitizeInput", () => {
  it("escapes html-significant characters", () => {
    expect(sanitizeInput("<b>'\"&</b>")).toBe(
      "&lt;b&gt;&#39;&quot;&amp;&lt;/b&gt;"
    );
  });
  it("leaves plain text untouched", () => {
    expect(sanitizeInput("hello world")).toBe("hello world");
  });
});

describe("validation.isNonEmptyString", () => {
  it("accepts non-empty strings", () => expect(isNonEmptyString("hi")).toBe(true));
  it("rejects whitespace-only strings", () => expect(isNonEmptyString("   ")).toBe(false));
  it("rejects non-strings", () => expect(isNonEmptyString(42)).toBe(false));
});

describe("date utilities", () => {
  it("daysBetween counts whole days", () => {
    expect(daysBetween(new Date("2026-01-01"), new Date("2026-01-04"))).toBe(3);
  });

  it("isSameDay distinguishes calendar days", () => {
    expect(isSameDay(new Date("2026-01-01T01:00"), new Date("2026-01-01T23:00"))).toBe(true);
    expect(isSameDay(new Date("2026-01-01"), new Date("2026-01-02"))).toBe(false);
  });

  it("calculateStreak counts consecutive days", () => {
    const dates = [
      new Date("2026-01-03"),
      new Date("2026-01-02"),
      new Date("2026-01-01"),
    ];
    expect(calculateStreak(dates)).toBe(3);
  });

  it("calculateStreak breaks on a gap", () => {
    const dates = [new Date("2026-01-05"), new Date("2026-01-03")];
    expect(calculateStreak(dates)).toBe(1);
  });

  it("formatDate produces a readable label", () => {
    expect(formatDate(new Date("2026-03-14T12:00:00Z"))).toMatch(/2026/);
  });

  it("startOfDay zeroes the time component", () => {
    const d = startOfDay(new Date("2026-03-14T15:45:30"));
    expect(d.getHours()).toBe(0);
    expect(d.getMinutes()).toBe(0);
    expect(d.getSeconds()).toBe(0);
  });
});

describe("rbac", () => {
  it("learner can use grammar", () => expect(hasPermission("learner", "use:grammar")).toBe(true));
  it("learner cannot manage users", () => expect(hasPermission("learner", "manage:users")).toBe(false));
  it("admin can manage users", () => expect(hasPermission("admin", "manage:users")).toBe(true));
  it("requireRole respects hierarchy", () => {
    expect(requireRole("admin", "learner")).toBe(true);
    expect(requireRole("learner", "admin")).toBe(false);
    expect(requireRole("learner", "learner")).toBe(true);
  });
});

describe("spaced repetition (SM-2)", () => {
  it("resets interval when quality is below 3", () => {
    const next = sm2Next({ interval: 10, easeFactor: 2.5, repetitions: 4 }, 1);
    expect(next.interval).toBe(1);
    expect(next.repetitions).toBe(0);
  });

  it("first successful review yields interval 1", () => {
    const next = sm2Next(SM2_INITIAL, 4);
    expect(next.interval).toBe(1);
    expect(next.repetitions).toBe(1);
  });

  it("second successful review yields interval 6", () => {
    const next = sm2Next({ interval: 1, easeFactor: 2.5, repetitions: 1 }, 5);
    expect(next.interval).toBe(6);
    expect(next.repetitions).toBe(2);
  });

  it("third review multiplies by ease factor", () => {
    const next = sm2Next({ interval: 6, easeFactor: 2.5, repetitions: 2 }, 4);
    expect(next.interval).toBeGreaterThan(6);
  });

  it("ease factor never drops below 1.3", () => {
    const next = sm2Next({ interval: 1, easeFactor: 1.3, repetitions: 0 }, 0);
    expect(next.easeFactor).toBeGreaterThanOrEqual(1.3);
  });
});

describe("apiError", () => {
  it("AppError carries status code and code", () => {
    const err = new AppError("nope", 418, "TEAPOT");
    expect(err.statusCode).toBe(418);
    expect(err.code).toBe("TEAPOT");
    expect(err.message).toBe("nope");
  });

  it("handleApiError unwraps an AppError", () => {
    expect(handleApiError(HTTP_ERRORS.NOT_FOUND)).toEqual({
      message: "Not found",
      statusCode: 404,
    });
  });

  it("handleApiError handles a generic Error", () => {
    expect(handleApiError(new Error("boom"))).toEqual({
      message: "boom",
      statusCode: 500,
    });
  });

  it("handleApiError handles unknown values", () => {
    expect(handleApiError("weird")).toEqual({
      message: "An unexpected error occurred",
      statusCode: 500,
    });
  });
});

describe("cache", () => {
  afterEach(() => clearCache());

  it("stores and retrieves a value", () => {
    setCache("k", 123, 1000);
    expect(getCache<number>("k")).toBe(123);
  });

  it("returns null for a missing key", () => {
    expect(getCache("absent")).toBeNull();
  });

  it("expires entries after the TTL", () => {
    setCache("temp", "v", -1);
    expect(getCache("temp")).toBeNull();
  });

  it("clearCache with a prefix removes matching keys only", () => {
    setCache("user:1", "a", 1000);
    setCache("post:1", "b", 1000);
    clearCache("user:");
    expect(getCache("user:1")).toBeNull();
    expect(getCache("post:1")).toBe("b");
  });

  it("hashInput is deterministic", () => {
    expect(hashInput("hello")).toBe(hashInput("hello"));
    expect(hashInput("a")).not.toBe(hashInput("b"));
  });
});
