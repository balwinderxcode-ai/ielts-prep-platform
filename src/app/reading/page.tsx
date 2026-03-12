"use client";
import { useState, useEffect } from "react";

export default function Reading() {
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

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

  const correctAnswers: Record<string, string> = {
    q1: "Telegraph and telephone",
    q2: "ARPANET",
  };

  const handleSubmit = () => {
    let currentScore = 0;
    if (answers.q1 === correctAnswers.q1) currentScore++;
    if (answers.q2 === correctAnswers.q2) currentScore++;
    setScore(currentScore);
    setSubmitted(true);

    const progress = JSON.parse(localStorage.getItem("ielts_progress") || "{}");
    progress.reading = (progress.reading || 0) + 1;
    localStorage.setItem("ielts_progress", JSON.stringify(progress));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6 border-b pb-2">
        <h1 className="text-3xl font-bold text-gray-900">Reading Practice</h1>
        <div className={`text-xl font-mono font-bold px-4 py-2 rounded-lg ${timeLeft < 300 ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-800'}`}>
          ⏱ {formatTime(timeLeft)}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Passage 1: The History of the Internet</h2>
        <div className="prose max-w-none text-gray-700 leading-relaxed mb-8 h-64 overflow-y-auto p-4 bg-gray-50 border rounded-lg">
          <p className="mb-4">
            The Internet has revolutionized the computer and communications world like nothing before. The invention of the telegraph, telephone, radio, and computer set the stage for this unprecedented integration of capabilities.
          </p>
          <p className="mb-4">
            The Internet is at once a world-wide broadcasting capability, a mechanism for information dissemination, and a medium for collaboration and interaction between individuals and their computers without regard for geographic location.
          </p>
          <p>
            It represents one of the most successful examples of the benefits of sustained investment and commitment to research and development of information infrastructure. Beginning with the early research in packet switching, the government, industry and academia have been partners in evolving and deploying this exciting new technology. The first network to use this technology was ARPANET, established in 1969.
          </p>
        </div>

        <div className="border-t pt-6 space-y-6">
          <h3 className="font-bold text-lg text-gray-900">Questions 1-2</h3>
          <p className="text-sm text-gray-600 italic">Choose the correct letter, A, B, C or D.</p>

          {/* Question 1 */}
          <div className="bg-gray-50 p-4 rounded-lg border">
            <p className="font-medium text-gray-800 mb-3">1. What inventions set the stage for the Internet?</p>
            <div className="space-y-2">
              {["Telegraph and telephone", "Automobiles and airplanes", "Television and cinema", "Spacecraft and satellites"].map((opt) => (
                <label key={opt} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="q1"
                    value={opt}
                    disabled={submitted}
                    onChange={(e) => setAnswers({ ...answers, q1: e.target.value })}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className={`text-gray-700 ${submitted && opt === correctAnswers.q1 ? 'font-bold text-green-600' : ''} ${submitted && answers.q1 === opt && answers.q1 !== correctAnswers.q1 ? 'text-red-500 line-through' : ''}`}>
                    {opt}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Question 2 */}
          <div className="bg-gray-50 p-4 rounded-lg border">
            <p className="font-medium text-gray-800 mb-3">2. Which was the first network to use packet switching technology?</p>
            <div className="space-y-2">
              {["NSFNET", "ARPANET", "Ethernet", "Intranet"].map((opt) => (
                <label key={opt} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="q2"
                    value={opt}
                    disabled={submitted}
                    onChange={(e) => setAnswers({ ...answers, q2: e.target.value })}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className={`text-gray-700 ${submitted && opt === correctAnswers.q2 ? 'font-bold text-green-600' : ''} ${submitted && answers.q2 === opt && answers.q2 !== correctAnswers.q2 ? 'text-red-500 line-through' : ''}`}>
                    {opt}
                  </span>
                </label>
              ))}
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
            disabled={submitted || Object.keys(answers).length < 2}
            className={`px-6 py-3 rounded-lg font-bold text-white transition ${
              submitted || Object.keys(answers).length < 2
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 shadow-md'
            }`}
          >
            {submitted ? 'Submitted' : 'Submit Answers'}
          </button>
        </div>
      </div>
    </div>
  );
}