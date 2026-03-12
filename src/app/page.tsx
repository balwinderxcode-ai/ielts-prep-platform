import Link from "next/link";

export default function Home() {
  const modules = [
    { title: "Reading", path: "/reading", desc: "Practice passages with timer and explanations.", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { title: "Writing", path: "/writing", desc: "Task 1 & 2 practice with word count.", color: "bg-blue-50 text-blue-700 border-blue-200" },
    { title: "Listening", path: "/listening", desc: "Interactive audio answers.", color: "bg-purple-50 text-purple-700 border-purple-200" },
    { title: "Speaking", path: "/speaking", desc: "Real questions for fluency practice.", color: "bg-amber-50 text-amber-700 border-amber-200" }
  ];

  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <div className="text-center max-w-2xl mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-4">Master the IELTS Exam</h1>
        <p className="text-lg text-gray-600">Your complete, modern preparation platform. Choose a module below to start practicing.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {modules.map((m) => (
          <Link href={m.path} key={m.title} className={`block p-6 rounded-2xl border-2 transition hover:-translate-y-1 hover:shadow-lg ${m.color}`}>
            <h2 className="text-2xl font-bold mb-2">{m.title}</h2>
            <p className="opacity-90">{m.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}