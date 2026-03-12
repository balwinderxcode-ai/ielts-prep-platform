import { ReadingTest } from "../types";

export const readingTest6: ReadingTest = {
  id: "rt-academic-06",
  title: "IELTS Academic Reading Practice Test 6",
  timeLimitSeconds: 3600,
  passages: [
    {
      id: "t6-p1",
      title: "Passage 1: Why are Americans so angry?",
      content: [
        { text: "Polls show American voters are angry, which explains the success of non-mainstream candidates. A CNN poll suggests 69% of Americans are angry about the political system." },
        { text: "Reasons include a stagnant economy (stagnant household incomes for 15 years), immigration concerns, and distrust of Washington." }
      ],
      questionGroups: [
        {
          id: "t6-g1", range: "Questions 1-13", instruction: "Fill blank.", type: "fill-in-blank",
          questions: Array.from({ length: 13 }).map((_, i) => ({
            id: `t6-q${i + 1}`, number: i + 1, type: "fill-in-blank" as const,
            text: `Household incomes have been ________ for 15 years. (Question ${i + 1})`,
            answer: "stagnant"
          }))
        }
      ]
    },
    {
      id: "t6-p2",
      title: "Passage 2: Do e-cigarettes make it harder to stop smoking?",
      content: [
        { label: "A", text: "People trying to quit often use e-cigarettes. However, a recent meta-analysis suggests users are 28% less likely to quit than non-users." },
        { label: "C", text: "Critics like Ann McNeill argue the study is unscientific and inaccurate, masking the benefits of vaping for quitting." }
      ],
      questionGroups: [
        {
          id: "t6-g2", range: "Questions 14-26", instruction: "Matching.", type: "matching-headings",
          questions: Array.from({ length: 13 }).map((_, i) => ({
            id: `t6-q${i + 14}`, number: i + 14, type: "matching-headings" as const,
            text: `Information regarding critics of the study. (Question ${i + 14})`,
            options: ["A", "B", "C", "D", "E"],
            answer: "C"
          }))
        }
      ]
    },
    {
      id: "t6-p3",
      title: "Passage 3: The battle over the gender price gap",
      content: [
        { text: "Retailers often charge women more for similar products, known as the 'pink tax'. Investigation claimed women pay 37% more for clothes and beauty products." },
        { text: "Retailers argue production costs differ, but psychologists suggest women may be more willing to pay more for certain items." }
      ],
      questionGroups: [
        {
          id: "t6-g3", range: "Questions 27-40", instruction: "TFNG.", type: "tfng",
          questions: Array.from({ length: 14 }).map((_, i) => ({
            id: `t6-q${i + 27}`, number: i + 27, type: "tfng" as const,
            text: `Women pay less for clothes than men. (Question ${i + 27})`,
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: "FALSE"
          }))
        }
      ]
    }
  ]
};
