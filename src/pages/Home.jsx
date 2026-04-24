import FeatureCard from '../components/FeatureCard';
import ItalyMap from '../components/ItalyMap';
import { Link } from 'react-router-dom';
const header = 'img/header.png';

const Home = () => {
  return (
    <>
      {/* HERO SECTION: Altezza ridotta su mobile, testi scalati */}
      <main className="relative min-h-[70vh] lg:h-screen flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="absolute inset-0 z-0">
          <img src={header} alt="K-Pop Background" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-black/40 md:bg-black/25"></div> 
        </div>

        <div className="relative z-10 w-full max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-black text-white mb-4 tracking-tighter leading-tight">
            ESPLORA IL MONDO <br /> DEL <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-cyan-400 pr-2">K-POP</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8 justify-center items-center">
            <Link to="/store?cat=album" className="w-full sm:w-auto">
                <button className="w-full text-lg md:text-2xl lg:text-4xl px-6 py-3 border-2 bg-white/20 border-pink-500 text-white rounded-md font-bold hover:bg-pink-500 transition shadow-[0_0_15px_rgba(236,72,153,0.4)] cursor-pointer">
                SCOPRI GLI ALBUM
                </button>
            </Link>

            <Link to="/store?cat=merchandising" className="w-full sm:w-auto">
              <button className="w-full text-lg md:text-2xl lg:text-4xl py-3 px-6 border-2 bg-white/20 border-cyan-400 text-white rounded-md font-bold hover:bg-cyan-400 transition shadow-[0_0_15px_rgba(34,211,238,0.4)] cursor-pointer">
                VEDI IL MERCH
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* FEATURE CARDS: Layout a griglia responsive */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        <FeatureCard 
          title="Album Collection" 
          text="I migliori album del momento"
          buttonText="VISITA LA COLLEZIONE ALBUM" 
          bgColor="bg-[#f8bccb]" 
          neonColor="border-pink-500 text-xl lg:text-2xl text-pink-500 shadow-[0_0_10px_rgba(217,70,239,0.5)]"
          hoverBg="hover:bg-pink-500 hover:text-[#f8bccb]"
        />
        <FeatureCard 
          title="K-Skincare" 
          text="Non c'è cosa più divina della skincare coreana"
          buttonText="ESPLORA SKINCARE" 
          bgColor="bg-[#e9d6bc] bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" 
          neonColor="border-white text-xl lg:text-2xl text-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          hoverBg="hover:bg-white hover:text-[#e9d6bc]"
        />
        <FeatureCard 
          title="Merchandising" 
          text="non puoi andare a un concerto senza il necessario"
          buttonText="SCOPRI IL MERCH" 
          bgColor="bg-[#d1edf1]" 
          neonColor="border-cyan-400 text-xl lg:text-2xl text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
          hoverBg="hover:bg-cyan-400 hover:text-[#d1edf1]"
        />
        <FeatureCard 
          title="K-Pop Forum" 
          text="unisci a noi"
          buttonText="ACCEDI AL FORUM" 
          bgColor="bg-[#fcfaf7]" 
          neonColor="bg-gradient-to-r from-pink-400 to-cyan-400 text-xl lg:text-2xl" 
          hoverBg="hover:from-blue-600 hover:to-cyan-400"
          textColor="text-slate-800"
          isGradient={true} 
        />
      </section>

      {/* COMMUNITY SECTION: Spazi migliorati per mobile */}
      <section className="bg-slate-900 py-12 md:py-20 px-4 flex flex-col items-center">
        <h2 className="text-white text-2xl md:text-3xl font-black mb-2 uppercase italic tracking-tighter text-center">
          Live Community <span className="text-pink-500 animate-pulse">●</span>
        </h2>
        <p className="text-gray-400 mb-8 text-xs md:text-sm uppercase text-center">Acquisti in tempo reale da tutta Italia</p>
        
        <div className="w-full max-w-5xl bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-10">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-white text-3xl md:text-5xl font-bold mb-4">L'ITALIA AMA IL K-POP</h3>
            <p className="text-gray-400 text-sm md:text-base">Unisciti a migliaia di fan che stanno già collezionando i loro album preferiti.</p>
          </div>
          <div className="w-full flex-1 flex justify-center overflow-hidden">
            {/* Contenitore per la mappa per evitare che rompa il layout */}
            <div className="w-full max-w-[300px] md:max-w-none">
              <ItalyMap />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;