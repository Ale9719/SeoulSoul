import FeatureCard from '../components/FeatureCard';
import ItalyMap from '../components/ItalyMap';
import { Link } from 'react-router-dom';
const header = 'img/header.png';

const Home = () => {
  return (
    <>
      {/* Hero Section: Aumentato il padding e migliorata la leggibilità */}
      <main className="relative min-h-[85vh] md:h-screen flex flex-col items-center justify-center text-center px-6 py-12">
        <div className="absolute inset-0 z-0">
          <img src={header} alt="K-Pop Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div> {/* Scurito un po' di più per far leggere i bottoni */}
        </div>

        <div className="relative z-10 w-full max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight uppercase">
            Esplora il mondo <br /> 
            del <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">K-Pop</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-5 mt-10 justify-center items-center w-full max-w-xs mx-auto sm:max-w-none">
            <Link to="/store?cat=album" className="w-full sm:w-auto">
              <button className="w-full sm:px-10 py-4 border-2 bg-pink-500/10 border-pink-500 text-white rounded-xl font-bold uppercase tracking-wider hover:bg-pink-500 transition-all shadow-lg active:scale-95">
                Scopri gli Album
              </button>
            </Link>

            <Link to="/store?cat=merchandising" className="w-full sm:w-auto">
              <button className="w-full sm:px-10 py-4 border-2 bg-cyan-400/10 border-cyan-400 text-white rounded-xl font-bold uppercase tracking-wider hover:bg-cyan-400 transition-all shadow-lg active:scale-95">
                Vedi il Merch
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* Feature Cards: Forziamo il W-FULL su mobile. 
          IMPORTANTE: Se le scritte dentro FeatureCard sono ancora piccole, 
          dovrai modificare i font-size dentro quel componente (es. text-2xl). */}
      <section className="flex flex-col md:flex-row flex-wrap w-full">
        {[
          { title: "Album Collection", text: "I migliori album del momento", btn: "VISITA LA COLLEZIONE", bg: "bg-[#f8bccb]", neon: "border-pink-500 text-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.3)]", hBg: "hover:bg-pink-500 hover:text-white" },
          { title: "K-Skincare", text: "La migliore skincare coreana", btn: "ESPLORA SKINCARE", bg: "bg-[#e9d6bc]", neon: "border-white text-white shadow-[0_0_10px_rgba(255,255,255,0.3)]", hBg: "hover:bg-white hover:text-[#e9d6bc]" },
          { title: "Merchandising", text: "Tutto quello che ti serve per i concerti", btn: "SCOPRI IL MERCH", bg: "bg-[#d1edf1]", neon: "border-cyan-400 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.3)]", hBg: "hover:bg-cyan-400 hover:text-white" },
          { title: "K-Pop Forum", text: "Unisciti alla nostra community", btn: "ACCEDI AL FORUM", bg: "bg-[#fcfaf7]", neon: "bg-gradient-to-r from-pink-400 to-cyan-400 text-white", hBg: "hover:opacity-90", isGrad: true, tCol: "text-slate-800" }
        ].map((card, i) => (
          <div key={i} className="w-full md:w-1/2 lg:w-1/4 min-h-[300px] flex">
            <FeatureCard 
              title={card.title} 
              text={card.text}
              buttonText={card.btn} 
              bgColor={card.bg} 
              neonColor={card.neon}
              hoverBg={card.hBg}
              textColor={card.tCol}
              isGradient={card.isGrad}
              className="w-full h-full py-12 px-8" // Aumentiamo il padding interno
            />
          </div>
        ))}
      </section>

      {/* Community Section: Sistemato il layout per non far sparire la mappa */}
      <section className="bg-slate-950 py-16 md:py-24 px-6 flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-black mb-3 uppercase italic tracking-tighter">
            Live Community <span className="text-pink-500 animate-pulse">●</span>
          </h2>
          <p className="text-gray-500 text-xs md:text-sm uppercase tracking-[0.2em]">
            Acquisti in tempo reale da tutta Italia
          </p>
        </div>
        
        <div className="w-full max-w-5xl bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <h3 className="text-white text-4xl md:text-6xl font-black mb-6 leading-[0.9] uppercase tracking-tighter">
              L'Italia ama <br /> il <span className="text-pink-500">K-Pop</span>
            </h3>
            <p className="text-gray-400 text-lg md:text-xl max-w-md mx-auto lg:mx-0">
              Unisciti a migliaia di fan che stanno già collezionando i loro album preferiti.
            </p>
          </div>
          
          <div className="flex-1 w-full flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[300px] md:max-w-none transform scale-110 md:scale-125">
              <ItalyMap />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;