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
        prompt: "The line graph below shows the changes in the number of international travelers visiting a particular country between 1990 and 2020.",
        minWords: 150,
        imageUrl: "https://placehold.co/600x400/blue/white?text=Line+Graph+of+Travelers+1990-2020"
      },
      {
        id: "wt1-a-2",
        type: "task2",
        genre: "academic",
        title: "Task 2: Essay",
        prompt: "Some people believe that the best way to reduce crime is to increase the length of prison sentences. Others, however, believe that there are better alternative ways of reducing crime.",
        minWords: 250
      }
    ]
  },
  {
    id: "wt-academic-02",
    title: "IELTS Academic Writing Practice 2",
    genre: "academic",
    timeLimitSeconds: 3600,
    tasks: [
      {
        id: "wt2-a-1",
        type: "task1",
        genre: "academic",
        title: "Task 1: Table Analysis",
        prompt: "The table below shows the percentage of people who used different types of transport to travel to work in a particular city in 2000 and 2010.",
        minWords: 150
      },
      {
        id: "wt2-a-2",
        type: "task2",
        genre: "academic",
        title: "Task 2: Essay",
        prompt: "In many countries, children are becoming overweight and unhealthy. Some people think that the government should increase the price of unhealthy food to solve this problem.",
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
        prompt: "You recently stayed at a hotel and were unhappy with the service you received. Write a letter to the hotel manager.",
        minWords: 150
      }
    ]
  }
];
