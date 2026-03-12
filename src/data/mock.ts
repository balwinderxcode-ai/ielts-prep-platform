import { ListeningTest, WritingTask, SpeakingPart } from "../types";

export const mockListeningTest: ListeningTest = {
  id: "lt-001",
  title: "Listening Practice Test 1",
  sections: [
    {
      id: "ls-1",
      title: "Section 1: Hotel Booking",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      transcript: "Good morning, you're through to the tourist information office...",
      questions: [
        {
          id: "lq1",
          number: 1,
          type: "fill-in-blank",
          text: "Date of arrival:",
          answer: "15th August"
        },
        {
          id: "lq2",
          number: 2,
          type: "fill-in-blank",
          text: "Room type:",
          answer: "Double"
        }
      ]
    }
  ]
};

export const mockWritingTasks: WritingTask[] = [
  {
    id: "wt-2-001",
    type: "task2",
    prompt: "Some people think that universities should provide graduates with the knowledge and skills needed in the workplace. Others think that the true function of a university should be to give access to knowledge for its own sake, regardless of whether the course is useful to an employer. Discuss both views and give your own opinion.",
    minWords: 250
  }
];

export const mockSpeakingParts: SpeakingPart[] = [
  {
    id: "sp-2-001",
    part: 2,
    title: "Part 2: Long Turn",
    instructions: "Describe a time when you helped someone. You should say:",
    prompts: [
      "who you helped and why",
      "how you helped this person",
      "what the result was",
      "and explain how you felt about helping this person."
    ]
  }
];