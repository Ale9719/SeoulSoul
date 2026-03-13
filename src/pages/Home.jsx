import FeatureCard from '../components/FeatureCard';
import ItalyMap from '../components/ItalyMap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <main className="relative h-screen flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img src="/SeoulSoul/img/header.png" alt="K-Pop Background" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-black/25"></div> 
        </div>

        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">
            ESPLORA IL MONDO <br /> DEL <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-cyan-400 pr-2 pb-2">K-POP</span>
          </h1>
          
          <div className="flex gap-4 mt-8 justify-center">
            <Link to="/store?cat=album">
                <button className="px-8 py-3 border-2 bg-white/20 border-pink-500 text-white rounded-md font-bold hover:bg-pink-500 transition shadow-[0_0_15px_rgba(236,72,153,0.4)] cursor-pointer">
                SCOPRI GLI ALBUM
                </button>
            </Link>

  {/* Bottone MERCH */}
  <Link to="/store?cat=merchandising">
    <button className="px-8 py-3 border-2 bg-white/20 border-cyan-400 text-white rounded-md font-bold hover:bg-cyan-400 transition shadow-[0_0_15px_rgba(34,211,238,0.4)] cursor-pointer">
      VEDI IL MERCH
    </button>
  </Link>
          </div>
        </div>
      </main>

      <section className="flex flex-wrap w-full">
        <FeatureCard 
          title="Album Collection" 
          text="I migliori album del momento"
          buttonText="VISITA LA COLLEZIONE ALBUM" 
          bgColor="bg-[#f8bccb]" 
          neonColor="border-pink-500 text-pink-500 shadow-[0_0_10px_rgba(217,70,239,0.5)]"
          hoverBg="hover:bg-pink-500 hover:text-[#f8bccb]"
        />
        <FeatureCard 
          title="K-Skincare" 
          text="Non c'è cosa più divina della skincare coreana"
          buttonText="ESPLORA SKINCARE" 
          bgColor="bg-[#e9d6bc] bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" 
          neonColor="border-white text-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          hoverBg="hover:bg-white hover:text-[#e9d6bc]"
        />
        <FeatureCard 
          title="Merchandising" 
          text="non puoi andare a un concerto senza il necessario"
          buttonText="SCOPRI IL MERCH" 
          bgColor="bg-[#d1edf1]" 
          neonColor="border-cyan-400 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
          hoverBg="hover:bg-cyan-400 hover:text-[#d1edf1]"
        />
        <FeatureCard 
          title="K-Pop Forum" 
          text="unisci a noi"
          buttonText="ACCEDI AL FORUM" 
          bgColor="bg-[#fcfaf7]" 
          neonColor="bg-gradient-to-r from-pink-400 to-cyan-400" 
          hoverBg="hover:from-blue-600 hover:to-cyan-400"
          textColor="text-slate-800"
          isGradient={true} 
        />
      </section>

      <section className="bg-slate-900 py-20 flex flex-col items-center">
        <h2 className="text-white text-3xl font-black mb-2 uppercase italic tracking-tighter">
          Live Community <span className="text-pink-500 animate-pulse">●</span>
        </h2>
        <p className="text-gray-400 mb-8 text-sm uppercase">Acquisti in tempo reale da tutta Italia</p>
        
        <div className="w-full max-w-4xl bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-white text-5xl font-bold mb-4">L'ITALIA AMA IL K-POP</h3>
            <p className="text-gray-400">Unisciti a migliaia di fan che stanno già collezionando i loro album preferiti.</p>
          </div>
          <div className="flex-1 flex justify-center">
            <ItalyMap />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;