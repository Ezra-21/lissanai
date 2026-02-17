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

// Grammar feedback
export const GRAMMAR_MIN_LENGTH = 10;
export const GRAMMAR_MAX_LENGTH = 5000;
export const GRAMMAR_DEBOUNCE_MS = 500;

// Interview
export const INTERVIEW_MAX_QUESTIONS = 10;
export const INTERVIEW_CATEGORIES = [
  "Software Developer",
  "Data Analyst",
  "Product Manager",
  "Marketing Specialist",
  "Customer Support",
  "Business Analyst",
] as const;

// Search
export const SEARCH_DEBOUNCE_MS = 300;
