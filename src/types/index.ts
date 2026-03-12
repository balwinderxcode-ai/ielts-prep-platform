export type QuestionType = "tfng" | "ynng" | "mcq" | "fill-in-blank" | "matching-headings";

export interface Question {
  id: string;
  number: number; // The actual question number (1-40)
  type: QuestionType;
  text: string;
  options?: string[]; // For MCQ or Matching
  answer: string; // The correct answer
}

export interface Passage {
  id: string;
  title: string;
  content: string[]; // Paragraphs
  questions: Question[];
}

export interface ReadingTest {
  id: string;
  title: string;
  timeLimitSeconds: number; // Usually 3600 (60 mins)
  passages: Passage[]; // Always 3 for IELTS
}

export interface UserProgress {
  readingScore: number;
  readingCompleted: number;
  listeningScore: number;
  listeningCompleted: number;
  writingCompleted: number;
  speakingCompleted: number;
}
