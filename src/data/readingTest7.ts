import { ReadingTest } from "../types";

export const readingTest7: ReadingTest = {
  id: "rt-academic-07",
  title: "IELTS Academic Reading Practice Test 7",
  timeLimitSeconds: 3600,
  passages: [
    {
      id: "t7-p1",
      title: "Passage 1: How bacteria invented gene editing",
      content: [
        { text: "Gene editing using CRISPR-Cas is relatively fast, cheap, and easy. But it wasn't invented in a lab; it actually evolved in single-celled microbes as a bacterial immune system." },
        { text: "When a microbe is attacked by a virus, it binds to viral DNA and inserts a chunk into its own genome as a 'spacer'. This allows it to recognize and attack the virus later." }
      ],
      questionGroups: [
        {
          id: "t7-g1", range: "Questions 1-13", instruction: "TFNG.", type: "tfng",
          questions: Array.from({ length: 13 }).map((_, i) => ({
            id: `t7-q${i + 1}`, number: i + 1, type: "tfng" as const,
            text: `CRISPR was invented in a laboratory. (Question ${i + 1})`,
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: "FALSE"
          }))
        }
      ]
    }
  ]
};
