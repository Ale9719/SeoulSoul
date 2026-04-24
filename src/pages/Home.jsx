import FeatureCard from '../components/FeatureCard';
import ItalyMap from '../components/ItalyMap';
import { Link } from 'react-router-dom';
const header = 'img/header.png';

const Home = () => {
  return (
    <>
      {/* Hero Section: Aumentato il contrasto e i font */}
      <main className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-12">
        <div className="absolute inset-0 z-0">
          <img src={header} alt="K-Pop Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div> 
        </div>

        <div className="relative z-10 w-full">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[1.1] uppercase">
            ESPLORA IL <br /> MONDO <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">K-POP</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center items-center">
            <Link to="/store?cat=album" className="w-full sm:w-auto px-4">
              <button className="w-full sm:px-10 py-4 border-2 bg-pink-500 border-pink-500 text-white rounded-xl font-bold uppercase shadow-[0_0_20px_rgba(236,72,153,0.4)]">
                SCOPRI GLI ALBUM
              </button>
            </Link>
            <Link to="/store?cat=merchandising" className="w-full sm:w-auto px-4">
              <button className="w-full sm:px-10 py-4 border-2 bg-cyan-400 border-cyan-400 text-white rounded-xl font-bold uppercase shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                VEDI IL MERCH
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* Feature Cards: Forziamo 1 colonna su mobile e 2 solo su tablet/desktop grande */}
      <section className="flex flex-col lg:flex-row w-full">
        {[
          { title: "Album Collection", text: "I migliori album del momento", btn: "VISITA LA COLLEZIONE", bg: "bg-[#f8bccb]", neon: "border-pink-500 text-pink-500", hBg: "hover:bg-pink-500 hover:text-white" },
          { title: "K-Skincare", text: "La migliore skincare coreana", btn: "ESPLORA SKINCARE", bg: "bg-[#e9d6bc]", neon: "border-white text-white", hBg: "hover:bg-white hover:text-[#e9d6bc]" },
          { title: "Merchandising", text: "Tutto per i tuoi concerti", btn: "SCOPRI IL MERCH", bg: "bg-[#d1edf1]", neon: "border-cyan-400 text-cyan-400", hBg: "hover:bg-cyan-400 hover:text-white" },
          { title: "K-Pop Forum", text: "Unisciti alla community", btn: "ACCEDI AL FORUM", bg: "bg-[#fcfaf7]", neon: "bg-gradient-to-r from-pink-400 to-cyan-400 text-white", isGrad: true, tCol: "text-slate-800" }
        ].map((card, i) => (
          <div key={i} className="w-full lg:w-1/4">
            <FeatureCard 
              title={card.title} 
              text={card.text}
              buttonText={card.btn} 
              bgColor={card.bg} 
              neonColor={card.neon}
              hoverBg={card.hBg}
              textColor={card.tCol}
              isGradient={card.isGrad}
              // Queste classi sotto passano al componente se supporta className, 
              // altrimenti dovrai metterle dentro FeatureCard.jsx
              className="py-16 px-10 min-h-[350px] flex flex-col justify-center items-center text-center border-b border-white/10 lg:border-none"
            />
          </div>
        ))}
      </section>

      {/* Community Section: Testo grande e mappa centrata */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
          <div className="text-center">
            <h2 className="text-white text-4xl md:text-6xl font-black mb-4 leading-none uppercase italic">
              L'ITALIA AMA <br /> IL <span className="text-pink-500">K-POP</span>
            </h2>
            <p className="text-gray-400 text-lg">Unisciti a migliaia di fan in tutta Italia.</p>
          </div>
          
          <div className="w-full flex justify-center transform scale-125 md:scale-100 py-10">
            <ItalyMap />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;