import { ReadingTest } from "../../types";

export const readingTest6: ReadingTest = {
  id: "rt-academic-06",
  title: "IELTS Academic Reading Practice Test 6",
  timeLimitSeconds: 3600,
  passages: [
    {
      id: "t6-p1", title: "Passage 1: The Evolution of Photography",
      content: [{ text: "Photography has come a long way from the early daguerreotypes of the 19th century. Today, digital cameras and smartphones have made photography accessible to everyone." }],
      questionGroups: [{ id: "t6-g1", range: "1-13", instruction: "Fill blank", type: "fill-in-blank", questions: Array.from({length:13}).map((_,i)=>({id:`t6-q${i+1}`,number:i+1,type:"fill-in-blank",text:"Placeholder",answer:"yes"})) }]
    },
    {
      id: "t6-p2", title: "Passage 2: Marine Life in the Great Barrier Reef",
      content: [{ text: "The Great Barrier Reef is the largest coral reef system in the world. It is home to thousands of species of fish, mollusks, and sea turtles." }],
      questionGroups: [{ id: "t6-g2", range: "14-26", instruction: "MCQ", type: "mcq", questions: Array.from({length:13}).map((_,i)=>({id:`t6-q${i+14}`,number:i+14,type:"mcq",text:"Placeholder",options:["A","B"],answer:"A"})) }]
    },
    {
      id: "t6-p3", title: "Passage 3: The Danger of Space Debris",
      content: [{ text: "Thousands of pieces of defunct satellites and rocket stages orbit the Earth. This space debris poses a significant threat to active spacecraft." }],
      questionGroups: [{ id: "t6-g3", range: "27-40", instruction: "TFNG", type: "tfng", questions: Array.from({length:14}).map((_,i)=>({id:`t6-q${i+27}`,number:i+27,type:"tfng",text:"Placeholder",options:["TRUE","FALSE"],answer:"TRUE"})) }]
    }
  ]
};
