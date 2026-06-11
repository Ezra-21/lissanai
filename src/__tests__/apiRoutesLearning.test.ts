import { getToken } from "next-auth/jwt";

jest.mock("next-auth/jwt", () => ({ getToken: jest.fn() }));

import { GET as allPathsGET } from "@/app/api/learning/route";
import { GET as pathByIdGET } from "@/app/api/learning/paths/[pathId]/route";
import { POST as enrollPOST } from "@/app/api/learning/paths/[pathId]/enroll/route";
import { GET as progressGET } from "@/app/api/learning/paths/[pathId]/progress/route";
import { GET as lessonGET } from "@/app/api/learning/lessons/[lessonId]/route";
import { POST as completePOST } from "@/app/api/learning/lessons/[lessonId]/complete/route";
import { POST as quizSubmitPOST } from "@/app/api/learning/quizzes/[quizId]/submit/route";
import { GET as sentenceGET } from "@/app/api/pronunciation/sentence/route";
import { POST as assessPOST } from "@/app/api/pronunciation/assess/route";

const mockedGetToken = getToken as jest.Mock;

const req = (body?: unknown) =>
  new Request("http://localhost/api", {
    method: body ? "POST" : "GET",
    headers: { "Content-Type": "application/json" },
    ...(body ? { body: JSON.stringify(body) } : {}),
  }) as never;

function mockFetch(ok: boolean, status: number, json: unknown) {
  return jest.spyOn(global, "fetch").mockResolvedValue({
    ok,
    status,
    json: async () => json,
  } as Response);
}

beforeEach(() => mockedGetToken.mockReset());
afterEach(() => jest.restoreAllMocks());

describe("auth gating for learning + pronunciation routes", () => {
  beforeEach(() => mockedGetToken.mockResolvedValue(null));

  it("all routes return 401 without a token", async () => {
    expect((await allPathsGET(req())).status).toBe(401);
    expect((await pathByIdGET(req(), { params: { pathId: "p1" } })).status).toBe(401);
    expect((await enrollPOST(req(), { params: { pathId: "p1" } })).status).toBe(401);
    expect((await progressGET(req(), { params: { pathId: "p1" } })).status).toBe(401);
    expect((await lessonGET(req(), { params: { lessonId: "l1" } })).status).toBe(401);
    expect((await completePOST(req(), { params: { lessonId: "l1" } })).status).toBe(401);
    expect((await quizSubmitPOST(req({ answers: [] }), { params: { quizId: "q1" } })).status).toBe(401);
    expect((await sentenceGET(req())).status).toBe(401);
    expect((await assessPOST(req({}))).status).toBe(401);
  });
});

describe("GET /api/learning (all paths)", () => {
  beforeEach(() => mockedGetToken.mockResolvedValue({ accessToken: "tok" }));

  it("returns paths on success", async () => {
    mockFetch(true, 200, [{ id: "p1" }]);
    const res = await allPathsGET(req());
    expect(res.status).toBe(200);
  });

  it("returns 500 when backend fails", async () => {
    mockFetch(false, 500, { error: "x" });
    expect((await allPathsGET(req())).status).toBe(500);
  });
});

describe("GET /api/learning/paths/[pathId]", () => {
  beforeEach(() => mockedGetToken.mockResolvedValue({ accessToken: "tok" }));

  it("returns the matching path", async () => {
    mockFetch(true, 200, [{ id: "p1", title: "A" }, { id: "p2" }]);
    const res = await pathByIdGET(req(), { params: { pathId: "p1" } });
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.title).toBe("A");
  });

  it("returns 404 when the path is not found", async () => {
    mockFetch(true, 200, [{ id: "other" }]);
    const res = await pathByIdGET(req(), { params: { pathId: "missing" } });
    expect(res.status).toBe(404);
  });
});

