import { ReadingTest, ListeningTest, WritingTask, SpeakingPart } from "../types";

export const mockReadingTest: ReadingTest = {
  id: "rt-001",
  title: "Academic Reading Practice Test 1",
  passages: [
    {
      id: "rp-1",
      title: "The Life and Work of Marie Curie",
      content: [
        "Marie Curie is probably the most famous woman scientist who has ever lived. Born Maria Sklodowska in Poland in 1867, she is famous for her work on radioactivity, and was twice a winner of the Nobel Prize. With her husband, Pierre Curie, and Henri Becquerel, she was awarded the 1903 Nobel Prize for Physics, and was then sole winner of the 1911 Nobel Prize for Chemistry.",
        "From childhood, Marie was remarkable for her prodigious memory, and at the age of 16 won a gold medal on completion of her secondary education. Because her father lost his savings through bad investment, she then had to take work as a teacher. From her earnings she was able to finance her sister Bronia's medical studies in Paris, on the understanding that Bronia would, in turn, later help her to get an education.",
        "In 1891 this promise was fulfilled and Marie went to Paris and began to study at the Sorbonne (the University of Paris). She often worked far into the night and lived on little more than bread and butter and tea. She came first in the examination in the physical sciences in 1893, and in 1894 was placed second in the examination in mathematical sciences."
      ],
      questions: [
        {
          id: "q1",
          type: "tfng",
          text: "Marie Curie's husband was a joint winner of both Marie's Nobel Prizes.",
          options: ["TRUE", "FALSE", "NOT GIVEN"],
          answer: "FALSE"
        },
        {
          id: "q2",
          type: "tfng",
          text: "Marie became interested in science when she was a child.",
          options: ["TRUE", "FALSE", "NOT GIVEN"],
          answer: "NOT GIVEN"
        },
        {
          id: "q3",
          type: "tfng",
          text: "Marie was able to attend the Sorbonne because of her sister's financial contribution.",
          options: ["TRUE", "FALSE", "NOT GIVEN"],
          answer: "TRUE"
        }
      ]
    }
  ]
};

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
          type: "fill-in-blank",
          text: "Date of arrival:",
          answer: "15th August"
        },
        {
          id: "lq2",
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