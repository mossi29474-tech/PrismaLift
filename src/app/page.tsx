import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 font-sans tracking-tight">
      <nav className="flex justify-between items-center max-w-6xl mx-auto mb-16">
        <div className="flex items-center gap-2">
          <div className="w-10 h-6 bg-[#ff4500] -skew-x-12"></div>
          <h1 className="text-2xl font-black italic tracking-tighter">PRISMALIFT</h1>
        </div>
        <button className="bg-[#ff4500] text-black px-6 py-2 rounded-sm font-black uppercase text-xs hover:bg-white transition">
          New Session
        </button>
      </nav>

      <header className="max-w-6xl mx-auto mb-12 border-l-4 border-[#ff4500] pl-6">
        <h2 className="text-6xl font-black uppercase italic leading-none mb-2">
          LIMITLESS<br/>PERFORMANCE.
        </h2>
        <p className="text-slate-500 font-medium uppercase tracking-widest text-sm">
          Precision Metrics // Elite Strength Tracking
        </p>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#111] border-t-2 border-[#ff4500] p-8">
          <p className="text-slate-500 text-xs font-bold uppercase mb-4">Volume Load</p>
          <h3 className="text-5xl font-black italic text-white">12.4k <span className="text-lg text-slate-600">LBS</span></h3>
        </div>

        <div className="bg-[#ff4500] p-8 text-black">
          <p className="text-black/60 text-xs font-bold uppercase mb-4">Next Up</p>
          <h3 className="text-4xl font-black italic">LEGS / HYPERTROPHY</h3>
          <p className="text-black font-bold mt-2 underline">START WORKOUT →</p>
        </div>

        <div className="bg-[#111] border-t-2 border-[#ff4500] p-8">
          <p className="text-slate-500 text-xs font-bold uppercase mb-4">Fatigue Score</p>
          <h3 className="text-5xl font-black italic text-white">OPTIMAL</h3>
          <p className="text-[#ff4500] text-xs font-bold mt-2 uppercase tracking-widest">Ready for PR</p>
        </div>
      </div>
    </div>
  );
}
