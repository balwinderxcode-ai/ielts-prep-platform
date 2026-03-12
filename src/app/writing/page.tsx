"use client";
import { useState } from "react";

export default function Writing() {
  const [text, setText] = useState("");
  const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-2">Writing Practice</h1>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
        <h2 className="text-xl font-bold mb-2">Task 2</h2>
        <p className="text-gray-700 font-medium mb-4">Some people think that universities should provide graduates with the knowledge and skills needed in the workplace. Others think that the true function of a university should be to give access to knowledge for its own sake, regardless of whether the course is useful to an employer.</p>
        <p className="text-sm text-gray-500 mb-4">Discuss both views and give your own opinion.</p>
        
        <textarea
          className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-y"
          placeholder="Start writing your essay here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        
        <div className="mt-4 flex justify-between items-center text-sm font-semibold">
          <span className={wordCount < 250 ? "text-red-500" : "text-green-600"}>Words: {wordCount} / 250</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition">Submit Essay</button>
        </div>
      </div>
    </div>
  );
}