"use client";
import { useState, useEffect } from "react";
import { mockReadingTest } from "../../data/mock";
import { useTestStore } from "../../store";
import { Button } from "@/components/ui/Button";

export default function ReadingTest() {
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const test = mockReadingTest;
  const passage = test.passages[0];
  const { addReadingScore } = useTestStore();

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

  const handleAnswer = (qId: string, answer: string) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qId]: answer }));
  };

  const handleFinish = () => {
    let currentScore = 0;
    passage.questions.forEach((q) => {
      if (answers[q.id] === q.answer) {
        currentScore++;
      }
    });
    setScore(currentScore);
    addReadingScore(currentScore, passage.questions.length);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-slate-100 -mx-4 sm:-mx-6 lg:-mx-8 -my-8">
      {/* Top Navigation Bar - Exam Style */}
      <div className="bg-slate-900 text-white px-6 py-3 flex justify-between items-center shrink-0 shadow-sm z-10">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold tracking-wider">{test.title}</h1>
          <div className="bg-slate-800 px-3 py-1 rounded text-sm text-slate-300 font-medium">
            Passage 1 of 1
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className={`flex items-center space-x-2 text-lg font-mono font-bold ${timeLeft < 300 ? 'text-red-400 animate-pulse' : 'text-white'}`}>
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
            {submitted ? `Score: ${score}/${passage.questions.length}` : 'Finish Test'}
          </Button>
        </div>
      </div>

      {/* Main Split Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* LEFT PANEL: Reading Passage */}
        <div className="w-1/2 bg-white border-r border-slate-300 overflow-y-auto p-10 shadow-inner">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 font-serif leading-snug">{passage.title}</h2>
          <div className="prose prose-lg max-w-none text-slate-800 leading-relaxed font-serif space-y-6">
            {passage.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL: Questions */}
        <div className="w-1/2 bg-slate-50 overflow-y-auto p-10">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 mb-6">
            <h3 className="font-bold text-lg mb-2 text-slate-900">Questions 1-{passage.questions.length}</h3>
            <p className="italic text-slate-600 mb-6">Do the following statements agree with the information given in the text?<br/>
            Select the appropriate option below:</p>
            <ul className="font-mono text-sm mb-8 bg-slate-100 p-5 rounded-lg border border-slate-200 text-slate-700 space-y-1 shadow-inner">
              <li><strong>TRUE</strong> if the statement agrees with the information</li>
              <li><strong>FALSE</strong> if the statement contradicts the information</li>
              <li><strong>NOT GIVEN</strong> if there is no information on this</li>
            </ul>

            <div className="space-y-10">
              {passage.questions.map((q, idx) => (
                <div key={q.id} className="flex flex-col space-y-4 pb-8 border-b border-slate-100 last:border-0">
                  <div className="flex space-x-4">
                    <span className="font-bold text-slate-800 bg-slate-200 w-8 h-8 flex items-center justify-center rounded-full shrink-0 shadow-sm">{idx + 1}</span>
                    <p className="text-slate-800 text-lg font-medium">{q.text}</p>
                  </div>
                  <div className="ml-12 flex space-x-4">
                    {q.options?.map(opt => {
                      const isSelected = answers[q.id] === opt;
                      const isCorrect = submitted && q.answer === opt;
                      const isWrongChoice = submitted && isSelected && q.answer !== opt;
                      
                      let btnClass = "bg-white hover:bg-slate-50 border-slate-300 text-slate-700";
                      if (isSelected) btnClass = "bg-blue-600 text-white border-blue-600";
                      if (submitted) {
                        if (isCorrect) btnClass = "bg-green-600 text-white border-green-600";
                        if (isWrongChoice) btnClass = "bg-red-500 text-white border-red-500";
                      }

                      return (
                        <label key={opt} className={`flex items-center justify-center px-5 py-2.5 border rounded-lg cursor-pointer transition-all shadow-sm ${btnClass}`}>
                          <input 
                            type="radio" 
                            name={`question-${q.id}`} 
                            value={opt} 
                            className="hidden" 
                            disabled={submitted}
                            onChange={() => handleAnswer(q.id, opt)} 
                          />
                          <span className="font-semibold text-sm">{opt}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="bg-white border-t border-slate-300 p-4 flex justify-center items-center shrink-0 space-x-2 overflow-x-auto shadow-md z-10">
        {passage.questions.map((q, i) => {
          const isAnswered = !!answers[q.id];
          return (
            <button 
              key={q.id}
              className={`w-10 h-10 flex items-center justify-center rounded-md border font-semibold text-sm transition-colors ${
                isAnswered 
                  ? 'bg-slate-800 text-white border-slate-900' 
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
            >
              {i + 1}
            </button>
          )
        })}
      </div>
    </div>
  );
}