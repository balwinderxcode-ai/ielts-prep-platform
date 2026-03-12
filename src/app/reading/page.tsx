"use client";
import { useState, useEffect } from "react";
import { readingTests } from "../../data/tests";
import { useTestStore } from "../../store";
import { Button } from "@/components/ui/Button";
import { calculateReadingBand } from "../../utils/bands";
import { ReadingTest as ReadingTestType } from "../../types";

export default function ReadingTest() {
  const [selectedTest, setSelectedTest] = useState<ReadingTestType | null>(null);
  const { addReadingScore } = useTestStore();

  const [timeLeft, setTimeLeft] = useState(3600);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [band, setBand] = useState("");
  const [currentPassageIdx, setCurrentPassageIdx] = useState(0);

  const handleSelectTest = (test: ReadingTestType) => {
    setSelectedTest(test);
    setTimeLeft(test.timeLimitSeconds);
    setAnswers({});
    setSubmitted(false);
    setScore(0);
    setBand("");
    setCurrentPassageIdx(0);
  };

  useEffect(() => {
    if (!selectedTest || timeLeft <= 0 || submitted) return;
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, submitted, selectedTest]);

  if (!selectedTest) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Select a Reading Test</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {readingTests.map(t => (
            <div key={t.id} className="bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-blue-500 hover:shadow-lg transition cursor-pointer" onClick={() => handleSelectTest(t)}>
              <div className="bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider w-fit px-3 py-1 rounded-full mb-4">Academic</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">{t.title}</h2>
              <p className="text-slate-600 font-medium mb-6">3 Passages • 40 Questions • 60 Minutes</p>
              <Button className="w-full">Start Test</Button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const currentPassage = selectedTest.passages[currentPassageIdx];
  const allQuestions = selectedTest.passages.flatMap(p => p.questionGroups.flatMap(g => g.questions));

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const handleAnswer = (qNumber: number, answer: string) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qNumber]: answer }));
  };

  const cleanString = (str: string) => str.toLowerCase().replace(/[^\w\s]/g, '').trim();

  const handleFinish = () => {
    if (submitted) return;
    let currentScore = 0;
    allQuestions.forEach((q) => {
      const uAnswer = answers[q.number] || "";
      if (cleanString(uAnswer) === cleanString(q.answer)) {
        currentScore++;
      } else if (q.type === 'matching-headings') {
        // Special strict case for matching headings (just the letter A, B, etc)
        if (uAnswer.trim().toUpperCase() === q.answer.trim().toUpperCase()) {
          currentScore++;
        }
      }
    });
    
    setScore(currentScore);
    const calculatedBand = calculateReadingBand(currentScore);
    setBand(calculatedBand);
    addReadingScore(currentScore, 40);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-slate-100 -mx-4 sm:-mx-6 lg:-mx-8 -my-8">
      {/* Top Navigation Bar */}
      <div className="bg-slate-900 text-white px-6 py-3 flex justify-between items-center shrink-0 shadow-sm z-10">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold tracking-wider hidden sm:block">{selectedTest.title}</h1>
          <div className="flex bg-slate-800 rounded-md overflow-hidden p-1">
            {selectedTest.passages.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setCurrentPassageIdx(idx)}
                className={`px-4 py-1.5 text-sm font-semibold rounded-sm transition-colors ${
                  currentPassageIdx === idx ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                Passage {idx + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className={`flex items-center space-x-2 text-lg font-mono font-bold ${timeLeft < 300 && !submitted ? 'text-red-400 animate-pulse' : 'text-white'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{formatTime(timeLeft)}</span>
          </div>
          <Button onClick={handleFinish} disabled={submitted} className={`${submitted ? 'bg-green-600' : 'bg-blue-600'}`}>
            {submitted ? `Band: ${band} (${score}/40)` : 'Finish Test'}
          </Button>
          <button onClick={() => setSelectedTest(null)} className="text-sm font-semibold text-slate-400 hover:text-white ml-2">Exit</button>
        </div>
      </div>

      {/* Main Split Content Area */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        
        {/* LEFT PANEL: Reading Passage */}
        <div className="w-full md:w-1/2 bg-white border-r border-slate-300 overflow-y-auto p-10 shadow-inner">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 font-serif leading-snug">{currentPassage.title}</h2>
          <div className="prose prose-lg max-w-none text-slate-800 leading-relaxed font-serif space-y-6">
            {currentPassage.content.map((paragraph, idx) => (
              <div key={idx} className="flex">
                {paragraph.label && (
                  <div className="font-bold text-slate-900 mr-4 shrink-0 w-6">{paragraph.label}</div>
                )}
                <p className="flex-1">{paragraph.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL: Questions grouped by blocks */}
        <div className="w-full md:w-1/2 bg-slate-50 overflow-y-auto p-10">
          
          {currentPassage.questionGroups.map((group) => (
            <div key={group.id} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 mb-8">
              <div className="bg-slate-100 p-4 rounded-lg border border-slate-200 mb-6">
                <h3 className="font-bold text-lg text-slate-900 mb-1">{group.range}</h3>
                <p className="text-slate-700 italic">{group.instruction}</p>
              </div>
              
              <div className="space-y-8">
                {group.questions.map((q) => {
                  const uAnswer = answers[q.number] || "";
                  const isCorrect = submitted && (cleanString(uAnswer) === cleanString(q.answer) || (q.type === 'matching-headings' && uAnswer.toUpperCase() === q.answer.toUpperCase()));
                  const isWrong = submitted && !isCorrect;

                  return (
                    <div key={q.id} className="flex flex-col space-y-4 pb-6 border-b border-slate-100 last:border-0 relative">
                      <div className="flex space-x-4">
                        <span className="font-bold text-slate-800 bg-slate-200 w-8 h-8 flex items-center justify-center rounded-full shrink-0 shadow-sm">{q.number}</span>
                        <p className="text-slate-800 text-lg font-medium">{q.text}</p>
                      </div>

                      <div className="ml-12 flex flex-wrap gap-4">
                        {(group.type === 'tfng' || group.type === 'ynng' || group.type === 'mcq') && q.options?.map(opt => {
                          const optSelected = uAnswer === opt;
                          const optCorrect = submitted && q.answer === opt;
                          const optWrongChoice = submitted && optSelected && q.answer !== opt;
                          
                          let btnClass = "bg-white hover:bg-slate-50 border-slate-300 text-slate-700";
                          if (optSelected) btnClass = "bg-blue-600 text-white border-blue-600";
                          if (submitted) {
                            if (optCorrect) btnClass = "bg-green-600 text-white border-green-600";
                            if (optWrongChoice) btnClass = "bg-red-500 text-white border-red-500";
                          }

                          return (
                            <label key={opt} className={`flex items-center justify-center px-5 py-2.5 border rounded-lg cursor-pointer transition-all shadow-sm ${btnClass}`}>
                              <input 
                                type="radio" 
                                name={`question-${q.number}`} 
                                value={opt} 
                                className="hidden" 
                                disabled={submitted}
                                onChange={() => handleAnswer(q.number, opt)} 
                              />
                              <span className="font-semibold text-sm">{opt}</span>
                            </label>
                          );
                        })}

                        {/* Matching Headings uses a dropdown or text input */}
                        {group.type === 'matching-headings' && (
                          <div className="w-full max-w-xs flex items-center space-x-3">
                            <span className="text-slate-500 font-semibold">Paragraph</span>
                            <select 
                              disabled={submitted}
                              value={uAnswer}
                              onChange={(e) => handleAnswer(q.number, e.target.value)}
                              className={`flex-1 bg-white border-2 rounded-lg outline-none px-4 py-2 font-bold transition-all text-lg shadow-inner ${
                                submitted 
                                  ? isCorrect ? 'border-green-500 text-green-700 bg-green-50' : 'border-red-500 text-red-700 bg-red-50'
                                  : 'border-slate-300 focus:border-blue-500 text-slate-900'
                              }`}
                            >
                              <option value="">-</option>
                              {q.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                            </select>
                          </div>
                        )}

                        {group.type === 'fill-in-blank' && (
                          <div className="w-full max-w-md">
                            <input 
                              type="text" 
                              value={uAnswer}
                              disabled={submitted}
                              onChange={(e) => handleAnswer(q.number, e.target.value)}
                              className={`w-full bg-white border-2 rounded-lg outline-none px-4 py-2.5 font-medium transition-all text-base shadow-inner ${
                                submitted 
                                  ? isCorrect ? 'border-green-500 text-green-700 bg-green-50' : 'border-red-500 text-red-700 bg-red-50'
                                  : 'border-slate-300 focus:border-blue-500 text-slate-900'
                              }`} 
                              placeholder="Type answer..."
                            />
                          </div>
                        )}
                      </div>
                      
                      {isWrong && (
                        <div className="ml-12 mt-2 text-sm text-green-700 font-bold bg-green-100 px-3 py-1 rounded-md border border-green-200 inline-block w-fit">
                          Answer: {q.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="bg-white border-t border-slate-300 p-4 flex justify-start items-center shrink-0 space-x-1 overflow-x-auto shadow-md z-10">
        {allQuestions.map((q) => {
          const isAnswered = !!answers[q.number];
          const isCurrentPassage = currentPassage.questionGroups.some(g => g.questions.some(cq => cq.number === q.number));
          
          let boxClass = "bg-white text-slate-700 border-slate-300 hover:bg-slate-50";
          if (isAnswered) boxClass = "bg-slate-800 text-white border-slate-900";
          if (isCurrentPassage && !isAnswered) boxClass = "bg-blue-50 text-blue-800 border-blue-300";

          if (submitted) {
            const uAnswer = answers[q.number] || "";
            const correct = (cleanString(uAnswer) === cleanString(q.answer)) || (q.type === 'matching-headings' && uAnswer.toUpperCase() === q.answer.toUpperCase());
            if (correct) {
              boxClass = "bg-green-500 text-white border-green-600";
            } else {
              boxClass = "bg-red-500 text-white border-red-600";
            }
          }

          return (
            <button 
              key={q.number}
              onClick={() => {
                const pIdx = selectedTest.passages.findIndex(p => p.questionGroups.some(g => g.questions.some(cq => cq.number === q.number)));
                if (pIdx !== -1) setCurrentPassageIdx(pIdx);
              }}
              className={`w-9 h-9 shrink-0 flex items-center justify-center rounded-sm border text-xs font-bold transition-colors ${boxClass}`}
            >
              {q.number}
            </button>
          )
        })}
      </div>
    </div>
  );
}