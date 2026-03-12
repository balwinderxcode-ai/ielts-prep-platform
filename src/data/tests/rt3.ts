import { ReadingTest } from "../../types";

export const readingTest3: ReadingTest = {
  id: "rt-academic-03",
  title: "IELTS Academic Reading Practice Test 3",
  timeLimitSeconds: 3600,
  passages: [
    {
      id: "t3-p1",
      title: "Passage 1: The History of Glass Making",
      content: [
        { text: "Glass making is one of the oldest human technologies, dating back to at least 3500 BC in Mesopotamia. However, the first glass wasn't used for windows or drinking vessels; it was primarily used for jewelry and small figurines. The process involved melting sand, soda ash, and lime at extremely high temperatures. Early glass was often opaque and green or blue due to impurities in the sand." },
        { text: "The Romans revolutionized glass production around the 1st century BC with the invention of glassblowing. This technique involved using a hollow pipe to blow air into a molten 'blob' of glass, allowing for the creation of much thinner and more complex shapes. This made glass affordable for ordinary citizens for the first time, and it began to be used for bottles, jars, and even early window panes." },
        { text: "In the medieval period, Venice became the center of the world's glass industry. Venetian glassmakers developed 'cristallo,' a nearly colorless glass that was highly prized across Europe. To protect their secrets, the Republic of Venice forced all glassmakers to live and work on the island of Murano. Disclosing trade secrets was punishable by death." }
      ],
      questionGroups: [
        {
          id: "t3-g1",
          range: "Questions 1-7",
          instruction: "Do the following statements agree with the information in Passage 1?\nWrite TRUE, FALSE, or NOT GIVEN.",
          type: "tfng",
          questions: [
            { id: "t3-q1", number: 1, type: "tfng", text: "The earliest glass was used for construction purposes.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" },
            { id: "t3-q2", number: 2, type: "tfng", text: "Early glass was often colored due to sand impurities.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
            { id: "t3-q3", number: 3, type: "tfng", text: "The Romans were the first to invent the process of melting sand to make glass.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" },
            { id: "t3-q4", number: 4, type: "tfng", text: "Glassblowing made glass products more expensive.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" },
            { id: "t3-q5", number: 5, type: "tfng", text: "The island of Murano was chosen for its proximity to raw materials.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "NOT GIVEN" },
            { id: "t3-q6", number: 6, type: "tfng", text: "Glassmakers in Venice could be executed for revealing production secrets.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
            { id: "t3-q7", number: 7, type: "tfng", text: "Venetian cristallo was a type of opaque, decorated glass.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" }
          ]
        },
        {
          id: "t3-g2",
          range: "Questions 8-13",
          instruction: "Complete the notes below. Write NO MORE THAN TWO WORDS for each answer.",
          type: "fill-in-blank",
          questions: [
            { id: "t3-q8", number: 8, type: "fill-in-blank", text: "The earliest known glass was found in ________.", answer: "Mesopotamia" },
            { id: "t3-q9", number: 9, type: "fill-in-blank", text: "Roman glassblowers used a ________ pipe to shape molten glass.", answer: "hollow" },
            { id: "t3-q10", number: 10, type: "fill-in-blank", text: "Venetian glassmakers were renowned for creating ________ glass.", answer: "colorless" },
            ...Array.from({ length: 3 }).map((_, i) => ({
              id: `t3-q${i + 11}`,
              number: i + 11,
              type: "fill-in-blank" as const,
              text: `Question ${i + 11} regarding glass history placeholder.`,
              answer: "placeholder"
            }))
          ]
        }
      ]
    },
    {
      id: "t3-p2",
      title: "Passage 2: The Social Impact of Remote Work",
      content: [
        { label: "A", text: "The rise of remote work has fundamentally altered the relationship between employees and the traditional office space. While the trend was already underway due to digital advancements, global events accelerated its adoption. Today, millions of workers spend their days performing tasks from their homes rather than in a centralized corporate headquarters." },
        { label: "B", text: "Proponents of remote work highlight several benefits. The most cited is the elimination of the commute, which saves employees significant time and reduces stress. Furthermore, flexibility in working hours can lead to a better work-life balance, allowing individuals to manage family responsibilities more effectively. Companies also benefit from reduced overhead costs, such as rent and utilities." },
        { label: "C", text: "However, there are significant psychological drawbacks. Many remote workers report feelings of isolation and a blurring of the boundaries between professional and personal life. Without the spontaneous social interactions of an office, team cohesion can suffer. There is also a risk of 'proximity bias,' where managers inadvertently favor employees who are physically present over those working remotely." }
      ],
      questionGroups: [
        {
          id: "t3-g3",
          range: "Questions 14-20",
          instruction: "Match the correct heading to paragraphs A-C.",
          type: "matching-headings",
          questions: [
            { id: "t3-q14", number: 14, type: "matching-headings", text: "The advantages of a flexible workplace", options: ["A", "B", "C"], answer: "B" },
            { id: "t3-q15", number: 15, type: "matching-headings", text: "The shifting nature of the modern office", options: ["A", "B", "C"], answer: "A" },
            { id: "t3-q16", number: 16, type: "matching-headings", text: "The hidden challenges of working alone", options: ["A", "B", "C"], answer: "C" },
            ...Array.from({ length: 4 }).map((_, i) => ({
              id: `t3-q${i + 17}`,
              number: i + 17,
              type: "mcq" as const,
              text: `MCQ Question ${i + 17} regarding remote work.`,
              options: ["A", "B", "C", "D"],
              answer: "A"
            }))
          ]
        },
        {
          id: "t3-g4",
          range: "Questions 21-26",
          instruction: "Write YES, NO, or NOT GIVEN.",
          type: "ynng",
          questions: [
            { id: "t3-q21", number: 21, type: "ynng", text: "Remote work was exclusively caused by the 2020 pandemic.", options: ["YES", "NO", "NOT GIVEN"], answer: "NO" },
            { id: "t3-q22", number: 22, type: "ynng", text: "Commuting is a major source of stress for office workers.", options: ["YES", "NO", "NOT GIVEN"], answer: "YES" },
            ...Array.from({ length: 4 }).map((_, i) => ({
              id: `t3-q${i + 23}`,
              number: i + 23,
              type: "ynng" as const,
              text: `YNNG Question ${i + 23} placeholder.`,
              options: ["YES", "NO", "NOT GIVEN"],
              answer: "YES"
            }))
          ]
        }
      ]
    },
    {
      id: "t3-p3",
      title: "Passage 3: The Ethics of Deep-Sea Mining",
      content: [
        { text: "As the demand for minerals like cobalt and nickel grows to fuel the green energy transition, mining companies are looking to the deepest parts of the ocean. The seabed is rich in polymetallic nodules—potato-sized rocks containing high concentrations of rare metals. However, the environmental impact of disturbing these ancient ecosystems is largely unknown." },
        { text: "Scientists warn that deep-sea mining could cause irreversible damage. Mining machinery would stir up massive sediment plumes that could suffocate marine life for hundreds of kilometers. Furthermore, the noise and light pollution would disrupt the communication of deep-sea species that have evolved in total darkness and silence." }
      ],
      questionGroups: [
        {
          id: "t3-g5",
          range: "Questions 27-40",
          instruction: "Complete the summary using NO MORE THAN THREE WORDS.",
          type: "fill-in-blank",
          questions: Array.from({ length: 14 }).map((_, i) => ({
            id: `t3-q${i + 27}`,
            number: i + 27,
            type: "fill-in-blank" as const,
            text: `Deep-sea mining target ________ nodules which are rich in minerals. (Question ${i + 27})`,
            answer: "polymetallic"
          }))
        }
      ]
    }
  ]
};
