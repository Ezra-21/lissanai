export const APP_NAME = "LissanAI";
export const APP_DESCRIPTION =
  "AI-Powered English Communication Coach for Ethiopians";
export const APP_URL =
  process.env.NEXTAUTH_URL ?? "http://localhost:3000";

export const AI_MODEL = "gpt-4o-mini";
export const MAX_TOKENS = 1024;
export const TEMPERATURE = 0.7;

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  DASHBOARD: "/dashboard",
  GRAMMAR: "/grammar",
  INTERVIEW: "/interview",
  EMAIL: "/email",
  PRONUNCIATION: "/pronunciation",
  LEARN: "/learn",
  PROFILE: "/profile",
} as const;

// Pagination
export const DEFAULT_PAGE_SIZE = 10;
export const MAX_PAGE_SIZE = 100;

// Audio
export const MAX_AUDIO_DURATION_SECONDS = 120;
export const SUPPORTED_AUDIO_FORMATS = ["audio/webm", "audio/mp4", "audio/ogg"];
