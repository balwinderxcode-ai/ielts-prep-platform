"use client";
import { useState, useRef, useEffect } from "react";
import { speakingTests } from "../../data/speakingTests";
import { useTestStore } from "../../store";
import { Button } from "@/components/ui/Button";
import { SpeakingTest as SpeakingTestType } from "../../types";

export default function SpeakingTest() {
  const [selectedTest, setSelectedTest] = useState<SpeakingTestType | null>(null);
  const { completeSpeakingTask } = useTestStore();

  const [currentPartIdx, setCurrentPartIdx] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [prepTime, setPrepTime] = useState(60); // 1 minute prep for Part 2
  const [speakTime, setSpeakTime] = useState(120); // 2 minutes speak for Part 2
  const [timerActive, setTimerActive] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const handleSelectTest = (test: SpeakingTestType) => {
    setSelectedTest(test);
    setCurrentPartIdx(0);
    setAudioURL(null);
    setSubmitted(false);
    setTimerActive(false);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerActive && selectedTest?.parts[currentPartIdx].part === 2) {
      interval = setInterval(() => {
        if (prepTime > 0) setPrepTime(p => p - 1);
        else if (speakTime > 0) setSpeakTime(s => s - 1);
        else setTimerActive(false);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive, prepTime, speakTime, currentPartIdx, selectedTest]);

  if (!selectedTest) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">Select a Speaking Practice</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {speakingTests.map(t => (
            <div 
              key={t.id} 
              className="bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all cursor-pointer group" 
              onClick={() => handleSelectTest(t)}
            >
              <div className="bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider w-fit px-3 py-1 rounded-full mb-4">Interview Mode</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600">{t.title}</h2>
              <p className="text-slate-600 font-medium mb-6">3 Parts • 11–14 Minutes • Recording Enabled</p>
              <Button className="w-full">Start Practice</Button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const currentPart = selectedTest.parts[currentPartIdx];

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        setAudioURL(URL.createObjectURL(blob));
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      alert("Microphone access denied.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      mediaRecorderRef.current.stream.getTracks().forEach(t => t.stop());
    }
  };

  const handleNext = () => {
    if (currentPartIdx < selectedTest.parts.length - 1) {
      setCurrentPartIdx(prev => prev + 1);
      setAudioURL(null);
      setTimerActive(false);
    } else {
      completeSpeakingTask();
      setSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-slate-100 -mx-4 sm:-mx-6 lg:-mx-8 -my-8">
      {/* Top Navigation Bar */}
      <div className="bg-slate-900 text-white px-6 py-3 flex justify-between items-center shrink-0 shadow-lg z-30">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold tracking-wider hidden lg:block">{selectedTest.title}</h1>
          <div className="flex bg-slate-800 rounded-md overflow-hidden p-1">
            {selectedTest.parts.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => { setCurrentPartIdx(idx); setAudioURL(null); }}
                className={`px-4 py-1.5 text-sm font-semibold rounded-sm transition-colors ${
                  currentPartIdx === idx ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                Part {idx + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button onClick={handleNext} disabled={submitted} className={`${submitted ? 'bg-green-600' : 'bg-blue-600'}`}>
            {submitted ? 'Completed' : currentPartIdx === 2 ? 'Finish Practice' : 'Next Part'}
          </Button>
          <button onClick={() => setSelectedTest(null)} className="text-sm font-semibold text-slate-400 hover:text-white ml-2">Exit</button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-10 bg-slate-50 flex flex-col items-center">
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* LEFT: Cue Card / Prompts */}
          <div className="bg-amber-50 p-10 rounded-2xl border-2 border-amber-200 shadow-inner">
            <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">{currentPart.title}</h2>
            <p className="text-amber-800 font-bold mb-6 text-lg">{currentPart.instructions}</p>
            
            <ul className="space-y-4">
              {currentPart.prompts.map((p, i) => (
                <li key={i} className="flex items-start space-x-3 text-amber-900 font-medium text-lg leading-relaxed">
                  <span className="shrink-0 w-2 h-2 mt-3 bg-amber-400 rounded-full"></span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            {currentPart.part === 2 && (
              <div className="mt-10 pt-8 border-t border-amber-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-amber-600 mb-2">Preparation</p>
                    <p className={`text-3xl font-mono font-bold ${prepTime > 0 ? 'text-amber-900' : 'text-slate-400'}`}>
                      00:{prepTime.toString().padStart(2, '0')}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-amber-600 mb-2">Speaking</p>
                    <p className={`text-3xl font-mono font-bold ${prepTime === 0 && speakTime > 0 ? 'text-amber-900' : 'text-slate-400'}`}>
                      {Math.floor(speakTime / 60)}:{(speakTime % 60).toString().padStart(2, '0')}
                    </p>
                  </div>
                </div>
                {!timerActive && prepTime === 60 && (
                  <Button variant="outline" className="w-full mt-6 border-amber-400 text-amber-800 hover:bg-amber-100" onClick={() => setTimerActive(true)}>
                    Start Timers
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* RIGHT: Recording UI */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center justify-center">
            <div className="mb-10 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Record Your Response</h3>
              <p className="text-slate-500 font-medium">Test your fluency and coherence.</p>
            </div>

            <div className="relative flex flex-col items-center">
              {!isRecording ? (
                <button 
                  onClick={startRecording}
                  className="w-32 h-32 bg-rose-600 hover:bg-rose-700 text-white rounded-full shadow-2xl transition-all hover:scale-105 flex items-center justify-center group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </button>
              ) : (
                <button 
                  onClick={stopRecording}
                  className="w-32 h-32 bg-slate-900 hover:bg-black text-white rounded-full shadow-2xl transition-all hover:scale-105 animate-pulse flex items-center justify-center border-4 border-rose-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="6" y="6" width="12" height="12" rx="2" />
                  </svg>
                </button>
              )}
              
              <p className={`mt-6 text-lg font-bold tracking-tight ${isRecording ? 'text-rose-600 animate-bounce' : 'text-slate-700'}`}>
                {isRecording ? "Recording..." : "Start Mic"}
              </p>
            </div>

            {audioURL && (
              <div className="mt-10 w-full p-6 bg-slate-50 rounded-xl border border-slate-200 animate-in fade-in slide-in-from-bottom-4">
                <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-3">Playback</p>
                <audio src={audioURL} controls className="w-full" />
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}