export interface LearningPath {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedHours: number;
  lessonsCount: number;
  enrolled: boolean;
  progress: number;
}

export interface Lesson {
  id: string;
  pathId: string;
  title: string;
  content: string;
  order: number;
  estimatedMinutes: number;
  completed: boolean;
  quiz?: Quiz;
}

export interface Quiz {
  id: string;
  lessonId: string;
  questions: QuizQuestion[];
  passingScore: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
