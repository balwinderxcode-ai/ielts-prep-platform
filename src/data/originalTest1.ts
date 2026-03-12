import { ReadingTest } from "../types";

export const originalTest1: ReadingTest = {
  id: "rt-original-01",
  title: "IELTS Pro Original Practice Test A",
  timeLimitSeconds: 3600,
  passages: [
    {
      id: "p1-ants",
      title: "Passage 1: The Hidden Architecture of Ant Colonies",
      content: [
        { text: "Ants are found on every continent except Antarctica. While individual ants might seem simple, a colony acts as a highly complex superorganism. The intricate architecture of their underground nests is a marvel of engineering, built without blueprints or a central foreperson." },
        { text: "Researchers studying the nests of leafcutter ants have discovered that these structures can extend several meters below the ground and house millions of individuals. To uncover the nest structure, scientists carefully pumped liquid cement into an abandoned colony. After excavating the surrounding dirt, they revealed a colossal metropolis of interconnected chambers and highways." },
        { text: "One of the most remarkable features of these nests is their ventilation system. Ants cultivate a fungus in specific underground chambers, which they feed with chewed-up leaves. This fungus is their primary food source. However, the farming process generates dangerous amounts of carbon dioxide. To prevent suffocation, the ants construct central exhaust shafts. As wind blows over the slightly raised exit mounds on the surface, it draws the stale air out, pulling fresh air down through smaller intake tunnels." },
        { text: "Furthermore, the colony is strategically organized. Waste management chambers are located far from the fungal gardens to prevent contamination. The queen is housed in a heavily protected central chamber, while nurseries for the larvae are situated in areas where the temperature is most stable." }
      ],
      questionGroups: [
        {
          id: "g1",
          range: "Questions 1-6",
          instruction: "Do the following statements agree with the information in Passage 1?\nWrite TRUE, FALSE, or NOT GIVEN.",
          type: "tfng",
          questions: [
            { id: "q1", number: 1, type: "tfng", text: "Ants have established colonies in Antarctica.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" },
            { id: "q2", number: 2, type: "tfng", text: "Scientists used liquid cement to reveal the structure of an active leafcutter ant colony.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" },
            { id: "q3", number: 3, type: "tfng", text: "Leafcutter ants eat the leaves they bring back to the nest.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" },
            { id: "q4", number: 4, type: "tfng", text: "The fungus farmed by the ants requires sunlight to grow.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "NOT GIVEN" },
            { id: "q5", number: 5, type: "tfng", text: "Wind blowing over the exit mounds helps ventilate the colony.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
            { id: "q6", number: 6, type: "tfng", text: "Waste management chambers are kept close to the fungal gardens for easy access.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" }
          ]
        },
        {
          id: "g2",
          range: "Questions 7-13",
          instruction: "Complete the sentences below. Write NO MORE THAN TWO WORDS for each answer.",
          type: "fill-in-blank",
          questions: [
            { id: "q7", number: 7, type: "fill-in-blank", text: "A colony of ants behaves like a complex ________.", answer: "superorganism" },
            { id: "q8", number: 8, type: "fill-in-blank", text: "The nests of leafcutter ants can stretch several ________ beneath the surface.", answer: "meters" },
            { id: "q9", number: 9, type: "fill-in-blank", text: "The ants' main food source is a type of ________.", answer: "fungus" },
            { id: "q10", number: 10, type: "fill-in-blank", text: "Farming produces harmful levels of ________.", answer: "carbon dioxide" },
            { id: "q11", number: 11, type: "fill-in-blank", text: "Stale air is drawn out of the nest through central ________.", answer: "exhaust shafts" },
            { id: "q12", number: 12, type: "fill-in-blank", text: "The most protected area of the nest is the ________ chamber.", answer: "central" },
            { id: "q13", number: 13, type: "fill-in-blank", text: "Nurseries are placed in locations with a ________.", answer: "stable temperature" }
          ]
        }
      ]
    },
    {
      id: "p2-crypto",
      title: "Passage 2: The Evolution of Cryptography",
      content: [
        { label: "A", text: "Cryptography, the practice of secure communication, has a history spanning thousands of years. The earliest known use of cryptography was found in non-standard hieroglyphs carved into the wall of a tomb from the Old Kingdom of Egypt circa 1900 BC. However, these are thought to have been intended for amusement rather than serious secret communication." },
        { label: "B", text: "The first recorded use of cryptography for military purposes is attributed to Julius Caesar. The 'Caesar cipher' involved shifting each letter of the alphabet by a fixed number of positions. For example, with a shift of three, A would become D, and B would become E. While simple by modern standards, it was highly effective at a time when most of the population was illiterate." },
        { label: "C", text: "During the Middle Ages, cryptography advanced significantly in the Arab world. The mathematician Al-Kindi documented the technique of frequency analysis. Because certain letters appear more frequently in a language (like 'E' in English), analysts could count the frequency of symbols in a cipher and deduce the underlying letters. This breakthrough rendered simple substitution ciphers obsolete." },
        { label: "D", text: "The 20th century witnessed the mechanization of cryptography, most notably with the German Enigma machine during World War II. The Enigma used a series of rotating rotors to scramble messages, changing the substitution alphabet with every single keystroke. The eventual cracking of the Enigma code by Alan Turing and his team at Bletchley Park is widely considered a turning point in the war." },
        { label: "E", text: "Today, cryptography has moved from the physical realm to the digital. The internet relies on public-key cryptography, a system that uses two distinct keys: a public key to encrypt the message, and a private key to decrypt it. This allows secure online banking, messaging, and e-commerce, forming the backbone of modern digital security." }
      ],
      questionGroups: [
        {
          id: "g3",
          range: "Questions 14-18",
          instruction: "Reading Passage 2 has five paragraphs, A-E. Match the correct heading to each paragraph.",
          type: "matching-headings",
          questions: [
            { id: "q14", number: 14, type: "matching-headings", text: "The shift to computer-based encryption", options: ["A", "B", "C", "D", "E"], answer: "E" },
            { id: "q15", number: 15, type: "matching-headings", text: "The earliest known forms of disguised writing", options: ["A", "B", "C", "D", "E"], answer: "A" },
            { id: "q16", number: 16, type: "matching-headings", text: "Defeating early ciphers through mathematics", options: ["A", "B", "C", "D", "E"], answer: "C" },
            { id: "q17", number: 17, type: "matching-headings", text: "A basic system used for military command", options: ["A", "B", "C", "D", "E"], answer: "B" },
            { id: "q18", number: 18, type: "matching-headings", text: "The machine that revolutionized wartime communication", options: ["A", "B", "C", "D", "E"], answer: "D" }
          ]
        },
        {
          id: "g4",
          range: "Questions 19-26",
          instruction: "Do the following statements agree with the claims of the writer? Write YES, NO, or NOT GIVEN.",
          type: "ynng",
          questions: [
            { id: "q19", number: 19, type: "ynng", text: "The Egyptian hieroglyphs from 1900 BC were used to hide military secrets.", options: ["YES", "NO", "NOT GIVEN"], answer: "NO" },
            { id: "q20", number: 20, type: "ynng", text: "The Caesar cipher relied on shifting letters by a set amount.", options: ["YES", "NO", "NOT GIVEN"], answer: "YES" },
            { id: "q21", number: 21, type: "ynng", text: "Caesar's enemies eventually learned how to crack his cipher.", options: ["YES", "NO", "NOT GIVEN"], answer: "NOT GIVEN" },
            { id: "q22", number: 22, type: "ynng", text: "Frequency analysis relies on the fact that all letters in a language are used equally.", options: ["YES", "NO", "NOT GIVEN"], answer: "NO" },
            { id: "q23", number: 23, type: "ynng", text: "The Enigma machine used stationary rotors to scramble text.", options: ["YES", "NO", "NOT GIVEN"], answer: "NO" },
            { id: "q24", number: 24, type: "ynng", text: "Alan Turing's work at Bletchley Park shortened World War II.", options: ["YES", "NO", "NOT GIVEN"], answer: "NOT GIVEN" },
            { id: "q25", number: 25, type: "ynng", text: "Public-key cryptography requires two different keys.", options: ["YES", "NO", "NOT GIVEN"], answer: "YES" },
            { id: "q26", number: 26, type: "ynng", text: "Modern banking is impossible without public-key cryptography.", options: ["YES", "NO", "NOT GIVEN"], answer: "YES" }
          ]
        }
      ]
    },
    {
      id: "p3-space",
      title: "Passage 3: The Psychology of Deep Space Exploration",
      content: [
        { text: "As humanity sets its sights on Mars and beyond, the technological hurdles of deep space travel are heavily publicized. However, space agencies are equally concerned with a more fragile component of the mission: the human mind. The psychological toll of extreme isolation, confinement, and distance from Earth presents an unprecedented challenge." },
        { text: "In low Earth orbit, such as on the International Space Station (ISS), astronauts experience isolation, but they maintain real-time communication with ground control and can look out the window to see Earth. A journey to Mars, however, would take roughly seven to nine months one-way. During this time, the Earth would shrink to a pale blue dot, a phenomenon scientists call the 'Earth out of view' effect. Psychologists fear this complete visual disconnection from humanity's home could trigger severe existential anxiety and depression." },
        { text: "Furthermore, communication delays will fundamentally alter the dynamic between the crew and Mission Control. At its furthest point, a radio signal takes 22 minutes to travel between Earth and Mars. A simple question and answer would take 44 minutes. This forces the crew to be entirely autonomous during emergencies, shifting the traditional hierarchy and requiring a completely different psychological profile for astronauts. They must be independent, highly cohesive, and capable of resolving intense interpersonal conflicts without mediation." },
        { text: "To study these effects, agencies run simulation missions, such as the HI-SEAS habitat in Hawaii. Crews of six live in a small dome on a barren volcano for up to a year, simulating the isolation and communication delays of a Mars mission. These studies have shown that maintaining a strict schedule, ensuring high-quality sleep, and providing avenues for creative expression are vital for maintaining team morale and cognitive function." }
      ],
      questionGroups: [
        {
          id: "g5",
          range: "Questions 27-31",
          instruction: "Choose the correct letter, A, B, C or D.",
          type: "mcq",
          questions: [
            {
              id: "q27",
              number: 27,
              type: "mcq",
              text: "What does the writer suggest is a major concern for space agencies?",
              options: [
                "A. The cost of deep space travel",
                "B. The psychological impact on astronauts",
                "C. The mechanical failure of spacecraft",
                "D. The physical effects of zero gravity"
              ],
              answer: "B. The psychological impact on astronauts"
            },
            {
              id: "q28",
              number: 28,
              type: "mcq",
              text: "How does the ISS differ from a Mars mission?",
              options: [
                "A. ISS astronauts do not experience isolation.",
                "B. ISS astronauts can communicate with Earth instantly.",
                "C. ISS astronauts travel much faster.",
                "D. ISS astronauts stay in space for longer periods."
              ],
              answer: "B. ISS astronauts can communicate with Earth instantly."
            },
            {
              id: "q29",
              number: 29,
              type: "mcq",
              text: "What is the 'Earth out of view' effect?",
              options: [
                "A. The physical inability to see Earth due to solar glare.",
                "B. The psychological impact of Earth appearing as a tiny dot.",
                "C. The loss of radio contact with Earth.",
                "D. The feeling of weightlessness in deep space."
              ],
              answer: "B. The psychological impact of Earth appearing as a tiny dot."
            },
            {
              id: "q30",
              number: 30,
              type: "mcq",
              text: "Why will Mars astronauts need to be highly autonomous?",
              options: [
                "A. Because Mission Control will not be monitoring them.",
                "B. Because they will be traveling too fast for signals to catch up.",
                "C. Because communication delays mean they cannot wait for instructions during emergencies.",
                "D. Because they will be trained better than previous astronauts."
              ],
              answer: "C. Because communication delays mean they cannot wait for instructions during emergencies."
            },
            {
              id: "q31",
              number: 31,
              type: "mcq",
              text: "What is the primary purpose of the HI-SEAS habitat?",
              options: [
                "A. To test new spacecraft engines.",
                "B. To study the geology of volcanoes.",
                "C. To train astronauts in zero gravity.",
                "D. To simulate the psychological conditions of a Mars mission."
              ],
              answer: "D. To simulate the psychological conditions of a Mars mission."
            }
          ]
        },
        {
          id: "g6",
          range: "Questions 32-40",
          instruction: "Complete the summary below. Write NO MORE THAN THREE WORDS from the passage for each answer.",
          type: "fill-in-blank",
          questions: [
            { id: "q32", number: 32, type: "fill-in-blank", text: "Space agencies are concerned about the psychological toll of extreme ________, confinement, and distance.", answer: "isolation" },
            { id: "q33", number: 33, type: "fill-in-blank", text: "A journey to Mars takes approximately seven to nine ________.", answer: "months" },
            { id: "q34", number: 34, type: "fill-in-blank", text: "Losing visual contact with Earth could cause existential ________ and depression.", answer: "anxiety" },
            { id: "q35", number: 35, type: "fill-in-blank", text: "A radio signal sent from Earth to Mars can take up to 22 ________.", answer: "minutes" },
            { id: "q36", number: 36, type: "fill-in-blank", text: "Due to delays, astronauts must resolve their own ________ without outside help.", answer: "interpersonal conflicts" },
            { id: "q37", number: 37, type: "fill-in-blank", text: "Crews in the HI-SEAS habitat live inside a small ________.", answer: "dome" },
            { id: "q38", number: 38, type: "fill-in-blank", text: "They live on a barren ________ in Hawaii.", answer: "volcano" },
            { id: "q39", number: 39, type: "fill-in-blank", text: "To maintain cognitive function, crews must ensure they get high-quality ________.", answer: "sleep" },
            { id: "q40", number: 40, type: "fill-in-blank", text: "Providing opportunities for ________ is also vital for team morale.", answer: "creative expression" }
          ]
        }
      ]
    }
  ]
};
