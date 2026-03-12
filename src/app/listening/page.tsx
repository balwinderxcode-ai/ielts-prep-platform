"use client";
import { useState } from "react";
import { mockListeningTest } from "../../data/mock";
import { useTestStore } from "../../store";
import { Button } from "@/components/ui/Button";

export default function ListeningTest() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const test = mockListeningTest;
  const section = test.sections[0];
  const { addListeningScore } = useTestStore();

  const handleFinish = () => {
    let currentScore = 0;
    section.questions.forEach((q) => {
      if (answers[q.id]?.toLowerCase().trim() === q.answer.toLowerCase()) {
        currentScore++;
      }
    });
    setScore(currentScore);
    addListeningScore(currentScore, section.questions.length);
    setSubmitted(true);
  };

  const handleAnswerChange = (qId: string, value: string) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qId]: value }));
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-slate-100 -mx-4 sm:-mx-6 lg:-mx-8 -my-8">
      {/* Top Navigation Bar - Exam Style */}
      <div className="bg-slate-900 text-white px-6 py-3 flex justify-between items-center shrink-0 shadow-sm z-10">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold tracking-wider">{test.title}</h1>
          <div className="bg-slate-800 px-3 py-1 rounded text-sm text-slate-300 font-medium">
            Section 1 of 4
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className={`flex items-center space-x-2 text-lg font-mono font-bold text-slate-400`}>
            <span>Volume Check Required</span>
          </div>
          <Button 
            onClick={handleFinish}
            disabled={submitted}
            className={`${submitted ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {submitted ? `Score: ${score}/${section.questions.length}` : 'Finish Test'}
          </Button>
        </div>
      </div>

      {/* Main Split Content Area */}
      <div className="flex flex-1 flex-col overflow-y-auto p-10 bg-slate-50 items-center">
        
        {/* Audio Player Container */}
        <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-8 sticky top-0 z-20">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
            <div className="flex items-center text-blue-600 space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
              <span className="font-semibold tracking-wide">Audio Source</span>
            </div>
          </div>
          <audio 
            controls 
            className="w-full bg-slate-100 rounded-lg outline-none"
            src={section.audioUrl} 
          >
            Your browser does not support the audio element.
          </audio>
        </div>

        {/* Questions Container */}
        <div className="w-full max-w-3xl bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
          <div className="mb-8 p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <h3 className="font-bold text-amber-900 mb-1">Instructions</h3>
            <p className="text-amber-800 font-medium">Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.</p>
          </div>

          <div className="space-y-8">
            {section.questions.map((q, idx) => {
              const isCorrect = submitted && answers[q.id]?.toLowerCase().trim() === q.answer.toLowerCase();
              const isWrong = submitted && !isCorrect;

              return (
                <div key={q.id} className="flex flex-col sm:flex-row items-start sm:items-center p-6 bg-slate-50 border border-slate-200 rounded-xl relative overflow-hidden">
                  <div className="flex items-center space-x-4 mb-4 sm:mb-0 sm:w-1/2">
                    <span className="font-bold text-slate-700 bg-white border border-slate-300 w-10 h-10 flex items-center justify-center rounded-lg shrink-0 shadow-sm text-lg">
                      {idx + 1}
                    </span>
                    <span className="text-slate-800 text-lg font-medium">{q.text}</span>
                  </div>
                  
                  <div className="sm:w-1/2 relative">
                    <input 
                      type="text" 
                      value={answers[q.id] || ""}
                      disabled={submitted}
                      onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                      className={`w-full bg-white border-2 rounded-lg outline-none px-4 py-3 font-medium transition-all text-lg shadow-inner ${
                        submitted 
                          ? isCorrect 
                            ? 'border-green-500 text-green-700 bg-green-50' 
                            : 'border-red-500 text-red-700 bg-red-50'
                          : 'border-slate-300 focus:border-blue-500 text-slate-900'
                      }`} 
                      placeholder="Type your answer..."
                    />
                    
                    {isWrong && (
                      <div className="absolute top-full left-0 mt-2 text-sm text-green-700 font-bold bg-green-100 px-3 py-1 rounded-md border border-green-200">
                        Answer: {q.answer}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}