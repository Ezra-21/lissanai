import { checkGrammar } from "@/lib/grammarApi";

describe("checkGrammar", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("POSTs the text to /api/grammar and returns parsed JSON", async () => {
    const payload = { corrected: "Hello world." };
    const fetchMock = jest
      .spyOn(global, "fetch")
      .mockResolvedValue({
        ok: true,
        json: async () => payload,
      } as Response);

    const result = await checkGrammar("helo world");

    expect(fetchMock).toHaveBeenCalledWith(
      "/api/grammar",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: "helo world" }),
      })
    );
    expect(result).toEqual(payload);
  });

  it("throws when the response is not ok", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: false,
      json: async () => ({}),
    } as Response);

    await expect(checkGrammar("anything")).rejects.toThrow(
      "Grammar check failed"
    );
  });
});
