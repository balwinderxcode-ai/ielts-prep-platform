export default function Speaking() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-2">Speaking Practice</h1>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mb-6">
          <h2 className="text-xl font-bold text-amber-900 mb-3">Part 2: Long Turn</h2>
          <p className="text-amber-800 font-medium mb-4">Describe a time when you helped someone.</p>
          <ul className="list-disc pl-5 text-amber-900/80 mb-6 space-y-2">
            <li>who you helped and why</li>
            <li>how you helped this person</li>
            <li>what the result was</li>
            <li>and explain how you felt about helping this person.</li>
          </ul>
          <p className="text-sm font-semibold text-amber-700">You will have to talk about the topic for 1 to 2 minutes.</p>
          <p className="text-sm font-semibold text-amber-700">You have 1 minute to think about what you are going to say.</p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 py-8 border-t">
          <button className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </button>
          <p className="font-semibold text-gray-600">Start Recording</p>
        </div>
      </div>
    </div>
  );
}