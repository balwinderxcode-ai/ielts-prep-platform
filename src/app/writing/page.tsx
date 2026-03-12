"use client";
import { useState, useEffect } from "react";
import { mockWritingTasks } from "../../data/mock";
import { useTestStore } from "../../store";
import { Button } from "@/components/ui/Button";

export default function WritingTest() {
  const [text, setText] = useState("");
  const [saved, setSaved] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const task = mockWritingTasks[0];
  const { completeWritingTask } = useTestStore();

  useEffect(() => {
    const savedData = localStorage.getItem(`ielts_writing_${task.id}`);
    if (savedData && !submitted) setText(savedData);
  }, [task.id, submitted]);

  const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;

  const handleSave = () => {
    if (submitted) return;
    localStorage.setItem(`ielts_writing_${task.id}`, text);
    
    completeWritingTask();
    setSubmitted(true);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-slate-100 -mx-4 sm:-mx-6 lg:-mx-8 -my-8">
      {/* Top Navigation Bar - Exam Style */}
      <div className="bg-slate-900 text-white px-6 py-3 flex justify-between items-center shrink-0 shadow-sm z-10">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold tracking-wider">IELTS Academic Writing</h1>
          <div className="bg-slate-800 px-3 py-1 rounded text-sm text-slate-300 font-medium">
            Task 2
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className={`flex items-center space-x-2 text-lg font-mono font-bold text-white`}>
            <span>60:00</span>
          </div>
          <Button 
            onClick={handleSave}
            disabled={submitted || text.length === 0}
            className={`${submitted ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {submitted ? 'Test Submitted' : 'Submit Test'}
          </Button>
        </div>
      </div>

      {/* Main Split Content Area */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* LEFT PANEL: Task Instructions */}
        <div className="w-1/2 bg-white border-r border-slate-300 overflow-y-auto p-10 shadow-inner">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 font-serif">Writing Task 2</h2>
          
          <div className="prose max-w-none text-slate-800 leading-relaxed font-serif text-lg mb-8">
            <p className="font-semibold text-slate-600 italic mb-4">You should spend about 40 minutes on this task.</p>
            <p className="font-semibold mb-6">Write about the following topic:</p>
            
            <div className="p-8 bg-blue-50 border border-blue-100 rounded-xl text-slate-800 shadow-sm font-medium">
              {task.prompt}
            </div>
            
            <p className="font-semibold text-slate-600 italic mt-8 mb-4">Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
            <p className="font-bold">Write at least {task.minWords} words.</p>
          </div>
        </div>

        {/* RIGHT PANEL: Text Editor */}
        <div className="w-1/2 bg-slate-50 flex flex-col p-10 relative">
          
          <textarea
            className="flex-1 w-full p-8 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none resize-none text-slate-800 text-lg leading-relaxed shadow-sm font-sans"
            placeholder="Start writing your essay here..."
            value={text}
            disabled={submitted}
            onChange={(e) => {
              setText(e.target.value);
              setSaved(false);
            }}
          ></textarea>
          
          <div className="absolute bottom-16 right-16 flex items-center justify-between pointer-events-none">
            <div className="flex items-center space-x-4 bg-slate-900/80 backdrop-blur-md px-6 py-3 rounded-full text-white shadow-xl pointer-events-auto border border-slate-700">
              <span className={`font-mono text-lg font-bold ${wordCount < task.minWords ? "text-amber-400" : "text-emerald-400"}`}>
                Word count: {wordCount}
              </span>
              {saved && (
                <span className="text-emerald-400 font-medium text-sm border-l border-slate-600 pl-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Saved
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}