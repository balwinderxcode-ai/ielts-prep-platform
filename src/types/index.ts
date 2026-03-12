export type QuestionType = "tfng" | "ynng" | "mcq" | "fill-in-blank" | "matching-headings";

export interface Question {
  id: string;
  number: number;
  type: QuestionType; // Retained for backwards compatibility in UI loops if needed, though group type handles it
  text: string;
  options?: string[]; // For MCQ or Matching
  answer: string;
}

export interface QuestionGroup {
  id: string;
  range: string;
  instruction: string;
  type: QuestionType;
  questions: Question[];
}

export interface Paragraph {
  label?: string; // e.g., "A", "B"
  text: string;
}

export interface Passage {
  id: string;
  title: string;
  content: Paragraph[];
  questionGroups: QuestionGroup[];
}

export interface ReadingTest {
  id: string;
  title: string;
  timeLimitSeconds: number;
  passages: Passage[];
}

export interface ListeningSection {
  id: string;
  title: string;
  audioUrl: string;
  questionGroups: QuestionGroup[];
}

export interface ListeningTest {
  id: string;
  title: string;
  timeLimitSeconds: number;
  sections: ListeningSection[];
}

export interface WritingTask {
  id: string;
  type: "task1" | "task2";
  prompt: string;
  minWords: number;
  imageUrl?: string;
}

export interface SpeakingPart {
  id: string;
  part: 1 | 2 | 3;
  title: string;
  instructions: string;
  prompts: string[];
}

export interface UserProgress {
  readingScore: number;
  readingCompleted: number;
  listeningScore: number;
  listeningCompleted: number;
  writingCompleted: number;
  speakingCompleted: number;
}
