import React from 'react';
import { Tile } from '../types';

interface TileCardProps {
  tile: Tile;
  highlight?: boolean;
  dimmed?: boolean;
  onClick?: () => void;
}

const TileCard: React.FC<TileCardProps> = ({ tile, highlight, dimmed, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        relative w-10 h-14 sm:w-12 sm:h-16 bg-slate-100 rounded-md shadow-[0_4px_0_#cbd5e1] 
        flex items-center justify-center text-3xl sm:text-4xl select-none cursor-pointer
        transition-all duration-300 transform border border-gray-300
        ${highlight ? 'translate-y-[-10px] shadow-[0_14px_0_#34d399] border-neon-green ring-2 ring-neon-green z-10' : ''}
        ${dimmed ? 'opacity-50 grayscale' : 'hover:translate-y-[-2px] hover:shadow-[0_6px_0_#cbd5e1]'}
      `}
      style={{
        color: tile.type === 'man' ? '#8b0000' : tile.type === 'sou' ? '#006400' : 'black'
      }}
    >
      <span className="drop-shadow-sm">{tile.symbol}</span>
      {highlight && (
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-neon-green text-black text-[10px] font-bold px-2 py-0.5 rounded shadow-lg animate-bounce">
          切
        </div>
      )}
    </div>
  );
};

export default TileCard;