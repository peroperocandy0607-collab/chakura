import React, { useState } from 'react';
import { CHAKRAS } from '../constants';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ChakraIcon } from './ChakraIcons';
import DiagnosisButton from './DiagnosisButton';

const ChakraList: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const getColorClass = (colorName: string) => {
    // Mapping generic color names to Tailwind specific hex/classes for the logos
    switch (colorName) {
      case 'red-500': return 'text-red-500';
      case 'orange-500': return 'text-orange-500';
      case 'yellow-500': return 'text-yellow-500'; // Darker yellow for visibility
      case 'green-500': return 'text-green-600';
      case 'blue-500': return 'text-blue-500';
      case 'indigo-600': return 'text-indigo-600';
      case 'purple-600': return 'text-purple-600';
      default: return 'text-stone-400';
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto pt-8 pb-20 relative">
      <div className="mb-10 text-center px-4">
        <h2 className="text-3xl font-serif text-stone-800 mb-3">チャクラ一覧表</h2>
        <p className="text-stone-500 text-sm leading-relaxed">
          心と体のエネルギーセンター「チャクラ」。<br/>
          気になるチャクラを選んで、詳しい情報を確認しましょう。
        </p>
      </div>

      <div className="w-full px-4 space-y-4">
        {CHAKRAS.map((chakra) => (
          <button
            key={chakra.id}
            onClick={() => navigate(`/chakra/${chakra.id}`)}
            onMouseEnter={() => setHoveredId(chakra.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative w-full bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100 flex items-center justify-between"
          >
            <div className="flex items-center gap-6">
              <div className={`
                w-16 h-16 rounded-full flex items-center justify-center shrink-0
                transition-all duration-500 ease-out border border-stone-100
                ${hoveredId === chakra.id ? 'scale-105 bg-white shadow-md' : 'bg-stone-50'}
              `}>
                 <ChakraIcon 
                   id={chakra.id} 
                   className={`w-10 h-10 transition-transform duration-500 ${hoveredId === chakra.id ? 'rotate-12' : ''} ${getColorClass(chakra.themeColor)}`} 
                 />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold tracking-widest text-stone-400 uppercase mb-0.5">
                  No.{chakra.id}
                </span>
                <h3 className="text-lg font-medium text-stone-700 font-serif">
                  {chakra.name} <span className="text-stone-400 text-sm font-light ml-1">- {chakra.englishName}</span>
                </h3>
              </div>
            </div>
            
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center
              bg-stone-50 text-stone-400
              group-hover:bg-stone-100 group-hover:text-stone-600
              transition-colors duration-300
            `}>
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>
        ))}
      </div>
      
      {/* Floating Diagnosis Button (Bottom Right) */}
      <DiagnosisButton />
    </div>
  );
};

export default ChakraList;
