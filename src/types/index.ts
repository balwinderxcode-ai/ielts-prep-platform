export type QuestionType = "tfng" | "ynng" | "mcq" | "fill-in-blank" | "matching-headings";

export interface Question {
  id: string;
  number: number;
  type: QuestionType;
  text: string;
  options?: string[];
  answer: string;
}

export interface Passage {
  id: string;
  title: string;
  content: string[];
  questions: Question[];
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
  transcript: string;
  questions: Question[];
}

export interface ListeningTest {
  id: string;
  title: string;
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
