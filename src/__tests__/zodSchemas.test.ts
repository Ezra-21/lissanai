import {
  SignInSchema,
  SignUpSchema,
  ForgotPasswordSchema,
  ResetPasswordSchema,
} from "@/app/lib/zod";

describe("SignInSchema", () => {
  it("accepts a valid email and password", () => {
    const result = SignInSchema.safeParse({
      email: "user@example.com",
      password: "secret",
    });
    expect(result.success).toBe(true);
  });

  it("rejects an invalid email", () => {
    const result = SignInSchema.safeParse({
      email: "not-an-email",
      password: "secret",
    });
    expect(result.success).toBe(false);
  });

  it("rejects an empty password", () => {
    const result = SignInSchema.safeParse({
      email: "user@example.com",
      password: "",
    });
    expect(result.success).toBe(false);
  });
});

describe("SignUpSchema", () => {
  const valid = {
    fullName: "Abebe Kebede",
    email: "abebe@example.com",
    password: "secret1",
    confirmPassword: "secret1",
    agreedToTerms: true,
  };

  it("accepts a fully valid sign-up payload", () => {
    expect(SignUpSchema.safeParse(valid).success).toBe(true);
  });

  it("rejects when passwords do not match", () => {
    const result = SignUpSchema.safeParse({
      ...valid,
      confirmPassword: "different",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues.some((i) => i.path.includes("confirmPassword"))).toBe(true);
    }
  });

  it("rejects when terms are not accepted", () => {
    const result = SignUpSchema.safeParse({ ...valid, agreedToTerms: false });
    expect(result.success).toBe(false);
  });

  it("rejects a full name shorter than 2 characters", () => {
    const result = SignUpSchema.safeParse({ ...valid, fullName: "A" });
    expect(result.success).toBe(false);
  });

  it("rejects a password shorter than 6 characters", () => {
    const result = SignUpSchema.safeParse({
      ...valid,
      password: "123",
      confirmPassword: "123",
    });
    expect(result.success).toBe(false);
  });
});

describe("ForgotPasswordSchema", () => {
  it("accepts a valid email", () => {
    expect(ForgotPasswordSchema.safeParse({ email: "a@b.com" }).success).toBe(true);
  });

  it("rejects a malformed email", () => {
    expect(ForgotPasswordSchema.safeParse({ email: "bad" }).success).toBe(false);
  });
});

describe("ResetPasswordSchema", () => {
  it("accepts matching new passwords", () => {
    const result = ResetPasswordSchema.safeParse({
      new_password: "secret1",
      confirmPassword: "secret1",
    });
    expect(result.success).toBe(true);
  });

  it("rejects mismatched new passwords", () => {
    const result = ResetPasswordSchema.safeParse({
      new_password: "secret1",
      confirmPassword: "secret2",
    });
    expect(result.success).toBe(false);
  });
});
