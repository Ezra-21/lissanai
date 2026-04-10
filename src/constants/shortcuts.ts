export interface KeyboardShortcut {
  key: string;
  ctrl?: boolean;
  shift?: boolean;
  description: string;
  action: string;
}

export const KEYBOARD_SHORTCUTS: KeyboardShortcut[] = [
  { key: "/", description: "Focus search", action: "focus-search" },
  { key: "Escape", description: "Close modal", action: "close-modal" },
  { key: "k", ctrl: true, description: "Command palette", action: "open-command" },
  { key: "d", ctrl: true, description: "Dashboard", action: "nav-dashboard" },
  { key: "g", ctrl: true, description: "Grammar Check", action: "nav-grammar" },
  { key: "i", ctrl: true, description: "Interview", action: "nav-interview" },
  { key: "?", description: "Show shortcuts", action: "show-shortcuts" },
];
