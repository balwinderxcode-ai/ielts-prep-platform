import { ReadingTest } from "../types";
import { originalTest1 } from "./originalTest1";
import { readingTest2 } from "./readingTest2";
import { readingTest3 } from "./tests/rt3";
import { readingTest4 } from "./tests/rt4";
import { readingTest5 } from "./tests/rt5";
import { readingTest6 } from "./tests/rt6";
import { readingTest7 } from "./tests/rt7";
import { readingTest8 } from "./tests/rt8";

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
      }
    ]
  },
  readingTest2,
  readingTest3,
  readingTest4,
  readingTest5,
  readingTest6,
  readingTest7,
  readingTest8,
  originalTest1
];