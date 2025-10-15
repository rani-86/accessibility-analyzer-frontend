import React, { useState } from "react";
import ScanForm from "./components/ScanForm";
import Results from "./components/Results";

function App() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // 🌙 Add dark mode state

  return (
    // 🌓 Apply dark/light mode styles to the whole page
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white min-h-screen transition-colors duration-500"
          : "bg-gray-100 text-gray-900 min-h-screen transition-colors duration-500"
      }
    >
      {/* 🌗 Toggle Button (top-right corner) */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-6 bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-600 transition"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* 🧩 Main App Container */}
      <div className="max-w-3xl mx-auto p-4 font-sans">
        <h1 className="text-3xl font-bold text-center mb-6">
          Accessibility Analyzer
        </h1>

        <ScanForm setResults={setResults} setLoading={setLoading} />

        {/* ✅ Show spinner while loading */}
        {loading && (
          <div className="flex flex-col items-center mt-6">
            {/* Spinner */}
            <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>

            {/* Optional loading text below spinner */}
            <p className="text-blue-400 mt-3 font-medium">
              Scanning... Please wait ⏳
            </p>
          </div>
        )}

        {/* ✅ Show results when loaded */}
        <Results results={results} />
      </div>
    </div>
  );
}

export default App;

