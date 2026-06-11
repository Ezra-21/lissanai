import { getToken } from "next-auth/jwt";

jest.mock("next-auth/jwt", () => ({ getToken: jest.fn() }));

import { POST as resetPOST } from "@/app/api/auth/reset-password/route";
import { POST as draftPOST } from "@/app/api/email/draft/route";
import { POST as writePOST } from "@/app/api/email/write/route";
import { GET as pathsGET } from "@/app/api/learning/paths/route";
import { POST as interviewPOST } from "@/app/api/interview/route";

const mockedGetToken = getToken as jest.Mock;

function jsonRequest(body: unknown) {
  return new Request("http://localhost/api", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

afterEach(() => jest.restoreAllMocks());
beforeEach(() => mockedGetToken.mockReset());

describe("POST /api/auth/reset-password", () => {
  it("returns 400 when the token is missing", async () => {
    const res = await resetPOST(
      jsonRequest({ new_password: "secret1", confirmPassword: "secret1" })
    );
    expect(res.status).toBe(400);
  });

  it("returns 400 when passwords do not match", async () => {
    const res = await resetPOST(
      jsonRequest({ new_password: "secret1", confirmPassword: "nope", token: "t" })
    );
    expect(res.status).toBe(400);
  });

  it("returns 200 on a successful reset", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({}),
    } as Response);

    const res = await resetPOST(
      jsonRequest({ new_password: "secret1", confirmPassword: "secret1", token: "t" })
    );
    expect(res.status).toBe(200);
  });

  it("forwards the backend failure status", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: false,
      status: 422,
      json: async () => ({ error: "Token expired" }),
    } as Response);

    const res = await resetPOST(
      jsonRequest({ new_password: "secret1", confirmPassword: "secret1", token: "t" })
    );
    expect(res.status).toBe(422);
  });
});

describe("POST /api/email/draft", () => {
  it("returns 401 when unauthenticated", async () => {
    mockedGetToken.mockResolvedValue(null);
    const res = await draftPOST(jsonRequest({ prompt: "hi", type: "GENERATE" }) as never);
    expect(res.status).toBe(401);
  });

  it("returns 400 when required fields are missing", async () => {
    mockedGetToken.mockResolvedValue({ accessToken: "tok" });
    const res = await draftPOST(jsonRequest({ prompt: "" }) as never);
    expect(res.status).toBe(400);
  });

  it("returns 200 with the generated email on success", async () => {
    mockedGetToken.mockResolvedValue({ accessToken: "tok" });
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ subject: "Hello", body: "Body" }),
    } as Response);

    const res = await draftPOST(
      jsonRequest({ prompt: "write a job email", type: "GENERATE" }) as never
    );
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.subject).toBe("Hello");
  });
});

describe("POST /api/email/write", () => {
  it("returns 401 when unauthenticated", async () => {
    mockedGetToken.mockResolvedValue(null);
    const res = await writePOST(jsonRequest({ prompt: "draft" }) as never);
    expect(res.status).toBe(401);
  });

  it("returns 400 when prompt is missing", async () => {
    mockedGetToken.mockResolvedValue({ accessToken: "tok" });
    const res = await writePOST(jsonRequest({}) as never);
    expect(res.status).toBe(400);
  });

  it("returns 200 on a successful edit", async () => {
    mockedGetToken.mockResolvedValue({ accessToken: "tok" });
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ body: "improved" }),
    } as Response);

    const res = await writePOST(jsonRequest({ prompt: "fix this" }) as never);
    expect(res.status).toBe(200);
  });
});

describe("GET /api/learning/paths", () => {
  it("returns 401 when unauthenticated", async () => {
    mockedGetToken.mockResolvedValue(null);
    const res = await pathsGET(new Request("http://localhost/api") as never);
    expect(res.status).toBe(401);
  });

  it("returns the learning paths on success", async () => {
    mockedGetToken.mockResolvedValue({ accessToken: "tok" });
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => [{ id: "p1", title: "Basics" }],
    } as Response);

    const res = await pathsGET(new Request("http://localhost/api") as never);
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json[0].title).toBe("Basics");
  });

  it("returns 500 when the backend errors", async () => {
    mockedGetToken.mockResolvedValue({ accessToken: "tok" });
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: false,
      status: 500,
      json: async () => ({ error: "boom" }),
    } as Response);

    const res = await pathsGET(new Request("http://localhost/api") as never);
    expect(res.status).toBe(500);
  });
});

describe("POST /api/interview", () => {
  const prevKey = process.env.HUGGINGFACE_API_KEY;
  afterEach(() => {
    if (prevKey === undefined) delete process.env.HUGGINGFACE_API_KEY;
    else process.env.HUGGINGFACE_API_KEY = prevKey;
  });

  it("returns 500 when the API key is not configured", async () => {
    delete process.env.HUGGINGFACE_API_KEY;
    const res = await interviewPOST(jsonRequest({}) as never);
    expect(res.status).toBe(500);
  });

  it("returns 400 when no audio file is provided", async () => {
    process.env.HUGGINGFACE_API_KEY = "test-key";
    const form = new FormData();
    const req = new Request("http://localhost/api/interview", {
      method: "POST",
      body: form,
    });
    const res = await interviewPOST(req as never);
    expect(res.status).toBe(400);
  });
});
