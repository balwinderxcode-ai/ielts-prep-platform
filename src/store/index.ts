import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserProgress } from "../types";

interface TestStore {
  progress: UserProgress;
  addReadingScore: (score: number, maxScore: number) => void;
  addListeningScore: (score: number, maxScore: number) => void;
  completeWritingTask: () => void;
  completeSpeakingTask: () => void;
  resetProgress: () => void;
}

const initialProgress: UserProgress = {
  readingScore: 0,
  readingCompleted: 0,
  listeningScore: 0,
  listeningCompleted: 0,
  writingCompleted: 0,
  speakingCompleted: 0,
};

export const useTestStore = create<TestStore>()(
  persist(
    (set) => ({
      progress: initialProgress,
      
      addReadingScore: (score) =>
        set((state) => ({
          progress: {
            ...state.progress,
            readingScore: state.progress.readingScore + score,
            readingCompleted: state.progress.readingCompleted + 1,
          },
        })),
        
      addListeningScore: (score) =>
        set((state) => ({
          progress: {
            ...state.progress,
            listeningScore: state.progress.listeningScore + score,
            listeningCompleted: state.progress.listeningCompleted + 1,
          },
        })),
        
      completeWritingTask: () =>
        set((state) => ({
          progress: {
            ...state.progress,
            writingCompleted: state.progress.writingCompleted + 1,
          },
        })),
        
      completeSpeakingTask: () =>
        set((state) => ({
          progress: {
            ...state.progress,
            speakingCompleted: state.progress.speakingCompleted + 1,
          },
        })),
        
      resetProgress: () => set({ progress: initialProgress }),
    }),
    {
      name: "ielts-progress-storage",
    }
  )
);