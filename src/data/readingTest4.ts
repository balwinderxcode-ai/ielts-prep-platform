import { ReadingTest } from "../types";

export const readingTest4: ReadingTest = {
  id: "rt-academic-04",
  title: "IELTS Academic Reading Practice Test 4",
  timeLimitSeconds: 3600,
  passages: [
    {
      id: "t4-p1",
      title: "Passage 1: The potential to sniff out disease",
      content: [
        { text: "The fact diseases have a smell comes as no surprise - but finding someone or something that can detect them at an early stage could hold huge potential for medicine." },
        { text: "Breath, bodily odours and urine are all amazingly revealing about general health. Even the humble cold can give off an odour, thanks to the thick bacteria-ridden mucus that ends up in the back of the throat. The signs are not apparent to everyone - but some super-smellers are very sensitive to the odours. Joy Milne, for example, noticed her husband's smell had changed shortly before he was diagnosed with Parkinson's disease." },
        { text: "Humans can detect nearly 10,000 different smells. Formed by chemicals in the air, they are absorbed by little hairs hanging from the nose's olfactory receptors. And the human sense of smell is 10,000 times more sensitive than the sense of taste. But dogs, as the old joke might have had it, smell even better." },
        { text: "Their ability to detect four times as many odours as humans makes them a potential early warning system for a range of diseases. Research suggesting dogs could sniff out cancers was first published about 10 years ago. What they are smelling are the 'volatile molecules' given off by cells when they become cancerous." }
      ],
      questionGroups: [
        {
          id: "t4-g1",
          range: "Questions 1-6",
          instruction: "Do the following statements agree with the information in Passage 1?\nWrite TRUE, FALSE, or NOT GIVEN.",
          type: "tfng",
          questions: [
            { id: "t4-q1", number: 1, type: "tfng", text: "Joy Milne noticed a change in her husband's smell before his diagnosis.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
            { id: "t4-q2", number: 2, type: "tfng", text: "The human sense of taste is more sensitive than the sense of smell.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" },
            { id: "t4-q3", number: 3, type: "tfng", text: "Dogs can detect four times as many odours as humans.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
            { id: "t4-q4", number: 4, type: "tfng", text: "All dogs are capable of being trained to detect cancer.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "NOT GIVEN" },
            { id: "t4-q5", number: 5, type: "tfng", text: "Cancers give off 'volatile molecules' that dogs can detect.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
            { id: "t4-q6", number: 6, type: "tfng", text: "There are currently more than 50 dogs in the UK trained to detect cancer.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" }
          ]
        },
        {
          id: "t4-g2",
          range: "Questions 7-12",
          instruction: "Complete the sentences below. Write NO MORE THAN TWO WORDS for each answer.",
          type: "fill-in-blank",
          questions: [
            { id: "t4-q7", number: 7, type: "fill-in-blank", text: "Smells are absorbed by sensitive ________ hanging from olfactory receptors.", answer: "nerve fibres" },
            { id: "t4-q8", number: 8, type: "fill-in-blank", text: "Research on dogs sniffing out cancers was first published ________ years ago.", answer: "10" },
            { id: "t4-q9", number: 9, type: "fill-in-blank", text: "Dogs at Milton Keynes hospital are testing for ________ cancer.", answer: "prostate" },
            { id: "t4-q10", number: 10, type: "fill-in-blank", text: "Scientists hope to develop an ________ machine for every GP's desk.", answer: "electronic" },
            { id: "t4-q11", number: 11, type: "fill-in-blank", text: "Odours could be the basis for a national ________ programme.", answer: "screening" },
            { id: "t4-q12", number: 12, type: "fill-in-blank", text: "Any dog breed is eligible for training if they are keen on ________.", answer: "searching" }
          ]
        }
      ]
    },
    {
      id: "t4-p2",
      title: "Passage 2: Trash Talk - Roman oil trade",
      content: [
        { label: "A", text: "In the middle of Rome’s trendiest neighborhood sits the ancient world’s biggest garbage dump—a 150-foot-tall mountain of discarded Roman amphoras, the shipping drums of the ancient world. Monte Testaccio looks like a big hill, and in Rome people are accustomed to hills." },
        { label: "B", text: "The ancient Romans depended on oil—olive oil. For more than 250 years, an enormous number of amphoras filled with olive oil came by ship from the Roman provinces into the city itself, where they were unloaded, emptied, and then taken to Monte Testaccio and thrown away." },
        { label: "C", text: "Monte Testaccio stands near the Tiber River. Professor José Remesal estimates there are something like 25 million complete amphoras. His team sorts through about a ton of pottery every day." },
        { label: "D", text: "This is a unique record of Roman commerce. It provides a vast amount of datable evidence in a clear sequence. 'There’s no other place where you can study economic history and how the state controlled the transport of a product,' Remesal says." }
      ],
      questionGroups: [
        {
          id: "t4-g3",
          range: "Questions 13-16",
          instruction: "Match the paragraph labels A-D with the information.",
          type: "matching-headings",
          questions: [
            { id: "t4-q13", number: 13, type: "matching-headings", text: "Questions about the Roman economy", options: ["A", "B", "C", "D"], answer: "B" },
            { id: "t4-q14", number: 14, type: "matching-headings", text: "A unique feature of the site", options: ["A", "B", "C", "D"], answer: "D" },
            { id: "t4-q15", number: 15, type: "matching-headings", text: "Description of the dump's size and location", options: ["A", "B", "C", "D"], answer: "A" },
            { id: "t4-q16", number: 16, type: "matching-headings", text: "Dialogue with a professor about quantity", options: ["A", "B", "C", "D"], answer: "C" }
          ]
        },
        {
          id: "t4-g4",
          range: "Questions 17-21",
          instruction: "Write TRUE, FALSE, or NOT GIVEN.",
          type: "tfng",
          questions: [
            { id: "t4-q17", number: 17, type: "tfng", text: "World’s biggest garbage dump is surrounded by restaurants.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
            { id: "t4-q18", number: 18, type: "tfng", text: "The garbage dump is as popular as the Colosseum.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" },
            { id: "t4-q19", number: 19, type: "tfng", text: "The ancient Roman economy depended on oil.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
            { id: "t4-q20", number: 20, type: "tfng", text: "There is exact information on how many amphoras are there.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" },
            { id: "t4-q21", number: 21, type: "tfng", text: "The site is a unique record of Roman state control.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" }
          ]
        }
      ]
    },
    {
      id: "t4-p3",
      title: "Passage 3: Mysterious Dark Matter",
      content: [
        { text: "Dark matter particles may have interacted extensively with normal matter long ago. The invisible substance is thought to make up five-sixths of all matter in the universe." },
        { text: "Researchers suggest dark matter is made of a composite 'stealth' particle, composed of a quartet of component particles. Simulations suggest these particles may have masses ranging up to more than 200 billion electron-volts." }
      ],
      questionGroups: [
        {
          id: "t4-g5",
          range: "Questions 27-34",
          instruction: "Write NO MORE THAN TWO WORDS.",
          type: "fill-in-blank",
          questions: Array.from({ length: 8 }).map((_, i) => ({
            id: `t4-q${i + 27}`,
            number: i + 27,
            type: "fill-in-blank" as const,
            text: `Question ${i + 27} regarding dark matter.`,
            answer: "placeholder"
          }))
        },
        {
          id: "t4-g6",
          range: "Questions 35-40",
          instruction: "Write TRUE or FALSE.",
          type: "tfng",
          questions: Array.from({ length: 6 }).map((_, i) => ({
            id: `t4-q${i + 35}`,
            number: i + 35,
            type: "tfng" as const,
            text: `Dark matter is a mystery. (Question ${i + 35})`,
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: "TRUE"
          }))
        }
      ]
    }
  ]
};
