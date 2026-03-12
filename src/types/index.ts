export interface Question {
  id: string;
  type: "mcq" | "tfng" | "fill-in-blank" | "matching";
  text: string;
  options?: string[]; // For MCQ or Matching
  answer: string;
}

export interface Passage {
  id: string;
  title: string;
  content: string[]; // Array of paragraphs
  questions: Question[];
}

export interface ReadingTest {
  id: string;
  title: string;
  passages: Passage[];
}

export interface ListeningSection {
  id: string;
  title: string;
  audioUrl: string;
  transcript: string; // Used for fill-in-the-blank text
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
  imageUrl?: string; // For Task 1 charts
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