import { ReadingTest } from "../../types";

export const readingTest4: ReadingTest = {
  id: "rt-academic-04",
  title: "IELTS Academic Reading Practice Test 4",
  timeLimitSeconds: 3600,
  passages: [
    {
      id: "t4-p1",
      title: "Passage 1: The Therapeutic Power of Music",
      content: [
        { text: "Music has been used as a healing tool for millennia. Ancient Greeks believed that music could heal the body and the soul. Today, music therapy is a recognized clinical profession that uses musical interventions to improve the physical and emotional health of patients." },
        { text: "Recent neurological studies have shown that listening to music releases dopamine, the brain's 'feel-good' neurotransmitter. This can help reduce anxiety and pain. For patients with Alzheimer's, familiar songs can trigger memories that were thought to be lost, allowing them to reconnect with their past and their loved ones." }
      ],
      questionGroups: [
        {
          id: "t4-g1",
          range: "Questions 1-13",
          instruction: "Complete the summary below. Write NO MORE THAN TWO WORDS.",
          type: "fill-in-blank",
          questions: Array.from({ length: 13 }).map((_, i) => ({
            id: `t4-q${i + 1}`,
            number: i + 1,
            type: "fill-in-blank" as const,
            text: `Music triggers the release of ________ in the brain. (Question ${i + 1})`,
            answer: "dopamine"
          }))
        }
      ]
    },
    {
      id: "t4-p2",
      title: "Passage 2: Engineering Marvels of Ancient Rome",
      content: [
        { label: "A", text: "Ancient Roman architects were masters of infrastructure. Their use of the arch and the development of waterproof concrete allowed them to build massive structures like the Colosseum and the Pantheon, many of which still stand today." },
        { label: "B", text: "Aqueducts were another essential Roman innovation. These long channels used gravity to transport fresh water from distant springs into cities, providing water for public baths, fountains, and private homes. This allowed Roman cities to grow much larger than their contemporaries." }
      ],
      questionGroups: [
        {
          id: "t4-g2",
          range: "Questions 14-26",
          instruction: "Match headings A-B.",
          type: "matching-headings",
          questions: [
            { id: "t4-q14", number: 14, type: "matching-headings", text: "Bringing water to the masses", options: ["A", "B"], answer: "B" },
            { id: "t4-q15", number: 15, type: "matching-headings", text: "Building for eternity", options: ["A", "B"], answer: "A" },
            ...Array.from({ length: 11 }).map((_, i) => ({
              id: `t4-q${i + 16}`,
              number: i + 16,
              type: "fill-in-blank" as const,
              text: `Romans developed ________ concrete. (Question ${i + 16})`,
              answer: "waterproof"
            }))
          ]
        }
      ]
    },
    {
      id: "t4-p3",
      title: "Passage 3: The Future of Agriculture: Vertical Farming",
      content: [
        { text: "As the global population grows and arable land becomes scarce, vertical farming offers a potential solution. This method involves growing crops in stacked layers in controlled indoor environments, often using hydroponics or aeroponics instead of soil." },
        { text: "The benefits are numerous. Vertical farms use up to 95% less water than traditional farms and eliminate the need for pesticides. Furthermore, by placing these farms inside cities, the 'food miles' required to transport produce are drastically reduced, ensuring fresher food and a lower carbon footprint." }
      ],
      questionGroups: [
        {
          id: "t4-g3",
          range: "Questions 27-40",
          instruction: "Write TRUE, FALSE, or NOT GIVEN.",
          type: "tfng",
          questions: Array.from({ length: 14 }).map((_, i) => ({
            id: `t4-q${i + 27}`,
            number: i + 27,
            type: "tfng" as const,
            text: `Vertical farming requires more water than traditional methods. (Question ${i + 27})`,
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: "FALSE"
          }))
        }
      ]
    }
  ]
};
