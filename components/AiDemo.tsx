import React, { useState, useEffect } from 'react';
import { INITIAL_HAND } from '../constants';
import TileCard from './TileCard';
import { Activity, Cpu, Zap } from 'lucide-react';

const AiDemo: React.FC = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<{ discardIndex: number; winRate: number } | null>(null);
  
  const runAnalysis = () => {
    setAnalyzing(true);
    setResult(null);
    
    // Simulate complex calculation
    setTimeout(() => {
      setAnalyzing(false);
      // Mock logic: randomly pick a "bad" tile to discard (e.g., the lone honors)
      const targetIndex = 12; 
      setResult({
        discardIndex: targetIndex,
        winRate: 88.4
      });
    }, 1500);
  };

  useEffect(() => {
    // Auto run once on mount for effect
    const timer = setTimeout(runAnalysis, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-8 bg-card-bg border border-slate-700 rounded-2xl shadow-2xl relative overflow-hidden group">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple opacity-5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-green opacity-5 blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <Cpu className="text-neon-green w-6 h-6 animate-pulse" />
            <h3 className="text-xl font-bold text-white tracking-widest">MAHJONG_MASTER v4.0.2 <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded ml-2">LIVE</span></h3>
          </div>
          <div className="text-right">
             <div className="text-sm text-gray-400">当前局势</div>
             <div className="text-neon-green font-mono">东三局 12本场</div>
          </div>
        </div>

        {/* Tiles Container */}
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-8 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
          {INITIAL_HAND.map((tile, idx) => (
            <TileCard 
              key={tile.id} 
              tile={tile} 
              highlight={result?.discardIndex === idx}
              dimmed={result !== null && result.discardIndex !== idx}
            />
          ))}
        </div>

        {/* Analysis UI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Stats Panel */}
          <div className="bg-black/40 p-4 rounded-lg border border-slate-700 flex flex-col justify-between h-32">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm flex items-center"><Activity size={14} className="mr-1"/> 实时胜率预测</span>
              {analyzing && <span className="text-neon-green text-xs animate-pulse">CALCULATING...</span>}
            </div>
            <div className="text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-blue-500">
              {analyzing ? (
                <span className="animate-pulse">--.-%</span>
              ) : result ? (
                <span>{result.winRate}%</span>
              ) : (
                <span>0.0%</span>
              )}
            </div>
            <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
               <div 
                 className="h-full bg-neon-green transition-all duration-1000 ease-out"
                 style={{ width: result ? `${result.winRate}%` : '0%' }}
               />
            </div>
          </div>

          {/* Action Panel */}
          <div className="bg-black/40 p-4 rounded-lg border border-slate-700 flex flex-col justify-center items-center h-32">
             {!analyzing && result ? (
               <div className="text-center animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">最佳策略 / Best Move</p>
                  <p className="text-2xl font-bold text-white mb-1">切 <span className="text-neon-green">{INITIAL_HAND[result.discardIndex].symbol}</span> 听牌</p>
                  <p className="text-xs text-neon-purple">期望值 +12000 pts</p>
               </div>
             ) : (
               <div className="flex flex-col items-center justify-center text-gray-500">
                  <Activity className={`w-8 h-8 mb-2 ${analyzing ? 'animate-spin' : ''}`} />
                  <span className="text-xs tracking-wider">{analyzing ? '分析牌谱中...' : '等待输入...'}</span>
               </div>
             )}
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button 
            onClick={runAnalysis}
            disabled={analyzing}
            className="group relative px-8 py-3 bg-neon-green/10 hover:bg-neon-green/20 text-neon-green font-bold rounded-full border border-neon-green transition-all hover:shadow-[0_0_20px_rgba(52,211,153,0.4)] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
            <span className="flex items-center gap-2">
              <Zap size={18} />
              {analyzing ? 'AI 分析中...' : '立即模拟 (Simulate)'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiDemo;