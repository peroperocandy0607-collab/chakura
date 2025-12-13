import React from 'react';
import { Sparkles } from 'lucide-react';

const DiagnosisButton: React.FC = () => {
  return (
    <a
      href="https://sdasjjep.gensparkspace.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group no-underline"
      aria-label="チャクラ診断を受ける"
    >
      <div className="relative flex flex-col items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-100 to-rose-200 rounded-full shadow-lg border border-white/50 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl group-hover:-translate-y-1">
        <Sparkles className="w-6 h-6 text-rose-500 mb-1" />
        <span className="text-[10px] font-bold text-rose-700 tracking-tighter leading-tight text-center">
          チャクラ<br/>診断
        </span>
        
        {/* Subtle decorative ring ping animation */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
        </span>
      </div>
    </a>
  );
};

export default DiagnosisButton;
