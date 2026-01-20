import React from 'react';
import { QQ_CONTACT_1, QQ_CONTACT_2 } from '../constants';
import { MessageSquare, Copy } from 'lucide-react';

const StickyContact: React.FC = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`QQ号 ${text} 已复制`);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/90 backdrop-blur-md border-t border-neon-purple/50 z-50 py-4 px-4 shadow-[0_-5px_20px_rgba(0,0,0,0.8)]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border border-black"></span>
            <MessageSquare className="text-neon-green w-8 h-8" />
          </div>
          <div>
            <h4 className="text-white font-bold text-lg leading-tight">加入内部核心群</h4>
            <p className="text-gray-400 text-xs">获取最新防封版本 & 实时指导</p>
          </div>
        </div>

        <div className="flex gap-2 sm:gap-4 w-full sm:w-auto">
          <div 
            onClick={() => copyToClipboard(QQ_CONTACT_1)}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg cursor-pointer border border-slate-600 transition-colors"
          >
            <span className="font-mono font-bold text-neon-green">QQ: {QQ_CONTACT_1}</span>
            <Copy size={14} className="text-gray-400" />
          </div>
          <div 
            onClick={() => copyToClipboard(QQ_CONTACT_2)}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg cursor-pointer border border-slate-600 transition-colors"
          >
            <span className="font-mono font-bold text-neon-green">QQ: {QQ_CONTACT_2}</span>
            <Copy size={14} className="text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyContact;