export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  condition: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  { id: "first-lesson", title: "First Step", description: "Complete your first lesson", icon: "🎯", condition: "lessons_completed >= 1" },
  { id: "streak-7", title: "Week Warrior", description: "Maintain a 7-day streak", icon: "🔥", condition: "streak >= 7" },
  { id: "streak-30", title: "Monthly Master", description: "30-day study streak", icon: "⚡", condition: "streak >= 30" },
  { id: "streak-100", title: "Century Champion", description: "100-day study streak", icon: "🏆", condition: "streak >= 100" },
  { id: "grammar-95", title: "Grammar Guru", description: "Achieve 95+ clarity score", icon: "✍️", condition: "clarity_score >= 95" },
  { id: "interviews-10", title: "Interview Pro", description: "Complete 10 mock interviews", icon: "💼", condition: "interviews_completed >= 10" },
  { id: "pronunciation-90", title: "Clear Speaker", description: "Score 90+ in pronunciation", icon: "🎤", condition: "pronunciation_score >= 90" },
  { id: "emails-5", title: "Email Expert", description: "Draft 5 professional emails", icon: "📧", condition: "emails_drafted >= 5" },
  { id: "lessons-50", title: "Dedicated Learner", description: "Complete 50 lessons", icon: "📚", condition: "lessons_completed >= 50" },
];
