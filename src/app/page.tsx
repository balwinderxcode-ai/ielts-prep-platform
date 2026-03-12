import Link from "next/link";

export default function Home() {
  const modules = [
    { 
      title: "Academic Reading Test", 
      path: "/reading", 
      desc: "Practice with actual computer-delivered IELTS interface. Split-screen layout with True/False/Not Given questions.", 
      color: "bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    },
    { 
      title: "Writing Task 2", 
      path: "/writing", 
      desc: "Real-time word counter and auto-save. Practice essay writing with a computer-delivered exam format.", 
      color: "bg-blue-50 text-blue-800 border-blue-200 hover:bg-blue-100",
      icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
    },
    { 
      title: "Listening Test", 
      path: "/listening", 
      desc: "Interactive audio playback with fill-in-the-blank transcripts. Real-time answer validation.", 
      color: "bg-purple-50 text-purple-800 border-purple-200 hover:bg-purple-100",
      icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
    },
    { 
      title: "Speaking Part 2", 
      path: "/speaking", 
      desc: "Live microphone recording. Practice your 2-minute long turn with playback and mock cue cards.", 
      color: "bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100",
      icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-start pt-8 pb-16">
      <div className="text-center max-w-3xl mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
          Master the Computer-Delivered IELTS Exam
        </h1>
        <p className="text-xl text-gray-600 font-medium">
          Experience the exact UI of the real test. Practice your reading, writing, listening, and speaking skills in a production-grade environment.
        </p>
      </div>

      {/* Dashboard Stats */}
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Your Dashboard</h2>
          <p className="text-gray-500 font-medium">Track your progress across all 4 modules.</p>
        </div>
        <div className="flex space-x-12">
          <div className="text-center">
            <span className="block text-4xl font-extrabold text-blue-600">0</span>
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Tests Taken</span>
          </div>
          <div className="text-center">
            <span className="block text-4xl font-extrabold text-emerald-600">0.0</span>
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Avg Band</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {modules.map((m) => (
          <Link href={m.path} key={m.title} className={`block p-8 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${m.color}`}>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={m.icon} />
                </svg>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">{m.title}</h2>
            </div>
            <p className="text-lg font-medium opacity-90 leading-relaxed">{m.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}