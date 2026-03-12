import { ReadingTest } from "../types";

export const readingTest8: ReadingTest = {
  id: "rt-academic-08",
  title: "IELTS Academic Reading Practice Test 8",
  timeLimitSeconds: 3600,
  passages: [
    {
      id: "t8-p1",
      title: "Passage 1: Harsh marks 'put pupils off languages'",
      content: [
        { label: "A", text: "Harsh and inconsistent marking is putting pupils in England off studying languages beyond age 14, a report says. The dawn of more rigorous GCSEs will further reduce interest in languages." },
        { label: "B", text: "Exams watchdog Ofqual said last year's languages results were 'very stable'. From September 2016, new GCSE and A-level modern language syllabuses will be taught." },
        { label: "H", text: "Mark Herbert, head of schools programmes at the British Council, said: 'The country's current shortage of language skills is estimated to be costing the economy tens of billions in missed trade and business opportunities every year.'" }
      ],
      questionGroups: [
        {
          id: "t8-g1", range: "Questions 1-6", instruction: "TFNG.", type: "tfng",
          questions: Array.from({ length: 6 }).map((_, i) => ({
            id: `t8-q${i + 1}`, number: i + 1, type: "tfng" as const,
            text: `Harsh marking is a barrier to language learning. (Question ${i + 1})`,
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: "TRUE"
          }))
        }
      ]
    },
    {
      id: "t8-p2",
      title: "Passage 2: Making sense of scent",
      content: [
        { text: "With every whiff you take as you walk by a bakery, a cloud of chemicals comes swirling up your nose. Identifying the smell as freshly baked bread is a complicated process." },
        { text: "In a survey of 7,000 young people, half between age 16 and 30 said they would rather lose their sense of smell than give up technology like laptops or cell phones." },
        { text: "Humans can detect far more than 10,000 smells; recent data suggests we can detect at least one trillion different smells." }
      ],
      questionGroups: [
        {
          id: "t8-g2", range: "Questions 14-20", instruction: "Fill blank.", type: "fill-in-blank",
          questions: Array.from({ length: 7 }).map((_, i) => ({
            id: `t8-q${i + 14}`, number: i + 14, type: "fill-in-blank" as const,
            text: `Humans can detect at least one ________ different smells. (Question ${i + 14})`,
            answer: "trillion"
          }))
        }
      ]
    },
    {
      id: "t8-p3",
      title: "Passage 3: Cognitive dissonance",
      content: [
        { label: "A", text: "Darwin said, 'This not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.'" },
        { label: "D", text: "Leon Festinger coined the term 'cognitive dissonance' to describe the uncomfortable tension we feel when we experience conflicting thoughts or beliefs." }
      ],
      questionGroups: [
        {
          id: "t8-g3", range: "Questions 27-40", instruction: "MCQ.", type: "mcq",
          questions: Array.from({ length: 14 }).map((_, i) => ({
            id: `t8-q${i + 27}`, number: i + 27, type: "mcq" as const,
            text: `What does the term 'cognitive dissonance' describe? (Question ${i + 27})`,
            options: ["A. Memory loss", "B. Uncomfortable tension from conflicting beliefs", "C. Survival of the fittest", "D. Scientific discovery"],
            answer: "B. Uncomfortable tension from conflicting beliefs"
          }))
        }
      ]
    }
  ]
};
