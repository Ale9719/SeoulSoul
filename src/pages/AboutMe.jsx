import React from 'react';
import FeatureCard from '../components/FeatureCard';
import Breadcrumbs from '../components/Breadcrumbs';
import about from '/img/Header-about.png';


const AboutMe = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfaf7]">
      
      {/* HEADER */}
      <header className="h-[60vh] relative flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img src={about} alt="About Me Background" className={`w-full h-full object-cover`}/>
          <div className="absolute inset-0 bg-black/40"></div> 
        </div>

        <div className="relative z-10 px-4">
          <Breadcrumbs />
          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white">
            Il cuore di <br /> 
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-cyan-400">
              Seoul Soul
            </span>
          </h1>
          <p className="text-white/80 mt-4 font-bold uppercase tracking-widest text-sm">
            Passion • Collection • Community
          </p>
        </div>
      </header>

      {/* ZONA BIOGRAFIA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_0%_0%,#f8bccb_0%,transparent_60%),radial-gradient(at_100%_100%,#d1edf1_0%,transparent_60%),radial-gradient(at_50%_50%,#e9d6bc_0%,transparent_50%)] opacity-70 pointer-events-none"></div>

        {/*<div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
          <div className="absolute top-[0%] left-[-5%] w-100 h-100 bg-[#f8bccb] rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[0%] right-[-5%] w-125 h-125 bg-[#d1edf1] rounded-full blur-[130px]"></div>
        </div>*/}

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="relative group mx-auto lg:mx-0">
              <div className="absolute -inset-2 bg-linear-to-r from-pink-400 to-cyan-400 rounded-4xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative justify-items-center bg-white p-3 rounded-4xl shadow-2xl">
                <img src={header} alt="About Me" className={`rounded-3xl w-full max-w-112.5 grayscale-30 hover:grayscale-0 transition duration-500`} /> 
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black italic uppercase tracking-tighter text-slate-800 mb-6">
                Ciao, sono <span className="text-pink-500 underline decoration-cyan-400 decoration-4">il fondatore</span>
              </h2>
              <div className="space-y-6 text-slate-700 font-medium leading-relaxed">
                <p>La mia avventura nel mondo del K-Pop è iniziata quasi per gioco...</p>
                <p><span className="font-black italic text-slate-900">Seoul Soul</span> non è solo un sito...</p>
                <blockquote className="border-l-4 border-pink-500 pl-4 py-2 italic font-bold text-slate-800">
                  "La musica unisce ciò che la distanza separa."
                </blockquote>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEZIONE FEATURE CARDS */}
      <section className="flex flex-wrap w-full relative z-10 border-t border-gray-100">
        <FeatureCard 
          title="Le mie creazioni" 
          text="Un po' di fan art"
          bgColor="bg-[#f8bccb]" 
          showButton={false}
        />
        <FeatureCard 
          title="Il backstage" 
          text="Cura nei packaging"
          bgColor="bg-[#e9d6bc] bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" 
          showButton={false}
        />
        <FeatureCard 
          title="Shop" 
          text="Esplora lo store"
          buttonText="Boh" 
          bgColor="bg-[#d1edf1]" 
          neonColor="border-cyan-400 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
          hoverBg="hover:bg-cyan-400 hover:text-[#d1edf1]"
        />
        <FeatureCard 
          title="Community" 
          text="Unisciti a noi"
          buttonText="Unisciti" 
          bgColor="bg-[#fcfaf7]" 
          isGradient={true}
          neonColor="bg-linear-to-r from-pink-400 to-cyan-400" 
        />
      </section>

    </div>
  );
};

export default AboutMe;