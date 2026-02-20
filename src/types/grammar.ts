export interface GrammarError {
  original: string;
  corrected: string;
  explanation: string;
  severity: "error" | "warning" | "suggestion";
  position: { start: number; end: number };
}

export interface GrammarResult {
  originalText: string;
  correctedText: string;
  errors: GrammarError[];
  clarityScore: number;
  styleImprovements: string[];
  processingTime: number;
}

export interface GrammarSession {
  id: string;
  userId: string;
  result: GrammarResult;
  createdAt: string;
}
