import React from 'react';

interface ChakraIconProps {
  id: number;
  className?: string;
}

// Helper to rotate petals around the center (12,12) in a 24x24 viewbox
const RotatedPetals = ({ count, d, scale = 1 }: { count: number; d: string; scale?: number }) => {
  return (
    <g transform={`translate(12 12) scale(${scale}) translate(-12 -12)`}>
      {Array.from({ length: count }).map((_, i) => (
        <path
          key={i}
          d={d}
          transform={`rotate(${(360 / count) * i} 12 12)`}
          fill="currentColor"
          fillOpacity="0.2"
          stroke="currentColor"
          strokeWidth="0.5"
        />
      ))}
    </g>
  );
};

export const ChakraIcon: React.FC<ChakraIconProps> = ({ id, className }) => {
  // Common petal path: A teardrop shape starting from center(ish) and going out
  // M12 12 (center) -> Control points to curve out to edge -> Back to center
  // Adjusted for visual balance in 24x24 box.
  
  // Standard Petal
  const petalStandard = "M12 12 Q14 2 12 1.5 Q10 2 12 12"; 
  // Wide Petal for fewer counts
  const petalWide = "M12 12 Q16 2 12 1 Q8 2 12 12";
  // Thin Petal for many counts
  const petalThin = "M12 12 Q13 2 12 1.5 Q11 2 12 12";

  const renderContent = () => {
    switch (id) {
      case 1: // Root: 4 petals, Square
        return (
          <>
            <RotatedPetals count={4} d={petalWide} />
            {/* Square rotated 45deg */}
            <rect x="9" y="9" width="6" height="6" transform="rotate(45 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </>
        );
      case 2: // Sacral: 6 petals, Crescent
        return (
          <>
            <RotatedPetals count={6} d={petalStandard} />
            {/* Crescent Moon approximation */}
            <path d="M12 17 A5 5 0 1 1 12 7 A4 4 0 1 0 12 15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5"/>
          </>
        );
      case 3: // Solar Plexus: 10 petals, Inverted Triangle
        return (
          <>
            <RotatedPetals count={10} d={petalStandard} />
            {/* Inverted Triangle */}
            <path d="M7 9 L17 9 L12 17 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </>
        );
      case 4: // Heart: 12 petals, Hexagram (Star)
        return (
          <>
            <RotatedPetals count={12} d={petalThin} />
            {/* Hexagram (Two triangles) */}
            <path d="M12 7 L16 14 L8 14 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M12 17 L8 10 L16 10 Z" fill="none" stroke="currentColor" strokeWidth="1" />
          </>
        );
      case 5: // Throat: 16 petals, Circle/Triangle
        return (
          <>
            <RotatedPetals count={16} d={petalThin} />
            {/* Circle within */}
            <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 15 L15 10 L9 10 Z" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
          </>
        );
      case 6: // Third Eye: 2 large petals (wings), Om/Eye
        return (
          <>
            {/* Two large wing-like petals */}
            <path d="M12 12 C18 12 23 6 22 2 C18 6 14 10 12 12" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="0.5" />
            <path d="M12 12 C6 12 1 6 2 2 C6 6 10 10 12 12" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="0.5" />
            {/* Center Circle/Eye */}
            <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 10 L14.5 7 L9.5 7 Z" fill="currentColor" fillOpacity="0.5" />
          </>
        );
      case 7: // Crown: Lotus (Many petals)
        return (
          <>
            {/* Multiple layers of petals to simulate "1000" */}
            <RotatedPetals count={12} d={petalThin} scale={1} />
            <RotatedPetals count={8} d={petalStandard} scale={0.7} />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            {/* Rays */}
            <g opacity="0.4">
               {Array.from({ length: 8 }).map((_, i) => (
                <line key={i} x1="12" y1="4" x2="12" y2="1" transform={`rotate(${(360/8)*i} 12 12)`} stroke="currentColor" strokeWidth="1"/>
               ))}
            </g>
          </>
        );
      default:
        return <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" />;
    }
  };

  return (
    <svg 
      viewBox="0 0 24 24" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
    >
      {renderContent()}
    </svg>
  );
};
