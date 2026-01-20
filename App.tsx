import React from 'react';
import AiDemo from './components/AiDemo';
import StickyContact from './components/StickyContact';
import { ShieldAlert, Crosshair, Brain, CheckCircle2, AlertTriangle } from 'lucide-react';

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="bg-card-bg p-6 rounded-xl border border-slate-800 hover:border-neon-purple/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(176,38,255,0.1)] group">
    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white pb-32 overflow-x-hidden selection:bg-neon-green/30">
      
      {/* Hero Section */}
      <header className="relative pt-20 pb-32 px-6 text-center overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 mb-6 animate-fade-in-down">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-xs font-mono text-neon-green tracking-widest">SYSTEM STATUS: ONLINE</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">掌控牌局</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-blue-500">预见未来</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            专为雀魂(Majsoul)打造的顶尖AI辅助系统。
            <br className="hidden sm:block" />
            不做运气的奴隶，成为数据的主宰。
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#demo" 
              onClick={() => alert('联系方式：QQ1106131344/2110417355')}
              className="px-8 py-4 bg-neon-green text-black font-bold rounded-lg hover:bg-[#00cc7d] transition-colors shadow-[0_0_20px_rgba(0,255,157,0.4)] cursor-pointer"
            >
              体验 AI 模拟
            </a>
            <a href="#features" className="px-8 py-4 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 border border-slate-700 transition-colors">
              了解核心功能
            </a>
          </div>
        </div>
      </header>

      {/* Demo Section */}
      <section id="demo" className="px-4 py-10 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">实时演算内核演示</h2>
            <p className="text-gray-400">基于数百万局牌谱训练的深度学习模型</p>
          </div>
          <AiDemo />
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">超越人类极限的计算力</h2>
            <div className="h-1 w-20 bg-neon-purple mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Brain className="text-neon-purple w-6 h-6" />}
              title="全自动托管打牌"
              desc="解放双手，AI 自动执行最优解。无论是快速场还是段位战，不仅能打，而且打得好。完美模拟高手思路。"
            />
            <FeatureCard 
              icon={<Crosshair className="text-neon-green w-6 h-6" />}
              title="胜率实时预测"
              desc="上帝视角显示每一张切牌后的听牌胜率、改良进张以及对手可能的听牌范围。不再迷茫。"
            />
            <FeatureCard 
              icon={<ShieldAlert className="text-blue-500 w-6 h-6" />}
              title="智能防点炮"
              desc="通过深度分析场上舍牌，精确计算对手听牌危险度。在进攻与防守之间找到完美平衡点。"
            />
          </div>
        </div>
      </section>

      {/* Comparison / Why Us */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-slate-900/50 rounded-2xl border border-slate-800 p-8 sm:p-12">
          <h2 className="text-2xl font-bold mb-8 text-center">为什么选择 MahjongMaster?</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <CheckCircle2 className="text-neon-green w-6 h-6 flex-shrink-0" />
              <p className="text-lg">独家算法内核，非市面普通脚本可比</p>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle2 className="text-neon-green w-6 h-6 flex-shrink-0" />
              <p className="text-lg">持续更新适配雀魂最新版本，稳定奔放</p>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle2 className="text-neon-green w-6 h-6 flex-shrink-0" />
              <p className="text-lg">专属内部群，提供 1对1 远程安装与调试服务</p>
            </div>
            <div className="flex items-center gap-4 text-gray-500">
              <AlertTriangle className="text-yellow-600 w-6 h-6 flex-shrink-0" />
              <p className="text-sm">郑重声明：本工具仅供学习AI算法研究使用，请勿用于破坏游戏公平性（懂的都懂）。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Spacer */}
      <div className="h-20"></div>

      {/* Persistent Contact Bar */}
      <StickyContact />

    </div>
  );
}

export default App;