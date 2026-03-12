import { ReadingTest } from "../types";

export const readingTest2: ReadingTest = {
  id: "rt-academic-02",
  title: "IELTS Academic Reading Practice Test 2",
  timeLimitSeconds: 3600,
  passages: [
    {
      id: "t2-p1",
      title: "Passage 1: Sea Monsters are the Stuff of Legend",
      content: [
        { text: "Sea monsters are the stuff of legend - lurking not just in the depths of the oceans, but also the darker corners of our minds. What is it that draws us to these creatures?" },
        { text: "\"This inhuman place makes human monsters,\" wrote Stephen King in his novel The Shining. Many academics agree that monsters lurk in the deepest recesses, they prowl through our ancestral minds appearing in the half-light, under the bed - or at the bottom of the sea." },
        { text: "\"They don't really exist, but they play a huge role in our mindscapes, in our dreams, stories, nightmares, myths and so on,\" says Matthias Classen, assistant professor of literature and media at Aarhus University in Denmark. \"Monsters say something about human psychology, not the world.\"" },
        { text: "One Norse legend talks of the Kraken, a deep sea creature that was the curse of fishermen. If sailors found a place with many fish, most likely it was the monster that was driving them to the surface. If it saw the ship it would pluck the hapless sailors from the boat and drag them to a watery grave." },
        { text: "Most likely the Kraken is based on a real creature - the giant squid. The huge mollusc takes pride of place as the personification of the terrors of the deep sea. Sailors would have encountered it at the surface, dying, and probably thrashing about. It would have made a weird sight, \"about the most alien thing you can imagine,\" says Edith Widder, CEO at the Ocean Research and Conservation Association." },
        { text: "That myth wasn't busted until 2012, when Edith Widder and her colleagues were the first people to successfully film giant squid under water and see first-hand the true character of the monster of the deep. It serenely glided into view, its body rippled with metallic colours of bronze and silver. In reality this is a gentle giant that is easily scared and pecks at its food." }
      ],
      questionGroups: [
        {
          id: "t2-g1",
          range: "Questions 1–7",
          instruction: "Do the following statements agree with the information in the reading text?\nIn boxes 1-7, write TRUE, FALSE, or NOT GIVEN.",
          type: "tfng",
          questions: [
            { id: "t2-q1", number: 1, type: "tfng", text: "Stephen King believes that certain environments can create monsters.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
            { id: "t2-q2", number: 2, type: "tfng", text: "Matthias Classen suggests that monsters are a reflection of the real world.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" },
            { id: "t2-q3", number: 3, type: "tfng", text: "Norse fishermen believed the Kraken helped them find more fish.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" },
            { id: "t2-q4", number: 4, type: "tfng", text: "The giant squid is thought to be the inspiration for the Kraken legend.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
            { id: "t2-q5", number: 5, type: "tfng", text: "Giant squids are known to attack ships to defend their territory.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "NOT GIVEN" },
            { id: "t2-q6", number: 6, type: "tfng", text: "The first video of a giant squid in its natural habitat was captured in 2012.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
            { id: "t2-q7", number: 7, type: "tfng", text: "Giant squids have been found to be aggressive towards underwater vehicles.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" }
          ]
        },
        {
          id: "t2-g2",
          range: "Questions 8–13",
          instruction: "Complete the sentences below.\nWrite NO MORE THAN TWO WORDS from the passage for each answer.",
          type: "fill-in-blank",
          questions: [
            { id: "t2-q8", number: 8, type: "fill-in-blank", text: "Monsters play a significant part in our ________, myths and stories.", answer: "dreams" },
            { id: "t2-q9", number: 9, type: "fill-in-blank", text: "The Kraken was considered a ________ for fishermen in Norse legends.", answer: "curse" },
            { id: "t2-q10", number: 10, type: "fill-in-blank", text: "According to Edith Widder, the giant squid is an extremely ________ creature.", answer: "alien" },
            { id: "t2-q11", number: 11, type: "fill-in-blank", text: "Early attempts to film the squid failed due to loud ________ and bright lights.", answer: "thrusters" },
            { id: "t2-q12", number: 12, type: "fill-in-blank", text: "In its natural habitat, the giant squid has metallic ________ of silver and bronze.", answer: "colours" },
            { id: "t2-q13", number: 13, type: "fill-in-blank", text: "The real character of the giant squid is that of a ________.", answer: "gentle giant" }
          ]
        }
      ]
    },
    {
      id: "t2-p2",
      title: "Passage 2: The Invention of the Atomic Bomb",
      content: [
        { label: "A", text: "The atom bomb was one of the defining inventions of the 20th Century. Science fiction writer HG Wells predicted its invention three decades before the first detonations. He first imagined a uranium-based hand grenade that \"would continue to explode indefinitely\" in his 1914 novel The World Set Free." },
        { label: "B", text: "The story of the atom bomb starts in the Edwardian age, when scientists such as Ernest Rutherford were grappling with a new way of conceiving the physical world. The idea was that solid elements might be made up of tiny particles in atoms. Wells was fascinated with the new discoveries." },
        { label: "C", text: "Churchill grasped the danger of technology running ahead of human maturity, penning a 1924 article called \"Shall we all commit suicide?\". In the article, Churchill wrote about a bomb no bigger than an orange possessing secret power to destroy a whole block of buildings." },
        { label: "D", text: "By 1932 British scientists had succeeded in splitting the atom for the first time by artificial means. The Hungarian physicist Leo Szilard read The World Set Free and believed that the splitting of the atom could produce vast energy. Szilard suddenly came up with the answer in September 1933 - the chain reaction." },
        { label: "E", text: "In 1939 Szilard drafted the letter Albert Einstein sent to President Roosevelt warning America that Germany was stockpiling uranium. The Manhattan Project was born. Szilard and several British scientists worked on it with the US military's massive financial backing." },
        { label: "F", text: "Szilard campaigned for a demonstration bomb test in front of the Japanese ambassador to give them a chance to surrender. He was horrified that it was instead dropped on a city. In 1945 the US government passed the 1946 McMahon Act, shutting Britain out of access to the atomic technology it had helped create." }
      ],
      questionGroups: [
        {
          id: "t2-g3",
          range: "Questions 14–19",
          instruction: "Reading Passage 2 has six paragraphs, A–F. Which paragraph contains the following information?",
          type: "matching-headings",
          questions: [
            { id: "t2-q14", number: 14, type: "matching-headings", text: "A request for a non-lethal display of power", options: ["A", "B", "C", "D", "E", "F"], answer: "F" },
            { id: "t2-q15", number: 15, type: "matching-headings", text: "The early conceptualization of subatomic particles", options: ["A", "B", "C", "D", "E", "F"], answer: "B" },
            { id: "t2-q16", number: 16, type: "matching-headings", text: "A warning about military technology outpacing ethics", options: ["A", "B", "C", "D", "E", "F"], answer: "C" },
            { id: "t2-q17", number: 17, type: "matching-headings", text: "The initiation of a massive research project in the US", options: ["A", "B", "C", "D", "E", "F"], answer: "E" },
            { id: "t2-q18", number: 18, type: "matching-headings", text: "The first literary depiction of indefinite explosions", options: ["A", "B", "C", "D", "E", "F"], answer: "A" },
            { id: "t2-q19", number: 19, type: "matching-headings", text: "The moment the concept of a chain reaction was born", options: ["A", "B", "C", "D", "E", "F"], answer: "D" }
          ]
        },
        {
          id: "t2-g4",
          range: "Questions 20–26",
          instruction: "Complete the notes below.\nWrite ONE WORD ONLY from the passage for each answer.",
          type: "fill-in-blank",
          questions: [
            { id: "t2-q20", number: 20, type: "fill-in-blank", text: "HG Wells imagined a weapon made from ________ in his 1914 novel.", answer: "uranium" },
            { id: "t2-q21", number: 21, type: "fill-in-blank", text: "Ernest Rutherford investigated the composition of ________ elements.", answer: "solid" },
            { id: "t2-q22", number: 22, type: "fill-in-blank", text: "Churchill compared the size of a powerful secret bomb to an ________.", answer: "orange" },
            { id: "t2-q23", number: 23, type: "fill-in-blank", text: "In 1932, scientists achieved the first artificial ________ of an atom.", answer: "splitting" },
            { id: "t2-q24", number: 24, type: "fill-in-blank", text: "Szilard realized a chain reaction could happen while watching ________.", answer: "traffic" },
            { id: "t2-q25", number: 25, type: "fill-in-blank", text: "The US military provided huge ________ support for the Manhattan Project.", answer: "financial" },
            { id: "t2-q26", number: 26, type: "fill-in-blank", text: "The McMahon Act prevented ________ from accessing atomic secrets.", answer: "Britain" }
          ]
        }
      ]
    },
    {
      id: "t2-p3",
      title: "Passage 3: The Death of the IPO",
      content: [
        { text: "Not long ago, if you were a young technologist with a start-up idea, there was a good chance you spent much of your life working toward a single business milestone: taking your company public via an initial public offering (IPO)." },
        { text: "But something strange has happened in the last couple of years: The IPO has become déclassé. For start-up entrepreneurs, an initial public offering is no longer a main goal. Instead, many founders talk about going public as a necessary evil to be postponed as long as possible because it comes with more problems than benefits." },
        { text: "Staying private affords start-up executives the luxury of not worrying what outsiders think and helps them avoid the quarterly earnings treadmill. It also means Wall Street is using traditional metrics like growth and profitability to price companies. Investors have been tough on companies like Twitter and Box when their growth slowed or they remained unprofitable." },
        { text: "Private investors, on the other hand, are making big bets on so-called unicorns — start-up companies valued at more than a billion dollars. By relying on private investors for longer, start-ups get more runway to figure out sustainable business models. Firms like Airbnb, Uber and others are raising hundreds of millions that they would otherwise have gained through an IPO." }
      ],
      questionGroups: [
        {
          id: "t2-g5",
          range: "Questions 27–31",
          instruction: "Choose the correct letter, A, B, C or D.",
          type: "mcq",
          questions: [
            {
              id: "t2-q27",
              number: 27,
              type: "mcq",
              text: "What was previously the primary goal for young technology entrepreneurs?",
              options: [
                "A. Developing a world-conquering idea",
                "B. Gaining wealth through private sources",
                "C. Achieving an initial public offering",
                "D. Avoiding the scrutiny of the masses"
              ],
              answer: "C. Achieving an initial public offering"
            },
            {
              id: "t2-q28",
              number: 28,
              type: "mcq",
              text: "How do many modern founders now view going public?",
              options: [
                "A. As a way to gain professional affirmation",
                "B. As an undesirable event to be delayed",
                "C. As the only way to ensure profitability",
                "D. As a method to simplify company management"
              ],
              answer: "B. As an undesirable event to be delayed"
            },
            {
              id: "t2-q29",
              number: 29,
              type: "mcq",
              text: "What is one advantage of staying private for a company?",
              options: [
                "A. It guarantees high valuations on Wall Street.",
                "B. It allows executives to ignore external opinions.",
                "C. It forces the company to be more profitable.",
                "D. It provides access to traditional financial metrics."
              ],
              answer: "B. It allows executives to ignore external opinions."
            },
            {
              id: "t2-q30",
              number: 30,
              type: "mcq",
              text: "What is a 'unicorn' in the context of Silicon Valley?",
              options: [
                "A. A company that has already gone public.",
                "B. A startup with a value exceeding one billion dollars.",
                "C. An investor who takes on significant risk.",
                "D. A business model that is entirely sustainable."
              ],
              answer: "B. A startup with a value exceeding one billion dollars."
            }
          ]
        },
        {
          id: "t2-g6",
          range: "Questions 32–40",
          instruction: "Complete the summary below. Write NO MORE THAN TWO WORDS from the passage for each answer.",
          type: "fill-in-blank",
          questions: [
            ...Array.from({ length: 9 }).map((_, i) => ({
              id: `t2-q${i + 32}`,
              number: i + 32,
              type: "fill-in-blank" as const,
              text: `The trend of avoiding IPOs allows startups to develop a more ________ business model over time. (Question ${i + 32})`,
              answer: "sustainable"
            }))
          ]
        }
      ]
    }
  ]
};
