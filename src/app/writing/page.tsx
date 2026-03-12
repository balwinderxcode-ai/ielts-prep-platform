"use client";
import { useState, useEffect } from "react";
import { writingTests } from "../../data/writingTests";
import { useTestStore } from "../../store";
import { Button } from "@/components/ui/Button";
import { WritingTest as WritingTestType } from "../../types";

export default function WritingTest() {
  const [selectedTest, setSelectedTest] = useState<WritingTestType | null>(null);
  const { completeWritingTask } = useTestStore();

  const [timeLeft, setTimeLeft] = useState(3600);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [currentTaskIdx, setCurrentTaskIdx] = useState(0);

  const handleSelectTest = (test: WritingTestType) => {
    setSelectedTest(test);
    setTimeLeft(test.timeLimitSeconds);
    setAnswers({});
    setSubmitted(false);
    setCurrentTaskIdx(0);
  };

  useEffect(() => {
    if (!selectedTest || timeLeft <= 0 || submitted) return;
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, submitted, selectedTest]);

  if (!selectedTest) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">Select a Writing Test</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {writingTests.map(t => (
            <div 
              key={t.id} 
              className="bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all cursor-pointer group" 
              onClick={() => handleSelectTest(t)}
            >
              <div className={`text-xs font-bold uppercase tracking-wider w-fit px-3 py-1 rounded-full mb-4 ${
                t.genre === 'academic' ? 'bg-blue-50 text-blue-700' : 'bg-green-50 text-green-700'
              }`}>
                {t.genre === 'academic' ? 'Academic' : 'General Training'}
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600">{t.title}</h2>
              <p className="text-slate-600 font-medium mb-6">2 Tasks • 60 Minutes</p>
              <Button className="w-full">Start Test</Button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const currentTask = selectedTest.tasks[currentTaskIdx];
  const wordCount = (answers[currentTask.id] || "").trim().split(/\s+/).filter(w => w.length > 0).length;

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const handleFinish = () => {
    if (submitted) return;
    completeWritingTask();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-slate-100 -mx-4 sm:-mx-6 lg:-mx-8 -my-8">
      {/* Top Navigation Bar */}
      <div className="bg-slate-900 text-white px-6 py-3 flex justify-between items-center shrink-0 shadow-lg z-30">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold tracking-wider hidden lg:block">{selectedTest.title}</h1>
          <div className="flex bg-slate-800 rounded-md overflow-hidden p-1">
            {selectedTest.tasks.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setCurrentTaskIdx(idx)}
                className={`px-4 py-1.5 text-sm font-semibold rounded-sm transition-colors ${
                  currentTaskIdx === idx ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                Task {idx + 1}
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
            {submitted ? 'Completed' : 'Finish Test'}
          </Button>
          <button onClick={() => setSelectedTest(null)} className="text-sm font-semibold text-slate-400 hover:text-white ml-2">Exit</button>
        </div>
      </div>

      {/* Main Split Content Area */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        
        {/* LEFT PANEL: Instructions */}
        <div className="w-full md:w-1/2 bg-white border-r border-slate-300 overflow-y-auto p-10 shadow-inner">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 font-serif">{currentTask.title}</h2>
          
          <div className="prose prose-lg max-w-none text-slate-800 leading-relaxed font-serif space-y-6">
            <p className="italic font-semibold text-slate-600">
              You should spend about {currentTask.type === 'task1' ? '20' : '40'} minutes on this task.
            </p>
            
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-sm text-lg font-medium leading-relaxed whitespace-pre-line">
              {currentTask.prompt}
            </div>

            {currentTask.imageUrl && (
              <div className="mt-8 border rounded-lg overflow-hidden shadow-md">
                <img src={currentTask.imageUrl} alt="Writing Task Visualization" className="w-full" />
              </div>
            )}
            
            <p className="font-bold border-t pt-6 text-slate-900">
              Write at least {currentTask.minWords} words.
            </p>
          </div>
        </div>

        {/* RIGHT PANEL: Editor */}
        <div className="w-full md:w-1/2 bg-slate-50 flex flex-col p-10 relative">
          <textarea
            disabled={submitted}
            value={answers[currentTask.id] || ""}
            onChange={(e) => setAnswers(prev => ({ ...prev, [currentTask.id]: e.target.value }))}
            className="flex-grow w-full bg-white border-2 border-slate-200 rounded-2xl outline-none p-10 font-sans text-xl leading-relaxed shadow-inner focus:border-blue-500 transition-all resize-none"
            placeholder="Type your response here..."
          ></textarea>

          {/* Floating Stats Bar */}
          <div className="absolute bottom-16 right-16 pointer-events-none">
            <div className="bg-slate-900/90 backdrop-blur text-white px-8 py-4 rounded-full shadow-2xl flex items-center space-x-6 border border-slate-700 pointer-events-auto">
              <div className="flex items-center space-x-2">
                <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">Words</span>
                <span className={`text-2xl font-mono font-black ${wordCount < currentTask.minWords ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {wordCount}
                </span>
              </div>
              <div className="w-px h-6 bg-slate-700"></div>
              <div className="flex items-center space-x-2">
                <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">Target</span>
                <span className="text-2xl font-mono font-black text-white">
                  {currentTask.minWords}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}