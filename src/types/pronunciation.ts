export interface PronunciationAssessment {
  overallScore: number;
  accuracyScore: number;
  fluencyScore: number;
  completenessScore: number;
  words: WordAssessment[];
}

export interface WordAssessment {
  word: string;
  accuracyScore: number;
  errorType?: "None" | "Omission" | "Insertion" | "Mispronunciation";
  syllables: SyllableAssessment[];
}

export interface SyllableAssessment {
  syllable: string;
  accuracyScore: number;
  offset: number;
  duration: number;
}

export interface PronunciationSession {
  id: string;
  userId: string;
  targetSentence: string;
  assessment: PronunciationAssessment;
  audioUrl?: string;
  createdAt: string;
}
