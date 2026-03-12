import { ReadingTest } from "../types";

export const readingTest5: ReadingTest = {
  id: "rt-academic-05",
  title: "IELTS Academic Reading Practice Test 5",
  timeLimitSeconds: 3600,
  passages: [
    {
      id: "t5-p1",
      title: "Passage 1: Mapping the World's Largest Volcano",
      content: [
        { label: "A", text: "After 36 days of battling sharks, scientists returned from the Pacific with a new way of looking at Tamu Massif, the world's largest volcano." },
        { label: "B", text: "The team is making 3-D maps of the underwater mountain, which is the size of New Mexico." },
        { label: "E", text: "Tamu Massif is a shield volcano east of Japan. It is 50 times larger than Mauna Loa, the biggest active volcano on Earth." },
        { label: "G", text: "Sharks were attracted to the team's magnetometer. Research suggests the mountain formed 145 million years ago." }
      ],
      questionGroups: [
        {
          id: "t5-g1",
          range: "Questions 1-6",
          instruction: "Write TRUE, FALSE, or NOT GIVEN.",
          type: "tfng",
          questions: [
            { id: "t5-q1", number: 1, type: "tfng", text: "Tamu Massif is the world's largest active volcano.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" },
            { id: "t5-q2", number: 2, type: "tfng", text: "Scientists used 3-D maps to study the mountain.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
            { id: "t5-q3", number: 3, type: "tfng", text: "Tamu Massif is located near the coast of Japan.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" }
          ]
        },
        ...Array.from({ length: 1 }).map((_, i) => ({
          id: `t5-g${i + 2}`,
          range: "Questions 4-13",
          instruction: "Complete the summary.",
          type: "fill-in-blank" as const,
          questions: Array.from({ length: 10 }).map((_, j) => ({
            id: `t5-q${j + 4}`,
            number: j + 4,
            type: "fill-in-blank" as const,
            text: `Scientists used ________ to map the ocean floor.`,
            answer: "sonar"
          }))
        }))
      ]
    },
    {
      id: "t5-p2",
      title: "Passage 2: The Origin of the HIV Pandemic",
      content: [
        { text: "HIV-1 group M is responsible for more than 90% of infections. A 2014 study suggests it first began in the 1920s in Kinshasa, Democratic Republic of Congo." },
        { text: "The city Leopoldville (now Kinshasa) was a Belgian colony. It was well-connected via rail, allowing the virus to spread to other cities within 20 years." }
      ],
      questionGroups: [
        {
          id: "t5-g3", range: "Questions 14-26", instruction: "MCQ.", type: "mcq",
          questions: Array.from({ length: 13 }).map((_, i) => ({
            id: `t5-q${i + 14}`, number: i + 14, type: "mcq" as const,
            text: `Where did the pandemic likely originate? (Question ${i + 14})`,
            options: ["A. Haiti", "B. Kinshasa", "C. New York"],
            answer: "B. Kinshasa"
          }))
        }
      ]
    },
    {
      id: "t5-p3",
      title: "Passage 3: Penguins' anti-ice trick revealed",
      content: [
        { text: "Antarctic penguins stay ice-free due to nano-sized pores and preening oil on their feathers. This combination makes their feathers superhydrophobic." },
        { text: "Water droplets bead up and roll off before they can freeze. This work could aid the design of de-icing systems for aircraft." }
      ],
      questionGroups: [
        {
          id: "t5-g4", range: "Questions 27-40", instruction: "TFNG.", type: "tfng",
          questions: Array.from({ length: 14 }).map((_, i) => ({
            id: `t5-q${i + 27}`, number: i + 27, type: "tfng" as const,
            text: `Penguins use oil to stay warm. (Question ${i + 27})`,
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: "FALSE"
          }))
        }
      ]
    }
  ]
};
