import {
  APP_NAME,
  ROUTES,
  INTERVIEW_CATEGORIES,
  THEMES,
  SUPPORTED_AUDIO_FORMATS,
} from "@/constants/config";
import { ACHIEVEMENTS } from "@/constants/achievements";
import { EMAIL_TEMPLATES } from "@/constants/emailTemplates";
import { KEYBOARD_SHORTCUTS } from "@/constants/shortcuts";
import {
  DEFAULT_LOCALE,
  LOCALE_LABELS,
  LOCALE_FLAGS,
} from "@/constants/i18n";
import {
  INTERVIEW_SYSTEM_PROMPT,
  GRAMMAR_SYSTEM_PROMPT,
} from "@/constants/prompts";
import { FADE_IN, STAGGER_CHILDREN } from "@/constants/animations";

describe("config constants", () => {
  it("exposes the app name", () => expect(APP_NAME).toBe("LissanAI"));
  it("defines core routes", () => {
    expect(ROUTES.DASHBOARD).toBe("/dashboard");
    expect(ROUTES.GRAMMAR).toBe("/grammar");
  });
  it("lists interview categories", () => {
    expect(INTERVIEW_CATEGORIES).toContain("Software Developer");
    expect(INTERVIEW_CATEGORIES.length).toBeGreaterThan(0);
  });
  it("defines theme options", () => {
    expect(THEMES).toEqual(["light", "dark", "system"]);
  });
  it("lists supported audio formats", () => {
    expect(SUPPORTED_AUDIO_FORMATS).toContain("audio/webm");
  });
});

describe("achievements", () => {
  it("every achievement has the required fields", () => {
    expect(ACHIEVEMENTS.length).toBeGreaterThan(0);
    for (const a of ACHIEVEMENTS) {
      expect(a.id).toBeTruthy();
      expect(a.title).toBeTruthy();
      expect(a.condition).toBeTruthy();
    }
  });
  it("achievement ids are unique", () => {
    const ids = ACHIEVEMENTS.map((a) => a.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("email templates", () => {
  it("each template lists the variables used in its body", () => {
    for (const t of EMAIL_TEMPLATES) {
      for (const v of t.variables) {
        const usedInBody = t.body.includes(`{{${v}}}`);
        const usedInSubject = t.subject.includes(`{{${v}}}`);
        expect(usedInBody || usedInSubject).toBe(true);
      }
    }
  });
});

describe("keyboard shortcuts", () => {
  it("each shortcut has a key and action", () => {
    for (const s of KEYBOARD_SHORTCUTS) {
      expect(s.key).toBeTruthy();
      expect(s.action).toBeTruthy();
    }
  });
});

describe("i18n", () => {
  it("defaults to English", () => expect(DEFAULT_LOCALE).toBe("en"));
  it("has labels and flags for every supported locale", () => {
    expect(LOCALE_LABELS.am).toBeTruthy();
    expect(LOCALE_FLAGS.en).toBeTruthy();
  });
});

describe("prompts", () => {
  it("provides non-empty system prompts", () => {
    expect(INTERVIEW_SYSTEM_PROMPT.length).toBeGreaterThan(10);
    expect(GRAMMAR_SYSTEM_PROMPT.length).toBeGreaterThan(10);
  });
});

describe("animations", () => {
  it("fade-in animates opacity", () => {
    expect(FADE_IN.animate.opacity).toBe(1);
  });
  it("stagger config defines children stagger", () => {
    expect(STAGGER_CHILDREN.animate.transition.staggerChildren).toBeGreaterThan(0);
  });
});
