"use client";
import { useState } from "react";

export default function Listening() {
  const [answers, setAnswers] = useState({ q1: "", q2: "" });
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const correctAnswers = { q1: "15th August", q2: "Double" };

  const handleSubmit = () => {
    let currentScore = 0;
    // Basic fuzzy match / lowercase match for IELTS
    if (answers.q1.toLowerCase().trim() === correctAnswers.q1.toLowerCase()) currentScore++;
    if (answers.q2.toLowerCase().trim() === correctAnswers.q2.toLowerCase()) currentScore++;
    setScore(currentScore);
    setSubmitted(true);
    
    const progress = JSON.parse(localStorage.getItem("ielts_progress") || "{}");
    progress.listening = (progress.listening || 0) + 1;
    localStorage.setItem("ielts_progress", JSON.stringify(progress));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-2">Listening Practice</h1>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        
        {/* Real Audio Player */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-8 shadow-inner">
          <p className="text-blue-900 font-bold mb-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            Section 1 Audio
          </p>
          <audio 
            controls 
            className="w-full rounded-md"
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
          >
            Your browser does not support the audio element.
          </audio>
          <p className="text-xs text-blue-600 mt-2 italic">* Using a royalty-free placeholder track for demonstration.</p>
        </div>

        <div className="border-t pt-6">
          <h3 className="font-bold text-xl text-gray-900 mb-2">Section 1: Hotel Booking</h3>
          <p className="mb-6 text-gray-600 italic font-medium bg-amber-50 p-3 rounded-lg border border-amber-100 inline-block">
            Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.
          </p>
          
          <div className="space-y-6 max-w-lg">
            {/* Question 1 */}
            <div className="bg-gray-50 p-4 rounded-lg border flex flex-col space-y-2">
              <div className="flex items-center space-x-3">
                <span className="font-bold text-gray-700 bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center">1</span>
                <span className="text-gray-800 font-medium">Date of arrival:</span>
                <input 
                  type="text" 
                  value={answers.q1}
                  disabled={submitted}
                  onChange={(e) => setAnswers({...answers, q1: e.target.value})}
                  className={`flex-1 border-b-2 bg-transparent outline-none px-2 py-1 font-medium transition-colors ${
                    submitted 
                      ? answers.q1.toLowerCase().trim() === correctAnswers.q1.toLowerCase() 
                        ? 'border-green-500 text-green-700' 
                        : 'border-red-500 text-red-700'
                      : 'border-gray-300 focus:border-blue-500 text-blue-800'
                  }`} 
                  placeholder="e.g. 15th August"
                />
              </div>
              {submitted && answers.q1.toLowerCase().trim() !== correctAnswers.q1.toLowerCase() && (
                <p className="text-sm text-green-600 font-semibold ml-11">Correct answer: {correctAnswers.q1}</p>
              )}
            </div>

            {/* Question 2 */}
            <div className="bg-gray-50 p-4 rounded-lg border flex flex-col space-y-2">
              <div className="flex items-center space-x-3">
                <span className="font-bold text-gray-700 bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center">2</span>
                <span className="text-gray-800 font-medium">Room type:</span>
                <input 
                  type="text" 
                  value={answers.q2}
                  disabled={submitted}
                  onChange={(e) => setAnswers({...answers, q2: e.target.value})}
                  className={`flex-1 border-b-2 bg-transparent outline-none px-2 py-1 font-medium transition-colors ${
                    submitted 
                      ? answers.q2.toLowerCase().trim() === correctAnswers.q2.toLowerCase() 
                        ? 'border-green-500 text-green-700' 
                        : 'border-red-500 text-red-700'
                      : 'border-gray-300 focus:border-blue-500 text-blue-800'
                  }`} 
                  placeholder="e.g. Double"
                />
              </div>
              {submitted && answers.q2.toLowerCase().trim() !== correctAnswers.q2.toLowerCase() && (
                <p className="text-sm text-green-600 font-semibold ml-11">Correct answer: {correctAnswers.q2}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t pt-6">
          {submitted ? (
            <div className={`px-4 py-2 rounded-lg font-bold ${score === 2 ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
              Your Score: {score} / 2
            </div>
          ) : (
            <div></div> // Spacer
          )}
          
          <button
            onClick={handleSubmit}
            disabled={submitted || (!answers.q1 && !answers.q2)}
            className={`px-6 py-3 rounded-lg font-bold text-white transition ${
              submitted || (!answers.q1 && !answers.q2)
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 shadow-md'
            }`}
          >
            {submitted ? 'Submitted' : 'Check Answers'}
          </button>
        </div>

      </div>
    </div>
  );
}