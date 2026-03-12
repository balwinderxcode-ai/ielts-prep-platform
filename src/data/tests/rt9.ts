import { ReadingTest } from "../../types";

export const readingTest9: ReadingTest = {
  id: "rt-academic-09",
  title: "IELTS Academic Reading Practice Test 9",
  timeLimitSeconds: 3600,
  passages: [
    {
      id: "t9-p1", title: "Passage 1: The History of the Pencil",
      content: [{ text: "The humble pencil has a long and fascinating history. It began with the discovery of a large deposit of graphite in Borrowdale, England, in 1564. Initially, graphite was used to mark sheep." }],
      questionGroups: [{ id: "t9-g1", range: "1-13", instruction: "Fill blank", type: "fill-in-blank", questions: Array.from({length:13}).map((_,i)=>({id:`t9-q${i+1}`,number:i+1,type:"fill-in-blank",text:"Placeholder",answer:"yes"})) }]
    },
    {
      id: "t9-p2", title: "Passage 2: The Importance of Soil",
      content: [{ text: "Soil is a vital resource that supports life on Earth. It provides nutrients for plants, filters water, and plays a key role in the carbon cycle." }],
      questionGroups: [{ id: "t9-g2", range: "14-26", instruction: "MCQ", type: "mcq", questions: Array.from({length:13}).map((_,i)=>({id:`t9-q${i+14}`,number:i+14,type:"mcq",text:"Placeholder",options:["A","B"],answer:"A"})) }]
    },
    {
      id: "t9-p3", title: "Passage 3: The Psychology of Memory",
      content: [{ text: "Memory is a complex cognitive process that allows us to store and retrieve information. Scientists have identified different types of memory, including short-term and long-term memory." }],
      questionGroups: [{ id: "t9-g3", range: "27-40", instruction: "TFNG", type: "tfng", questions: Array.from({length:14}).map((_,i)=>({id:`t9-q${i+27}`,number:i+27,type:"tfng",text:"Placeholder",options:["TRUE","FALSE"],answer:"TRUE"})) }]
    }
  ]
};
