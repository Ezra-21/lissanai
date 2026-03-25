export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isStrongPassword(password: string): boolean {
  return (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password)
  );
}

export function isValidUrl(url: string): boolean {
  try { new URL(url); return true; } catch { return false; }
}

export function sanitizeInput(input: string): string {
  const map: Record<string, string> = {
    "<": "&lt;", ">": "&gt;",
    "'": "&#39;", '"': "&quot;", "&": "&amp;",
  };
  return input.replace(/[<>'"&]/g, (ch) => map[ch] ?? ch);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}
