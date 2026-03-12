"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTestStore } from "../store";
import { Button } from "@/components/ui/Button";

export default function Home() {
  const { progress, resetProgress } = useTestStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const totalTests = isClient ? (progress.readingCompleted + progress.listeningCompleted + progress.writingCompleted + progress.speakingCompleted) : 0;
  
  const readingBand = progress.readingCompleted > 0 ? (progress.readingScore / (progress.readingCompleted * 40)) * 9 : 0;
  const listeningBand = progress.listeningCompleted > 0 ? (progress.listeningScore / (progress.listeningCompleted * 40)) * 9 : 0;
  const avgBand = totalTests > 0 ? ((readingBand + listeningBand) / (readingBand > 0 && listeningBand > 0 ? 2 : 1)).toFixed(1) : "0.0";

  return (
    <div className="max-w-6xl mx-auto py-12">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-black text-slate-900 tracking-tighter mb-4">
          IELTS<span className="text-blue-600">Pro</span>
        </h1>
        <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          The ultimate personal study tool. High-fidelity practice modules for every section of the computer-delivered IELTS exam.
        </p>
      </div>

      {/* Dashboard Card */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden mb-12 flex flex-col md:flex-row">
        <div className="p-10 md:w-2/3 border-b md:border-b-0 md:border-r border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome back!</h2>
          <p className="text-slate-500 font-medium mb-8">You have completed {totalTests} practice sessions so far. Keep going!</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <span className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Reading</span>
              <span className="text-2xl font-black text-slate-900">{isClient ? progress.readingCompleted : 0}</span>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <span className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Listening</span>
              <span className="text-2xl font-black text-slate-900">{isClient ? progress.listeningCompleted : 0}</span>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <span className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Writing</span>
              <span className="text-2xl font-black text-slate-900">{isClient ? progress.writingCompleted : 0}</span>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <span className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Speaking</span>
              <span className="text-2xl font-black text-slate-900">{isClient ? progress.speakingCompleted : 0}</span>
            </div>
          </div>
        </div>
        <div className="p-10 md:w-1/3 bg-slate-50/50 flex flex-col items-center justify-center text-center">
           <span className="text-sm font-black text-blue-600 uppercase tracking-[0.2em] mb-4">Estimated Band</span>
           <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-200 border-4 border-white mb-6">
              <span className="text-4xl font-black text-white">{isClient ? avgBand : "0.0"}</span>
           </div>
           <Button variant="outline" size="sm" onClick={resetProgress} className="text-xs">Reset Statistics</Button>
        </div>
      </div>

      {/* Module Selector */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: "Reading", path: "/reading", icon: "📖", color: "bg-emerald-500", desc: "40 Questions • 60 Mins" },
          { title: "Listening", path: "/listening", icon: "🎧", color: "bg-purple-500", desc: "40 Questions • 30 Mins" },
          { title: "Writing", path: "/writing", icon: "✍️", color: "bg-blue-500", desc: "2 Tasks • 60 Mins" },
          { title: "Speaking", path: "/speaking", icon: "💬", color: "bg-amber-500", desc: "3 Parts • 15 Mins" },
        ].map(m => (
          <Link href={m.path} key={m.title} className="group">
            <div className="bg-white p-8 rounded-3xl border-2 border-slate-200 group-hover:border-blue-500 group-hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center text-center">
              <div className={`w-16 h-16 ${m.color} text-white rounded-2xl text-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                {m.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">{m.title}</h3>
              <p className="text-slate-500 font-medium mb-4 text-sm">{m.desc}</p>
              <div className="mt-auto text-blue-600 font-black text-xs uppercase tracking-widest group-hover:translate-x-1 transition-transform flex items-center">
                Enter Module <span className="ml-2">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}