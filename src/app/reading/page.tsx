"use client";
import { useState, useEffect } from "react";
import { mockReadingData } from "../../data/readingData";
import { useTestStore } from "../../store";
import { Button } from "@/components/ui/Button";
import { calculateReadingBand } from "../../utils/bands";

export default function ReadingTest() {
  const test = mockReadingData;
  const { addReadingScore } = useTestStore();

  const [timeLeft, setTimeLeft] = useState(test.timeLimitSeconds);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [band, setBand] = useState("");
  const [currentPassageIdx, setCurrentPassageIdx] = useState(0);

  const currentPassage = test.passages[currentPassageIdx];
  const allQuestions = test.passages.flatMap(p => p.questions);

  useEffect(() => {
    if (timeLeft <= 0 || submitted) return;
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, submitted]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const handleAnswer = (qNumber: number, answer: string) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qNumber]: answer }));
  };

  const handleFinish = () => {
    if (submitted) return;
    let currentScore = 0;
    allQuestions.forEach((q) => {
      // Basic fuzzy match for fill-in-the-blanks, strict for others
      if (answers[q.number]?.toLowerCase().trim() === q.answer.toLowerCase().trim()) {
        currentScore++;
      }
    });
    
    setScore(currentScore);
    const calculatedBand = calculateReadingBand(currentScore);
    setBand(calculatedBand);
    
    // Convert to percentage-ish scale for dashboard tracking if preferred, or store the band
    // The previous dashboard expected maxScore. For a real app, update the store to track bands.
    addReadingScore(currentScore, 40);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-slate-100 -mx-4 sm:-mx-6 lg:-mx-8 -my-8">
      {/* Top Navigation Bar - Exam Style */}
      <div className="bg-slate-900 text-white px-6 py-3 flex justify-between items-center shrink-0 shadow-sm z-10">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold tracking-wider hidden sm:block">IELTS Academic Reading</h1>
          
          {/* Passage Tabs */}
          <div className="flex bg-slate-800 rounded-md overflow-hidden p-1">
            {test.passages.map((p, idx) => (
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
          <Button 
            onClick={handleFinish}
            disabled={submitted}
            className={`${submitted ? 'bg-green-600' : 'bg-blue-600'}`}
          >
            {submitted ? `Band: ${band} (${score}/40)` : 'Finish Test'}
          </Button>
        </div>
      </div>

      {/* Main Split Content Area */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        {/* LEFT PANEL: Reading Passage */}
        <div className="w-full md:w-1/2 bg-white border-r border-slate-300 overflow-y-auto p-10 shadow-inner">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 font-serif leading-snug">{currentPassage.title}</h2>
          <div className="prose prose-lg max-w-none text-slate-800 leading-relaxed font-serif space-y-6">
            {currentPassage.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL: Questions */}
        <div className="w-full md:w-1/2 bg-slate-50 overflow-y-auto p-10">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 mb-6">
            <h3 className="font-bold text-lg mb-4 text-slate-900">Questions {currentPassage.questions[0].number}-{currentPassage.questions[currentPassage.questions.length - 1].number}</h3>
            
            <div className="space-y-10">
              {currentPassage.questions.map((q) => {
                const isSelected = !!answers[q.number];
                const isCorrect = submitted && answers[q.number]?.toLowerCase().trim() === q.answer.toLowerCase().trim();
                const isWrong = submitted && !isCorrect;

                return (
                  <div key={q.id} className="flex flex-col space-y-4 pb-8 border-b border-slate-100 last:border-0 relative">
                    <div className="flex space-x-4">
                      <span className="font-bold text-slate-800 bg-slate-200 w-8 h-8 flex items-center justify-center rounded-full shrink-0 shadow-sm">{q.number}</span>
                      <p className="text-slate-800 text-lg font-medium">{q.text}</p>
                    </div>

                    <div className="ml-12 flex flex-wrap gap-4">
                      {/* MCQ / TFNG */}
                      {(q.type === 'tfng' || q.type === 'ynng' || q.type === 'mcq') && q.options?.map(opt => {
                        const optSelected = answers[q.number] === opt;
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

                      {/* Fill in the blank */}
                      {q.type === 'fill-in-blank' && (
                        <div className="w-full max-w-sm">
                          <input 
                            type="text" 
                            value={answers[q.number] || ""}
                            disabled={submitted}
                            onChange={(e) => handleAnswer(q.number, e.target.value)}
                            className={`w-full bg-white border-2 rounded-lg outline-none px-4 py-2.5 font-medium transition-all text-base shadow-inner ${
                              submitted 
                                ? isCorrect 
                                  ? 'border-green-500 text-green-700 bg-green-50' 
                                  : 'border-red-500 text-red-700 bg-red-50'
                                : 'border-slate-300 focus:border-blue-500 text-slate-900'
                            }`} 
                            placeholder="Type your answer..."
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
        </div>
      </div>

      {/* Bottom Navigation Bar (40 Questions Tracker) */}
      <div className="bg-white border-t border-slate-300 p-4 flex justify-start items-center shrink-0 space-x-1 overflow-x-auto shadow-md z-10">
        {allQuestions.map((q) => {
          const isAnswered = !!answers[q.number];
          const isCurrentPassage = currentPassage.questions.some(cq => cq.number === q.number);
          
          let boxClass = "bg-white text-slate-700 border-slate-300 hover:bg-slate-50";
          if (isAnswered) boxClass = "bg-slate-800 text-white border-slate-900";
          if (isCurrentPassage && !isAnswered) boxClass = "bg-blue-50 text-blue-800 border-blue-300";

          // If submitted, show red/green
          if (submitted) {
            const correct = answers[q.number]?.toLowerCase().trim() === q.answer.toLowerCase().trim();
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
                // Find which passage this question belongs to and switch to it
                const pIdx = test.passages.findIndex(p => p.questions.some(cq => cq.number === q.number));
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