describe("POST /api/learning/paths/[pathId]/enroll", () => {
  beforeEach(() => mockedGetToken.mockResolvedValue({ accessToken: "tok" }));

  it("enrolls successfully", async () => {
    mockFetch(true, 200, { enrolled: true });
    const res = await enrollPOST(req(), { params: { pathId: "p1" } });
    expect(res.status).toBe(200);
  });

  it("returns 500 on backend failure", async () => {
    mockFetch(false, 400, { error: "nope" });
    const res = await enrollPOST(req(), { params: { pathId: "p1" } });
    expect(res.status).toBe(500);
  });
});

describe("GET /api/learning/paths/[pathId]/progress", () => {
  beforeEach(() => mockedGetToken.mockResolvedValue({ accessToken: "tok" }));

  it("returns progress data", async () => {
    mockFetch(true, 200, { percent: 42 });
    const res = await progressGET(req(), { params: { pathId: "p1" } });
    expect(res.status).toBe(200);
    expect((await res.json()).percent).toBe(42);
  });
});

describe("GET /api/learning/lessons/[lessonId]", () => {
  beforeEach(() => mockedGetToken.mockResolvedValue({ accessToken: "tok" }));

  it("returns lesson content", async () => {
    mockFetch(true, 200, { id: "l1", title: "Lesson" });
    const res = await lessonGET(req(), { params: { lessonId: "l1" } });
    expect(res.status).toBe(200);
  });

  it("forwards the backend error status", async () => {
    mockFetch(false, 404, { error: "not found" });
    const res = await lessonGET(req(), { params: { lessonId: "l1" } });
    expect(res.status).toBe(404);
  });
});

describe("POST /api/learning/lessons/[lessonId]/complete", () => {
  beforeEach(() => mockedGetToken.mockResolvedValue({ accessToken: "tok" }));

  it("marks the lesson complete", async () => {
    mockFetch(true, 200, { completed: true });
    const res = await completePOST(req(), { params: { lessonId: "l1" } });
    expect(res.status).toBe(200);
  });

  it("returns 500 on backend failure", async () => {
    mockFetch(false, 400, { error: "boom" });
    const res = await completePOST(req(), { params: { lessonId: "l1" } });
    expect(res.status).toBe(500);
  });
});

describe("POST /api/learning/quizzes/[quizId]/submit", () => {
  beforeEach(() => mockedGetToken.mockResolvedValue({ accessToken: "tok" }));

  it("returns 400 when answers are missing", async () => {
    const res = await quizSubmitPOST(req({}), { params: { quizId: "q1" } });
    expect(res.status).toBe(400);
  });

  it("submits answers successfully", async () => {
    mockFetch(true, 200, { score: 80 });
    const res = await quizSubmitPOST(req({ answers: [1, 2] }), { params: { quizId: "q1" } });
    expect(res.status).toBe(200);
    expect((await res.json()).score).toBe(80);
  });
});

describe("pronunciation routes", () => {
  beforeEach(() => mockedGetToken.mockResolvedValue({ accessToken: "tok" }));

  it("GET /sentence returns a practice sentence", async () => {
    mockFetch(true, 200, { sentence: "The quick brown fox." });
    const res = await sentenceGET(req());
    expect(res.status).toBe(200);
    expect((await res.json()).sentence).toBeTruthy();
  });

  it("POST /assess returns 400 when fields are missing", async () => {
    const form = new FormData();
    const r = new Request("http://localhost/api/pronunciation/assess", {
      method: "POST",
      body: form,
    });
    const res = await assessPOST(r as never);
    expect(res.status).toBe(400);
  });

  it("POST /assess proxies a successful assessment", async () => {
    mockFetch(true, 200, { overallScore: 90 });
    const form = new FormData();
    form.append("audio_data", new Blob(["x"]), "a.webm");
    form.append("target_text", "hello");
    const r = new Request("http://localhost/api/pronunciation/assess", {
      method: "POST",
      body: form,
    });
    const res = await assessPOST(r as never);
    expect(res.status).toBe(200);
    expect((await res.json()).overallScore).toBe(90);
  });
});
