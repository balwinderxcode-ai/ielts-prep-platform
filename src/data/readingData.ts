import { ReadingTest } from "../types";

export const mockReadingData: ReadingTest = {
  id: "rt-01",
  title: "Academic Reading Test 1",
  timeLimitSeconds: 3600, // 60 mins
  passages: [
    {
      id: "p1",
      title: "Passage 1: The Life and Work of Marie Curie",
      content: [
        "Marie Curie is probably the most famous woman scientist who has ever lived. Born Maria Sklodowska in Poland in 1867, she is famous for her work on radioactivity, and was twice a winner of the Nobel Prize. With her husband, Pierre Curie, and Henri Becquerel, she was awarded the 1903 Nobel Prize for Physics, and was then sole winner of the 1911 Nobel Prize for Chemistry.",
        "From childhood, Marie was remarkable for her prodigious memory, and at the age of 16 won a gold medal on completion of her secondary education. Because her father lost his savings through bad investment, she then had to take work as a teacher.",
        "From her earnings she was able to finance her sister Bronia's medical studies in Paris, on the understanding that Bronia would, in turn, later help her to get an education."
      ],
      questions: [
        { id: "q1", number: 1, type: "tfng", text: "Marie Curie's husband was a joint winner of both Marie's Nobel Prizes.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" },
        { id: "q2", number: 2, type: "tfng", text: "Marie became interested in science when she was a child.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "NOT GIVEN" },
        { id: "q3", number: 3, type: "tfng", text: "Marie was able to attend the Sorbonne because of her sister's financial contribution.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
        { id: "q4", number: 4, type: "tfng", text: "Marie Curie won the Nobel Prize in Physics twice.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" },
        { id: "q5", number: 5, type: "fill-in-blank", text: "Marie Curie's birth name was ________ Sklodowska.", answer: "Maria" },
        { id: "q6", number: 6, type: "fill-in-blank", text: "She worked as a ________ after her father lost his savings.", answer: "teacher" },
        { id: "q7", number: 7, type: "fill-in-blank", text: "Marie financed her sister ________ medical studies.", answer: "Bronia's" },
        ...Array.from({ length: 6 }).map((_, i) => ({
          id: `q${i + 8}`,
          number: i + 8,
          type: "mcq" as const,
          text: `Placeholder Multiple Choice Question ${i + 8}`,
          options: ["A", "B", "C", "D"],
          answer: "A"
        }))
      ]
    },
    {
      id: "p2",
      title: "Passage 2: The Evolution of the Internet",
      content: [
        "The Internet has revolutionized the computer and communications world like nothing before. The invention of the telegraph, telephone, radio, and computer set the stage for this unprecedented integration of capabilities.",
        "The Internet is at once a world-wide broadcasting capability, a mechanism for information dissemination, and a medium for collaboration and interaction between individuals and their computers without regard for geographic location."
      ],
      questions: Array.from({ length: 13 }).map((_, i) => ({
        id: `q${i + 14}`,
        number: i + 14,
        type: "ynng" as const,
        text: `The internet evolved rapidly during the 20th century. (Question ${i + 14})`,
        options: ["YES", "NO", "NOT GIVEN"],
        answer: "YES"
      }))
    },
    {
      id: "p3",
      title: "Passage 3: Artificial Intelligence in Modern Society",
      content: [
        "Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by humans or animals. Leading AI textbooks define the field as the study of intelligent agents.",
        "Any system that perceives its environment and takes actions that maximize its chance of achieving its goals is an intelligent agent."
      ],
      questions: Array.from({ length: 14 }).map((_, i) => ({
        id: `q${i + 27}`,
        number: i + 27,
        type: "fill-in-blank" as const,
        text: `Complete the sentence regarding AI concept ${i + 27}: The definition of AI involves intelligent ________.`,
        answer: "agents"
      }))
    }
  ]
};
