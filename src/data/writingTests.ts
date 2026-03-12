import { WritingTest } from "../types";

export const writingTests: WritingTest[] = [
  {
    id: "wt-academic-01",
    title: "IELTS Academic Writing Practice 1",
    genre: "academic",
    timeLimitSeconds: 3600,
    tasks: [
      {
        id: "wt1-a-1",
        type: "task1",
        genre: "academic",
        title: "Task 1: Graph Analysis",
        prompt: "The line graph below shows the changes in the number of international travelers visiting a particular country between 1990 and 2020.\n\nSummarize the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
        minWords: 150,
        imageUrl: "https://placehold.co/600x400/blue/white?text=Line+Graph+of+Travelers+1990-2020"
      },
      {
        id: "wt1-a-2",
        type: "task2",
        genre: "academic",
        title: "Task 2: Essay",
        prompt: "Some people believe that the best way to reduce crime is to increase the length of prison sentences. Others, however, believe that there are better alternative ways of reducing crime.\n\nDiscuss both views and give your own opinion.\n\nWrite at least 250 words.",
        minWords: 250
      }
    ]
  },
  {
    id: "wt-general-01",
    title: "IELTS General Writing Practice 1",
    genre: "general",
    timeLimitSeconds: 3600,
    tasks: [
      {
        id: "wt1-g-1",
        type: "task1",
        genre: "general",
        title: "Task 1: Formal Letter",
        prompt: "You recently stayed at a hotel and were unhappy with the service you received.\n\nWrite a letter to the hotel manager. In your letter:\n- give details of your stay\n- explain what went wrong\n- say what you want the manager to do about it\n\nWrite at least 150 words.",
        minWords: 150
      },
      {
        id: "wt1-g-2",
        type: "task2",
        genre: "general",
        title: "Task 2: Essay",
        prompt: "Nowadays many people use the internet to find information about their health. Some people think this is a positive development, while others think it can be dangerous.\n\nDiscuss both views and give your own opinion.\n\nWrite at least 250 words.",
        minWords: 250
      }
    ]
  }
];
