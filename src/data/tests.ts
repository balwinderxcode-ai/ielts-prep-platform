import { ReadingTest } from "../types";
import { originalTest1 } from "./originalTest1";
import { readingTest2 } from "./readingTest2";

export const readingTests: ReadingTest[] = [
  {
    id: "rt-academic-01",
    title: "IELTS-UP Free Academic Reading Sample 1",
    timeLimitSeconds: 3600,
    passages: [
      {
        id: "p1",
        title: "Passage 1: Aphantasia: A life without mental images",
        content: [
          { text: "Close your eyes and imagine walking along a sandy beach and then gazing over the horizon as the Sun rises. How clear is the image that springs to mind?" },
          { text: "Most people can readily conjure images inside their head - known as their mind's eye. But this year scientists have described a condition, aphantasia, in which some people are unable to visualise mental images." },
          { text: "Niel Kenmuir, from Lancaster, has always had a blind mind's eye. He knew he was different even in childhood. \"My stepfather, when I couldn't sleep, told me to count sheep, and he explained what he meant, I tried to do it and I couldn't,\" he says. \"I couldn't see any sheep jumping over fences, there was nothing to count.\"" },
          { text: "Our memories are often tied up in images, think back to a wedding or first day at school. As a result, Niel admits, some aspects of his memory are \"terrible\", but he is very good at remembering facts. And, like others with aphantasia, he struggles to recognise faces. Yet he does not see aphantasia as a disability, but simply a different way of experiencing life." },
          { text: "Mind's eye blind" },
          { text: "Ironically, Niel now works in a bookshop, although he largely sticks to the non-fiction aisles. His condition begs the question what is going on inside his picture-less mind. I asked him what happens when he tries to picture his fiancee. \"This is the hardest thing to describe, what happens in my head when I think about things,\" he says. \"When I think about my fiancee there is no image, but I am definitely thinking about her, I know today she has her hair up at the back, she's brunette. But I'm not describing an image I am looking at, I'm remembering features about her, that's the strangest thing and maybe that is a source of some regret.\"" },
          { text: "The response from his mates is a very sympathetic: \"You're weird.\" But while Niel is very relaxed about his inability to picture things, it is often a cause of distress for others. One person who took part in a study into aphantasia said he had started to feel \"isolated\" and \"alone\" after discovering that other people could see images in their heads. Being unable to reminisce about his mother years after her death led to him being \"extremely distraught\"." },
          { text: "The super-visualiser" },
          { text: "At the other end of the spectrum is children's book illustrator, Lauren Beard, whose work on the Fairytale Hairdresser series will be familiar to many six-year-olds. Her career relies on the vivid images that leap into her mind's eye when she reads text from her author. When I met her in her box-room studio in Manchester, she was working on a dramatic scene in the next book. The text describes a baby perilously climbing onto a chandelier." },
          { text: "\"Straightaway I can visualise this grand glass chandelier in some sort of French kind of ballroom, and the little baby just swinging off it and really heavy thick curtains,\" she says. \"I think I have a strong imagination, so I can create the world and then keep adding to it so it gets sort of bigger and bigger in my mind and the characters too they sort of evolve. I couldn't really imagine what it's like to not imagine, I think it must be a bit of a shame really.\"" },
          { text: "Not many people have mental imagery as vibrant as Lauren or as blank as Niel. They are the two extremes of visualisation. Adam Zeman, a professor of cognitive and behavioural neurology, wants to compare the lives and experiences of people with aphantasia and its polar-opposite hyperphantasia. His team, based at the University of Exeter, coined the term aphantasia this year in a study in the journal Cortex." },
          { text: "Prof Zeman tells the BBC: \"People who have contacted us say they are really delighted that this has been recognised and has been given a name, because they have been trying to explain to people for years that there is this oddity that they find hard to convey to others.\" How we imagine is clearly very subjective - one person's vivid scene could be another's grainy picture. But Prof Zeman is certain that aphantasia is real. People often report being able to dream in pictures, and there have been reported cases of people losing the ability to think in images after a brain injury." },
          { text: "He is adamant that aphantasia is \"not a disorder\" and says it may affect up to one in 50 people. But he adds: \"I think it makes quite an important difference to their experience of life because many of us spend our lives with imagery hovering somewhere in the mind's eye which we inspect from time to time, it's a variability of human experience.\"" }
        ],
        questionGroups: [
          {
            id: "g1",
            range: "Questions 1–8",
            instruction: "Do the following statements agree with the information in the reading text?\nIn boxes 1-8 on your answer sheet, write TRUE, FALSE, or NOT GIVEN.",
            type: "tfng",
            questions: [
              { id: "q1", number: 1, type: "tfng", text: "Aphantasia is a condition, which describes people, for whom it is hard to visualise mental images.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
              { id: "q2", number: 2, type: "tfng", text: "Niel Kenmuir was unable to count sheep in his head.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
              { id: "q3", number: 3, type: "tfng", text: "People with aphantasia struggle to remember personal traits and clothes of different people.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" },
              { id: "q4", number: 4, type: "tfng", text: "Niel regrets that he cannot portray an image of his fiancee in his mind.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
              { id: "q5", number: 5, type: "tfng", text: "Inability to picture things in someone's head is often a cause of distress for a person.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
              { id: "q6", number: 6, type: "tfng", text: "All people with aphantasia start to feel 'isolated' or 'alone' at some point of their lives.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" },
              { id: "q7", number: 7, type: "tfng", text: "Lauren Beard's career depends on her imagination.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
              { id: "q8", number: 8, type: "tfng", text: "The author met Lauren Beard when she was working on a comedy scene in her next book.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" }
            ]
          },
          {
            id: "g2",
            range: "Questions 9–13",
            instruction: "Complete the sentences below. Write NO MORE THAN TWO WORDS from the passage for each answer.",
            type: "fill-in-blank",
            questions: [
              { id: "q9", number: 9, type: "fill-in-blank", text: "Only a small fraction of people have imagination as ________ as Lauren does.", answer: "vibrant" },
              { id: "q10", number: 10, type: "fill-in-blank", text: "Hyperphantasia is ________ to aphantasia.", answer: "polar-opposite" },
              { id: "q11", number: 11, type: "fill-in-blank", text: "There are a lot of subjectivity in comparing people's imagination - somebody's vivid scene could be another person's ________.", answer: "grainy picture" },
              { id: "q12", number: 12, type: "fill-in-blank", text: "Prof Zeman is ________ that aphantasia is not an illness.", answer: "adamant" },
              { id: "q13", number: 13, type: "fill-in-blank", text: "Many people spend their lives with ________ somewhere in the mind's eye.", answer: "imagery" }
            ]
          }
        ]
      },
      {
        id: "p2",
        title: "Passage 2: Life lessons from villains, crooks and gangsters",
        content: [
          { label: "A", text: "A notorious Mexican drug baron’s audacious escape from prison in July doesn’t, at first, appear to have much to teach corporate boards. But some in the business world suggest otherwise. Beyond the morally reprehensible side of criminals' work, some business gurus say organised crime syndicates, computer hackers, pirates and others operating outside the law could teach legitimate corporations a thing or two about how to hustle and respond to rapid change." },
          { label: "B", text: "Far from encouraging illegality, these gurus argue that – in the same way big corporations sometimes emulate start-ups – business leaders could learn from the underworld about flexibility, innovation and the ability to pivot quickly. “There is a nimbleness to criminal organisations that legacy corporations [with large, complex layers of management] don’t have,” said Marc Goodman, head of the Future Crimes Institute and global cyber-crime advisor. While traditional businesses focus on rules they have to follow, criminals look to circumvent them. “For criminals, the sky is the limit and that creates the opportunity to think much, much bigger.”" },
          { label: "C", text: "Joaquin Guzman, the head of the Mexican Sinaloa drug cartel, for instance, slipped out of his prison cell through a tiny hole in his shower that led to a mile-long tunnel fitted with lights and ventilation. Making a break for it required creative thinking, long-term planning and perseverance – essential skills similar to those needed to achieve success in big business." },
          { label: "D", text: "While Devin Liddell, who heads brand strategy for Seattle-based design consultancy, Teague, condemns the violence and other illegal activities he became curious as to how criminal groups endure. Some cartels stay in business despite multiple efforts by law enforcement on both sides of the US border and millions of dollars from international agencies to shut them down. Liddell genuinely believes there’s a lesson in longevity here. One strategy he underlined was how the bad guys respond to change. In order to bypass the border between Mexico and the US, for example, the Sinaloa cartel went to great lengths. It built a vast underground tunnel, hired family members as border agents and even used a catapult to circumvent a high-tech fence." },
          { label: "E", text: "By contrast, many legitimate businesses fail because they hesitate to adapt quickly to changing market winds. One high-profile example is movie and game rental company Blockbuster, which didn’t keep up with the market and lost business to mail order video rentals and streaming technologies. The brand has all but faded from view. Liddell argues the difference between the two groups is that criminal organisations often have improvisation encoded into their daily behaviour, while larger companies think of innovation as a set process. “This is a leadership challenge,” said Liddell. “How well companies innovate and organise is a reflection of leadership.”" },
          { label: "F", text: "Cash-strapped start-ups also use unorthodox strategies to problem solve and build their businesses up from scratch. This creativity and innovation is often borne out of necessity, such as tight budgets. Both criminals and start-up founders “question authority, act outside the system and see new and clever ways of doing things,” said Goodman. “Either they become Elon Musk or El Chapo.” And, some entrepreneurs aren’t even afraid to operate in legal grey areas in their effort to disrupt the marketplace. The co-founders of music streaming service Napster, for example, knowingly broke music copyright rules with their first online file sharing service, but their technology paved the way for legal innovation as regulators caught up." },
          { label: "G", text: "Goodman and others believe thinking hard about problem solving before worrying about restrictions could prevent established companies falling victim to rivals less constrained by tradition. In their book The Misfit Economy, Alexa Clay and Kyra Maya Phillips examine how individuals can apply that mindset to become more innovative and entrepreneurial within corporate structures. They studied not just violent criminals like Somali pirates, but others who break the rules in order to find creative solutions to their business problems, such as people living in the slums of Mumbai or computer hackers. They picked out five common traits among this group: the ability to hustle, pivot, provoke, hack and copycat." },
          { label: "H", text: "Clay gives a Saudi entrepreneur named Walid Abdul-Wahab as a prime example. Abdul-Wahab worked with Amish farmers to bring camel milk to American consumers even before US regulators approved it. Through perseverance, he eventually found a network of Amish camel milk farmers and started selling the product via social media. Now his company, Desert Farms, sells to giant mainstream retailers like Whole Foods Market. Those on the fringe don’t always have the option of traditional, corporate jobs and that forces them to think more creatively about how to make a living, Clay said. They must develop grit and resilience in order to last outside the cushy confines of cubicle life. “In many cases scarcity is the mother of invention,” Clay said." }
        ],
        questionGroups: [
          {
            id: "g3",
            range: "Questions 14-21",
            instruction: "Reading Passage 2 has eight paragraphs A-H. Match the headings below with the paragraphs. Write the correct letter, A-H, in boxes 14-21.",
            type: "matching-headings",
            questions: [
              { id: "q14", number: 14, type: "matching-headings", text: "Jailbreak with creative thinking", options: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "C" },
              { id: "q15", number: 15, type: "matching-headings", text: "Five common traits among rule-breakers", options: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "G" },
              { id: "q16", number: 16, type: "matching-headings", text: "Comparison between criminals and traditional businessmen", options: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "B" },
              { id: "q17", number: 17, type: "matching-headings", text: "Can drug baron's escape teach legitimate corporations?", options: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "A" },
              { id: "q18", number: 18, type: "matching-headings", text: "Great entrepreneur", options: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "H" },
              { id: "q19", number: 19, type: "matching-headings", text: "How criminal groups deceive the law", options: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "D" },
              { id: "q20", number: 20, type: "matching-headings", text: "The difference between legal and illegal organisations", options: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "E" },
              { id: "q21", number: 21, type: "matching-headings", text: "Similarity between criminals and start-up founders", options: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "F" }
            ]
          },
          {
            id: "g4",
            range: "Questions 22-25",
            instruction: "Complete the sentences below. Write ONLY ONE WORD from the passage for each answer.",
            type: "fill-in-blank",
            questions: [
              { id: "q22", number: 22, type: "fill-in-blank", text: "To escape from a prison, Joaquin Guzman had to use such traits as creative thinking, long-term planning and ________.", answer: "perseverance" },
              { id: "q23", number: 23, type: "fill-in-blank", text: "The Sinaloa cartel built a grand underground tunnel and even used a ________ to avoid the fence.", answer: "catapult" },
              { id: "q24", number: 24, type: "fill-in-blank", text: "The main difference between two groups is that criminals, unlike large corporations, often have ________ encoded into their daily life.", answer: "improvisation" },
              { id: "q25", number: 25, type: "fill-in-blank", text: "Due to being persuasive, Walid Abdul-Wahab found a ________ of Amish camel milk farmers.", answer: "network" }
            ]
          },
          {
            id: "g5",
            range: "Question 26",
            instruction: "Choose the correct letter, A, B, C or D.",
            type: "mcq",
            questions: [
              {
                id: "q26",
                number: 26,
                type: "mcq",
                text: "The main goal of this article is to:",
                options: [
                  "A. Show different ways of illegal activity",
                  "B. Give an overview of various criminals and their gangs",
                  "C. Draw a comparison between legal and illegal business, providing examples",
                  "D. Justify criminals with creative thinking"
                ],
                answer: "C. Draw a comparison between legal and illegal business, providing examples"
              }
            ]
          }
        ]
      },
      {
        id: "p3",
        title: "Passage 3: Renewable Energy Storage Solutions",
        content: [
          { text: "The transition to renewable energy sources, such as wind and solar, faces a significant hurdle: intermittency. The sun doesn't always shine, and the wind doesn't always blow. To maintain a stable power grid, energy must be stored when production is high and released when it is low." },
          { text: "Lithium-ion batteries have dominated the storage market for the past decade, largely due to their high energy density and falling costs. However, they are best suited for short-duration storage (2 to 4 hours). For long-duration storage, alternative technologies are being explored." },
          { text: "Pumped hydro storage is the oldest and most widely used large-scale method. It involves pumping water up to a reservoir when excess energy is available, and letting it flow back down through turbines when energy is needed. While highly efficient, it requires specific geographical conditions." }
        ],
        questionGroups: [
          {
            id: "g6",
            range: "Questions 27-40",
            instruction: "Complete the following sentences using NO MORE THAN TWO WORDS.",
            type: "fill-in-blank",
            questions: [
              ...Array.from({ length: 14 }).map((_, i) => ({
                id: `q${i + 27}`,
                number: i + 27,
                type: "fill-in-blank" as const,
                text: `Pumped hydro storage involves pumping ________ up to a reservoir. (Question ${i + 27})`,
                answer: "water"
              }))
            ]
          }
        ]
      }
    ]
  },
  readingTest2,
  originalTest1
];