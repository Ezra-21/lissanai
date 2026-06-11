import { POST as registerPOST } from "@/app/api/auth/register/route";
import { POST as forgotPOST } from "@/app/api/auth/forgot-password/route";
import { POST as grammarPOST } from "@/app/api/grammar/check/route";

function jsonRequest(body: unknown, headers: Record<string, string> = {}) {
  return new Request("http://localhost/api", {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(body),
  });
}

describe("POST /api/auth/register", () => {
  afterEach(() => jest.restoreAllMocks());

  const validBody = {
    fullName: "Abebe Kebede",
    email: "abebe@example.com",
    password: "secret1",
    confirmPassword: "secret1",
    agreedToTerms: true,
  };

  it("returns 400 when the payload fails validation", async () => {
    const res = await registerPOST(jsonRequest({ email: "bad" }));
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.message).toBe("Invalid input");
  });

  it("returns 201 when the backend accepts the registration", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      status: 201,
      json: async () => ({ user: { id: "1", email: validBody.email } }),
    } as Response);

    const res = await registerPOST(jsonRequest(validBody));
    expect(res.status).toBe(201);
    const json = await res.json();
    expect(json.user.email).toBe(validBody.email);
  });

  it("forwards the backend error status", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: false,
      status: 409,
      json: async () => ({ error: "Email already registered" }),
    } as Response);

    const res = await registerPOST(jsonRequest(validBody));
    expect(res.status).toBe(409);
    const json = await res.json();
    expect(json.message).toBe("Email already registered");
  });

  it("returns 500 when the fetch throws", async () => {
    jest.spyOn(global, "fetch").mockRejectedValue(new Error("network"));
    const res = await registerPOST(jsonRequest(validBody));
    expect(res.status).toBe(500);
  });
});

describe("POST /api/auth/forgot-password", () => {
  afterEach(() => jest.restoreAllMocks());

  it("returns 400 for an invalid email", async () => {
    const res = await forgotPOST(jsonRequest({ email: "nope" }));
    expect(res.status).toBe(400);
  });

  it("returns a generic 200 message for a valid email", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({}),
    } as Response);

    const res = await forgotPOST(jsonRequest({ email: "user@example.com" }));
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.message).toMatch(/reset link/i);
  });

  it("still returns 200 even if the backend fails (no account enumeration)", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: false,
      status: 404,
      json: async () => ({}),
    } as Response);

    const res = await forgotPOST(jsonRequest({ email: "user@example.com" }));
    expect(res.status).toBe(200);
  });
});

describe("POST /api/grammar/check", () => {
  afterEach(() => jest.restoreAllMocks());

  it("proxies the backend response and status", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ corrected: "Hello world." }),
    } as Response);

    const res = await grammarPOST(
      jsonRequest({ text: "helo world" }) as never
    );
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.corrected).toBe("Hello world.");
  });

  it("returns 500 with a friendly message when the backend is unreachable", async () => {
    jest.spyOn(global, "fetch").mockRejectedValue(new Error("down"));
    const res = await grammarPOST(jsonRequest({ text: "x" }) as never);
    expect(res.status).toBe(500);
    const json = await res.json();
    expect(json.error).toMatch(/try again/i);
  });
});
