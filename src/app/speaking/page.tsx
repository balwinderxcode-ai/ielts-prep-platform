"use client";
import { useState, useRef } from "react";
import { mockSpeakingParts } from "../../data/mock";
import { useTestStore } from "../../store";
import { Button } from "@/components/ui/Button";

export default function SpeakingTest() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  
  const part = mockSpeakingParts[0];
  const { completeSpeakingTask } = useTestStore();

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);
        
        completeSpeakingTask();
        setSubmitted(true);
      };

      mediaRecorder.start();
      setIsRecording(true);
      setAudioURL(null); // Clear previous
    } catch (error) {
      console.error("Error accessing microphone:", error);
      alert("Please allow microphone access to practice speaking.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-slate-100 -mx-4 sm:-mx-6 lg:-mx-8 -my-8">
      {/* Top Navigation Bar - Exam Style */}
      <div className="bg-slate-900 text-white px-6 py-3 flex justify-between items-center shrink-0 shadow-sm z-10">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold tracking-wider">IELTS Speaking Practice</h1>
          <div className="bg-slate-800 px-3 py-1 rounded text-sm text-slate-300 font-medium">
            Part {part.part}
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <Button 
            disabled={true}
            className={`${submitted ? 'bg-green-600' : 'bg-blue-600'}`}
          >
            {submitted ? 'Practice Completed' : 'Recording Pending'}
          </Button>
        </div>
      </div>

      {/* Main Split Content Area */}
      <div className="flex flex-1 overflow-hidden items-center justify-center bg-slate-50 p-10">
        
        <div className="w-full max-w-4xl bg-white p-12 rounded-2xl shadow-xl border border-slate-200">
          
          <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-12">
            
            {/* LEFT: Cue Card */}
            <div className="md:w-1/2 p-10 bg-amber-50 rounded-2xl border-2 border-amber-200 shadow-inner">
              <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">{part.title}</h2>
              <div className="prose text-amber-900 text-lg leading-relaxed font-medium">
                <p className="font-bold">{part.instructions}</p>
                <ul className="list-disc pl-6 space-y-3 mt-4">
                  {part.prompts.map((prompt, idx) => (
                    <li key={idx} className="text-amber-800">{prompt}</li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-amber-300">
                  <p className="text-sm font-bold text-amber-700">You will have to talk about the topic for 1 to 2 minutes.</p>
                  <p className="text-sm font-bold text-amber-700">You have 1 minute to think about what you are going to say.</p>
                </div>
              </div>
            </div>

            {/* RIGHT: Recording Controls */}
            <div className="md:w-1/2 flex flex-col items-center justify-center p-8 border-2 border-dashed border-slate-300 rounded-2xl bg-slate-50 relative">
              
              <div className="flex flex-col items-center justify-center mb-10 space-y-6">
                {!isRecording ? (
                  <button 
                    onClick={startRecording}
                    className="w-32 h-32 bg-rose-600 hover:bg-rose-700 text-white rounded-full shadow-2xl transition-transform hover:scale-105 flex items-center justify-center group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </button>
                ) : (
                  <button 
                    onClick={stopRecording}
                    className="w-32 h-32 bg-slate-800 hover:bg-slate-900 text-white rounded-full shadow-2xl transition-transform hover:scale-105 animate-pulse flex items-center justify-center border-4 border-rose-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="6" y="6" width="12" height="12" rx="2" strokeWidth={2} />
                    </svg>
                  </button>
                )}
                
                <p className={`text-xl font-bold tracking-tight ${isRecording ? 'text-rose-600 animate-pulse' : 'text-slate-700'}`}>
                  {isRecording ? "Recording... Click square to stop" : "Click mic to start recording"}
                </p>
              </div>

              {/* Playback Container */}
              {audioURL && (
                <div className="w-full mt-4 p-6 bg-white rounded-xl shadow border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <p className="text-sm font-bold text-slate-800 mb-3 flex items-center tracking-wide uppercase">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c-1.105 0-2-.895-2-2V7c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2v10c0 1.105-.895 2-2 2h-12z" />
                    </svg>
                    Your Recording
                  </p>
                  <audio src={audioURL} controls className="w-full" />
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}