import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CHAKRAS } from '../constants';
import { ArrowLeft, Sparkles, AlertCircle, HeartPulse, Leaf } from 'lucide-react';

const ChakraDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const chakra = CHAKRAS.find((c) => c.id === Number(id));

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!chakra) {
    return <div className="p-10 text-center text-stone-500">Chakra not found.</div>;
  }

  const getHeaderColor = (themeColor: string) => {
     // Return a soft background color based on the theme
     switch (themeColor) {
      case 'red-500': return 'bg-red-50';
      case 'orange-500': return 'bg-orange-50';
      case 'yellow-500': return 'bg-yellow-50';
      case 'green-500': return 'bg-green-50';
      case 'blue-500': return 'bg-blue-50';
      case 'indigo-600': return 'bg-indigo-50';
      case 'purple-600': return 'bg-purple-50';
      default: return 'bg-stone-100';
    }
  };

  const getTextColor = (themeColor: string) => {
    // Return a text color
    switch (themeColor) {
     case 'red-500': return 'text-red-800';
     case 'orange-500': return 'text-orange-800';
     case 'yellow-500': return 'text-yellow-800';
     case 'green-500': return 'text-green-800';
     case 'blue-500': return 'text-blue-800';
     case 'indigo-600': return 'text-indigo-800';
     case 'purple-600': return 'text-purple-800';
     default: return 'text-stone-800';
   }
 };

  const DetailRow = ({ label, value, isLast = false }: { label: string; value: string; isLast?: boolean }) => (
    <div className={`grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-4 py-4 md:py-5 ${!isLast ? 'border-b border-stone-100' : ''}`}>
      <dt className="font-bold text-stone-600 text-sm md:text-base flex items-center">
        <div className="w-1.5 h-1.5 rounded-full bg-stone-300 mr-2 md:hidden"></div>
        {label}
      </dt>
      <dd className="text-stone-600 text-sm md:text-base leading-relaxed whitespace-pre-wrap">{value}</dd>
    </div>
  );

  return (
    <div className="w-full max-w-3xl mx-auto pb-20 animate-in fade-in duration-500">
      
      {/* Navigation & Header Area */}
      <div className={`${getHeaderColor(chakra.themeColor)} pt-8 pb-12 px-6 rounded-b-[2.5rem] shadow-sm mb-8 transition-colors duration-500`}>
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-stone-500 hover:text-stone-800 transition-colors mb-6 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          一覧に戻る
        </button>

        <div className="text-center">
            <span className={`inline-block py-1 px-3 rounded-full bg-white/60 backdrop-blur-sm text-xs font-bold tracking-widest uppercase mb-3 ${getTextColor(chakra.themeColor)}`}>
              {chakra.sanskritName}
            </span>
            <h1 className={`text-3xl md:text-4xl font-serif mb-2 ${getTextColor(chakra.themeColor)}`}>
              {chakra.name}
            </h1>
            <p className="text-stone-600 font-light">{chakra.englishName}</p>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="px-4 md:px-6">
        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
          
          {/* Basic Info Section */}
          <div className="p-6 md:p-8">
            <h2 className="flex items-center gap-2 text-lg font-serif text-stone-800 mb-6 pb-2 border-b border-stone-100">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              基本データ
            </h2>
            <dl>
              <DetailRow label="色" value={chakra.color} />
              <DetailRow label="位置" value={chakra.location} />
              <DetailRow label="臓器" value={chakra.organs} />
              <DetailRow label="音（周波数）" value={chakra.sound} />
              <DetailRow label="パワーストーン" value={chakra.stones} />
              <DetailRow label="元素" value={chakra.element} />
              <DetailRow label="惑星" value={chakra.planet} />
              <DetailRow label="アロマオイル" value={chakra.aroma} isLast />
            </dl>
          </div>

          {/* Emotional & Spiritual Section */}
          <div className="bg-stone-50/50 p-6 md:p-8 border-t border-stone-100">
             <h2 className="flex items-center gap-2 text-lg font-serif text-stone-800 mb-6 pb-2 border-b border-stone-200">
              <Leaf className="w-5 h-5 text-green-500" />
              精神・エネルギー
            </h2>
            <dl>
              <DetailRow label="精神・感情面" value={chakra.mentalEmotional} />
              <DetailRow label="エネルギー" value={chakra.energy} />
              <DetailRow label="学ぶこと" value={chakra.lesson} isLast />
            </dl>
          </div>

          {/* Condition Section */}
          <div className="p-6 md:p-8 border-t border-stone-100">
            <h2 className="flex items-center gap-2 text-lg font-serif text-stone-800 mb-6 pb-2 border-b border-stone-100">
              <HeartPulse className="w-5 h-5 text-red-400" />
              状態と効果
            </h2>
            <dl>
              <div className="mb-6">
                <dt className="font-bold text-stone-700 mb-2 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                  整っている時の効果
                </dt>
                <dd className="text-stone-600 text-sm md:text-base leading-relaxed p-4 bg-green-50/50 rounded-lg border border-green-100/50">
                  {chakra.benefits}
                </dd>
              </div>

              <div className="mb-6">
                <dt className="font-bold text-stone-700 mb-2 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-orange-400 mr-2"></div>
                  乱れている時の状態（精神）
                </dt>
                <dd className="text-stone-600 text-sm md:text-base leading-relaxed p-4 bg-orange-50/50 rounded-lg border border-orange-100/50">
                  {chakra.imbalanceMental}
                </dd>
              </div>

              <div>
                <dt className="font-bold text-stone-700 mb-2 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-red-400 mr-2"></div>
                  乱れている時の病気（身体）
                </dt>
                <dd className="text-stone-600 text-sm md:text-base leading-relaxed p-4 bg-red-50/50 rounded-lg border border-red-100/50">
                  {chakra.imbalancePhysical}
                </dd>
              </div>
            </dl>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ChakraDetail;
