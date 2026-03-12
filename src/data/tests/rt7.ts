import { ReadingTest } from "../../types";

export const readingTest7: ReadingTest = {
  id: "rt-academic-07",
  title: "IELTS Academic Reading Practice Test 7",
  timeLimitSeconds: 2400, // Shorter for 2 passages
  passages: [
    {
      id: "t7-p1", title: "Passage 1: Sustainable Fashion Trends",
      content: [{ text: "The fashion industry is moving towards more sustainable practices, such as using organic cotton and recycled materials." }],
      questionGroups: [{ id: "t7-g1", range: "1-13", instruction: "Fill blank", type: "fill-in-blank", questions: Array.from({length:13}).map((_,i)=>({id:`t7-q${i+1}`,number:i+1,type:"fill-in-blank",text:"Placeholder",answer:"yes"})) }]
    },
    {
      id: "t7-p2", title: "Passage 2: The Mystery of the Rosetta Stone",
      content: [{ text: "Discovered in 1799, the Rosetta Stone was the key to deciphering ancient Egyptian hieroglyphs." }],
      questionGroups: [{ id: "t7-g2", range: "14-26", instruction: "MCQ", type: "mcq", questions: Array.from({length:13}).map((_,i)=>({id:`t7-q${i+14}`,number:i+14,type:"mcq",text:"Placeholder",options:["A","B"],answer:"A"})) }]
    }
  ]
};
