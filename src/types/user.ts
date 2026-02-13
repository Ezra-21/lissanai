export type UserRole = "learner" | "admin";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserStats {
  totalLessonsCompleted: number;
  totalInterviewsCompleted: number;
  currentStreak: number;
  longestStreak: number;
  totalStudyMinutes: number;
  grammarAccuracyAvg: number;
}

export interface UserPreferences {
  theme: "light" | "dark" | "system";
  language: "en" | "am";
  emailNotifications: boolean;
  weeklyReport: boolean;
}
