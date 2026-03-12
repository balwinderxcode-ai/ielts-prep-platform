"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ReadingTest() {
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes for full reading
  const [currentPassage, setCurrentPassage] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

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

  const handleAnswer = (qNum: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [qNum]: answer }));
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-gray-100 -mx-4 sm:-mx-6 lg:-mx-8 -my-8">
      {/* Top Navigation Bar - Exam Style */}
      <div className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center shrink-0">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold tracking-wider">IELTS Academic Reading</h1>
          <div className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-300">
            Passage {currentPassage} of 3
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className={`flex items-center space-x-2 text-lg font-mono font-bold ${timeLeft < 300 ? 'text-red-400 animate-pulse' : 'text-white'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{formatTime(timeLeft)}</span>
          </div>
          <button 
            onClick={() => setSubmitted(true)}
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded font-bold transition-colors"
          >
            Finish Test
          </button>
        </div>
      </div>

      {/* Main Split Content Area */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* LEFT PANEL: Reading Passage */}
        <div className="w-1/2 bg-white border-r border-gray-300 overflow-y-auto p-8 shadow-inner">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 font-serif">The Life and Work of Marie Curie</h2>
          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed font-serif">
            <p className="mb-6">
              Marie Curie is probably the most famous woman scientist who has ever lived. Born Maria Sklodowska in Poland in 1867, she is famous for her work on radioactivity, and was twice a winner of the Nobel Prize. With her husband, Pierre Curie, and Henri Becquerel, she was awarded the 1903 Nobel Prize for Physics, and was then sole winner of the 1911 Nobel Prize for Chemistry.
            </p>
            <p className="mb-6">
              From childhood, Marie was remarkable for her prodigious memory, and at the age of 16 won a gold medal on completion of her secondary education. Because her father lost his savings through bad investment, she then had to take work as a teacher. From her earnings she was able to finance her sister Bronia's medical studies in Paris, on the understanding that Bronia would, in turn, later help her to get an education.
            </p>
            <p className="mb-6">
              In 1891 this promise was fulfilled and Marie went to Paris and began to study at the Sorbonne (the University of Paris). She often worked far into the night and lived on little more than bread and butter and tea. She came first in the examination in the physical sciences in 1893, and in 1894 was placed second in the examination in mathematical sciences. It was not until the spring of that year that she was introduced to Pierre Curie.
            </p>
          </div>
        </div>

        {/* RIGHT PANEL: Questions */}
        <div className="w-1/2 bg-gray-50 overflow-y-auto p-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
            <h3 className="font-bold text-lg mb-2">Questions 1-3</h3>
            <p className="italic text-gray-600 mb-6">Do the following statements agree with the information given in Reading Passage 1?<br/>
            In boxes 1-3 on your answer sheet, write:</p>
            <ul className="font-mono text-sm mb-6 bg-gray-100 p-4 rounded border">
              <li><strong>TRUE</strong> if the statement agrees with the information</li>
              <li><strong>FALSE</strong> if the statement contradicts the information</li>
              <li><strong>NOT GIVEN</strong> if there is no information on this</li>
            </ul>

            <div className="space-y-8">
              {/* Q1 */}
              <div className="flex flex-col space-y-3 pb-6 border-b">
                <div className="flex space-x-4">
                  <span className="font-bold text-gray-900 bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full shrink-0">1</span>
                  <p className="text-gray-800 text-lg">Marie Curie's husband was a joint winner of both Marie's Nobel Prizes.</p>
                </div>
                <div className="ml-12 flex space-x-4">
                  {['TRUE', 'FALSE', 'NOT GIVEN'].map(opt => (
                    <label key={opt} className={`flex items-center justify-center px-4 py-2 border rounded cursor-pointer transition-colors ${answers[1] === opt ? 'bg-blue-600 text-white border-blue-600' : 'bg-white hover:bg-gray-100'}`}>
                      <input type="radio" name="q1" value={opt} className="hidden" onChange={() => handleAnswer(1, opt)} />
                      <span className="font-semibold text-sm">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Q2 */}
              <div className="flex flex-col space-y-3 pb-6 border-b">
                <div className="flex space-x-4">
                  <span className="font-bold text-gray-900 bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full shrink-0">2</span>
                  <p className="text-gray-800 text-lg">Marie became interested in science when she was a child.</p>
                </div>
                <div className="ml-12 flex space-x-4">
                  {['TRUE', 'FALSE', 'NOT GIVEN'].map(opt => (
                    <label key={opt} className={`flex items-center justify-center px-4 py-2 border rounded cursor-pointer transition-colors ${answers[2] === opt ? 'bg-blue-600 text-white border-blue-600' : 'bg-white hover:bg-gray-100'}`}>
                      <input type="radio" name="q2" value={opt} className="hidden" onChange={() => handleAnswer(2, opt)} />
                      <span className="font-semibold text-sm">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Q3 */}
              <div className="flex flex-col space-y-3">
                <div className="flex space-x-4">
                  <span className="font-bold text-gray-900 bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full shrink-0">3</span>
                  <p className="text-gray-800 text-lg">Marie was able to attend the Sorbonne because of her sister's financial contribution.</p>
                </div>
                <div className="ml-12 flex space-x-4">
                  {['TRUE', 'FALSE', 'NOT GIVEN'].map(opt => (
                    <label key={opt} className={`flex items-center justify-center px-4 py-2 border rounded cursor-pointer transition-colors ${answers[3] === opt ? 'bg-blue-600 text-white border-blue-600' : 'bg-white hover:bg-gray-100'}`}>
                      <input type="radio" name="q3" value={opt} className="hidden" onChange={() => handleAnswer(3, opt)} />
                      <span className="font-semibold text-sm">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="bg-white border-t border-gray-300 p-4 flex justify-center items-center shrink-0 space-x-2 overflow-x-auto shadow-md z-10">
        {[...Array(13)].map((_, i) => (
          <button 
            key={i+1}
            className={`w-10 h-10 flex items-center justify-center rounded-sm border font-semibold text-sm transition-colors ${
              answers[i+1] 
                ? 'bg-blue-800 text-white border-blue-900' 
                : 'bg-white text-gray-700 border-gray-400 hover:bg-gray-100'
            }`}
          >
            {i+1}
          </button>
        ))}
        <div className="w-px h-8 bg-gray-400 mx-4"></div>
        <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm font-semibold flex items-center">
          Next Passage
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </div>
  );
}