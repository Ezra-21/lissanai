export interface SessionFeedback {
  sessionId: string;
  sessionType: "interview" | "grammar" | "pronunciation" | "email";
  rating: 1 | 2 | 3 | 4 | 5;
  comment?: string;
  helpful: boolean;
  submittedAt: string;
}

export interface FeedbackSummary {
  averageRating: number;
  totalResponses: number;
  ratingDistribution: Record<1 | 2 | 3 | 4 | 5, number>;
}
