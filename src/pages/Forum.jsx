import React, { useState } from 'react';
import { MessageSquare, User, Clock, TrendingUp, Plus, ChevronRight } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const Forum = () => {
  const [posts] = useState([
    {
      id: 1,
      author: "K-Lover99",
      title: "Qual è la vostra B-side preferita di Get Up delle NewJeans?",
      category: "Music",
      replies: 24,
      time: "2 ore fa",
      trending: true
    },
    {
      id: 2,
      author: "SkincareGuru",
      title: "Review: Ho provato il toner Anua 77% per un mese...",
      category: "Skincare",
      replies: 15,
      time: "5 ore fa",
      trending: false
    }
  ]);

  return (
    <div className="min-h-screen bg-[#fcfaf7] pt-32 pb-20 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(at_0%_0%,#f8bccb_0%,transparent_60%),radial-gradient(at_100%_100%,#d1edf1_0%,transparent_60%),radial-gradient(at_50%_50%,#e9d6bc_0%,transparent_50%)] opacity-70 pointer-events-none"></div>


      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* BREADCRUMBS CENTRATI */}
        <div>
          <Breadcrumbs />
        </div>

        {/* HEADER CENTRALE */}
        <div className="flex flex-col items-center text-center mb-20">
          <h3 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-slate-900 leading-none">
            Soul <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-cyan-400 pr-4 pb-2">Talk</span>
          </h3>
          <p className="text-slate-500 font-bold uppercase tracking-[0.3em] mt-4 text-xs md:text-sm">
            Community & Discussions
          </p>
          
          {/* BOTTONE CENTRATO */}
          <div className="mt-10">
            <button className="relative group cursor-pointer">
              <div className="absolute -inset-1 bg-linear-to-r from-pink-500 to-cyan-400 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-slate-900 px-10 py-4 rounded-full font-black italic uppercase tracking-widest text-white flex items-center gap-3 text-[10px] transition-transform group-hover:scale-105">
                <Plus size={16} /> Inizia una discussione
              </div>
            </button>
          </div>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LISTA POST (8 COLONNE) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-4 px-4 mb-6">
              <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 whitespace-nowrap">Ultime Discussioni</h2>
              <div className="h-px w-full bg-slate-200"></div>
            </div>

            {posts.map((post) => (
              <div key={post.id} className="group bg-white/70 backdrop-blur-sm z-10s border border-white p-6 md:p-8 rounded-4xl hover:shadow-xl hover:shadow-pink-100/50 transition-all duration-500 cursor-pointer flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full ${
                      post.category === 'Music' ? 'bg-pink-100 text-pink-500' : 'bg-cyan-100 text-cyan-600'
                    }`}>
                      {post.category}
                    </span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                      <Clock size={10} /> {post.time}
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter text-slate-900 group-hover:text-pink-500 transition-colors">
                    {post.title}
                  </h3>

                  <div className="flex items-center gap-6 mt-4">
                    <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      <User size={12} className="text-pink-400" /> {post.author}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      <MessageSquare size={12} className="text-cyan-400" /> {post.replies} commenti
                    </div>
                  </div>
                </div>
                <ChevronRight className="text-slate-300 group-hover:text-pink-500 transition-all translate-x-0 group-hover:translate-x-2" />
              </div>
            ))}
          </div>

          {/* SIDEBAR (4 COLONNE) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="relative group">
              <div className="absolute -inset-2 bg-linear-to-r from-pink-400 to-cyan-400 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white p-8 rounded-[2.5rem] shadow-xl border border-white/50 z-10">
                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-8 italic">
                  Hot <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-cyan-400">Trends</span>
                </h2>
                <ul className="space-y-6">
                  {['#NewJeans', '#AnuaReview', '#KpopConcertMilan', '#GlassSkinSecrets'].map((tag, idx) => (
                    <li key={tag} className="flex items-center justify-between group/tag cursor-pointer">
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-black text-slate-500 italic">0{idx + 1}</span>
                        <span className="text-sm font-bold text-slate-500 group-hover/tag:text-slate-900 transition-colors">
                          {tag}
                        </span>
                      </div>
                      <TrendingUp size={14} className="text-slate-500 group-hover/tag:text-pink-400 transition-colors" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* BOX REGOLE */}
            <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 mb-2">Be Soul, Be Kind</p>
              <p className="text-xs font-bold text-slate-400 italic mb-6">Leggi le regole della community prima di postare.</p>
              <button className="text-[10px] font-black uppercase tracking-widest border-b border-pink-500 pb-1 hover:text-pink-500 transition-colors">
                Regolamento
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Forum;