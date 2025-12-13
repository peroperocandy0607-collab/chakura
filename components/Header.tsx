import React from 'react';
import { Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white/80 backdrop-blur-sm border-b border-stone-100 sticky top-0 z-50">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-center">
        <div className="flex items-center gap-2 text-stone-700">
          <Sparkles className="w-5 h-5 text-stone-400" />
          <h1 className="text-xl font-serif tracking-widest uppercase">Chakra Harmony</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
