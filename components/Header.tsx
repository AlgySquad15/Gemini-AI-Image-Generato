
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full p-4 border-b border-gray-700/50 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex items-center gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm3.414 7.586a2 2 0 10-2.828-2.828 2 2 0 002.828 2.828zm-6.828 0a2 2 0 10-2.828-2.828 2 2 0 002.828 2.828zM12 18a4 4 0 003.464-6H8.536A4 4 0 0012 18z" />
        </svg>
        <h1 className="text-2xl font-semibold text-gray-100 tracking-tight">
          Gemini AI Image Generator
        </h1>
      </div>
    </header>
  );
};

export default Header;
