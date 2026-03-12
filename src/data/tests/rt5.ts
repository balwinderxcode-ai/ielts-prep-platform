import { ReadingTest } from "../../types";

export const readingTest5: ReadingTest = {
  id: "rt-academic-05",
  title: "IELTS Academic Reading Practice Test 5",
  timeLimitSeconds: 3600,
  passages: [
    {
      id: "t5-p1",
      title: "Passage 1: The Critical Role of Bees in Ecosystems",
      content: [
        { text: "Bees are often overlooked, yet they are vital for the health of our planet. As primary pollinators, they are responsible for one-third of the food we eat. Without bees, many of our favorite fruits, vegetables, and nuts would disappear from our tables." },
        { text: "However, bee populations are in steep decline globally. This is due to a combination of factors, including pesticide use, habitat loss, and climate change. Scientists warn that if we do not act to protect bees, the stability of our entire food system could be at risk." }
      ],
      questionGroups: [
        {
          id: "t5-g1", range: "Questions 1-13", instruction: "Complete the notes.", type: "fill-in-blank",
          questions: Array.from({ length: 13 }).map((_, i) => ({
            id: `t5-q${i + 1}`, number: i + 1, type: "fill-in-blank" as const,
            text: `Bees are primary ________. (Question ${i + 1})`, answer: "pollinators"
          }))
        }
      ]
    },
    {
      id: "t5-p2",
      title: "Passage 2: Gutenberg and the Printing Press",
      content: [
        { text: "The invention of the printing press by Johannes Gutenberg in the 15th century was a pivotal moment in human history. Before the press, books were hand-copied and were extremely expensive, meaning literacy was confined to the elite." },
        { text: "Gutenberg's press used movable type, which allowed for the rapid and affordable mass production of books. This led to an explosion in literacy and the spread of new ideas, fueling the Renaissance and the Scientific Revolution." }
      ],
      questionGroups: [
        {
          id: "t5-g2", range: "Questions 14-26", instruction: "MCQ.", type: "mcq",
          questions: Array.from({ length: 13 }).map((_, i) => ({
            id: `t5-q${i + 14}`, number: i + 14, type: "mcq" as const,
            text: `What was a result of the printing press? (Question ${i + 14})`,
            options: ["A. Higher prices", "B. Explosion in literacy", "C. Less books"],
            answer: "B. Explosion in literacy"
          }))
        }
      ]
    },
    {
      id: "t5-p3",
      title: "Passage 3: The Threat of Microplastics",
      content: [
        { text: "Microplastics are tiny plastic particles less than five millimeters in length. They are now found everywhere, from the deepest ocean trenches to the peaks of the highest mountains. Because they are so small, they are easily ingested by marine life and enter the human food chain." },
        { text: "The long-term health effects of microplastics are still being studied, but there is growing concern about their chemical toxicity. Many plastics contain additives that can disrupt hormonal systems in both animals and humans." }
      ],
      questionGroups: [
        {
          id: "t5-g3", range: "Questions 27-40", instruction: "TFNG.", type: "tfng",
          questions: Array.from({ length: 14 }).map((_, i) => ({
            id: `t5-q${i + 27}`, number: i + 27, type: "tfng" as const,
            text: `Microplastics are larger than five millimeters. (Question ${i + 27})`,
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: "FALSE"
          }))
        }
      ]
    }
  ]
};
