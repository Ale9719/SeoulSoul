import instagram from '../assets/img/instagram.svg'; 
import tiktok from '../assets/img/tiktok.svg'; 
import logo from '../assets/img/logo.png'; 


const CombinedFooter = () => {
  return (
    <section className="relative w-full pt-20 pb-10 px-6 overflow-hidden bg-[#fcfaf7]">
      
      <div className="absolute inset-0 bg-[radial-gradient(at_0%_0%,#f8bccb_0%,transparent_60%),radial-gradient(at_100%_100%,#d1edf1_0%,transparent_60%),radial-gradient(at_50%_50%,#e9d6bc_0%,transparent_50%)] opacity-70 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* PARTE ALTA: NEWSLETTER */}
        <div className="text-center max-w-2xl mx-auto mb-24 py-10">
          <h2 className="text-4xl font-black italic uppercase tracking-tighter text-gray-800 mb-4">
            Resta nel Loop
          </h2>
          <p className="text-gray-600 font-medium mb-8">
            Ricevi in anteprima le nuove collection di album e news esclusive sul mondo K-Pop.
          </p>

          <form className="flex flex-col sm:flex-row justify-center gap-0">
            <input 
              type="email" 
              placeholder="Inserisci la tua email..." 
              className="px-6 py-4 rounded-l-sm bg-white/90 backdrop-blur-sm border border-white focus:outline-none w-full sm:w-80"
            />
            <button className="px-10 py-4 rounded-r-sm font-black uppercase tracking-widest text-xs text-white transition-all duration-500 shadow-lg bg-linear-to-r from-pink-500 to-cyan-400 hover:scale-105 active:scale-95">
                Iscriviti Ora
            </button>
          </form>
          <p className="mt-6 text-xs text-gray-400 italic">
            Niente spam, promesso. Solo vibes K-Pop direttamente nella tua inbox.
          </p>
        </div>

        <div className="w-full h-px bg-gray-900/5 mb-20"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 justify-items-center">
          
          <div className="col-span-1 content-center">
            <div className="w-24 mb-6">
                <a href="#">
                  <img src={logo} alt="Logo" className={`transition-all duration-300`} /> 
                </a>
            </div>
          </div>

          {/* Navigazione */}
          <div>
            <h4 className="font-bold uppercase text-xs tracking-widest text-gray-400 mb-6">Navigazione</h4>
            <ul className="space-y-4 text-sm text-gray-800">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Shop Album</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Forum Community</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Mappa Fan</a></li>
            </ul>
          </div>

          {/* Supporto */}
          <div>
            <h4 className="font-bold uppercase text-xs tracking-widest text-gray-400 mb-6">Aiuto</h4>
            <ul className="space-y-4 text-sm text-gray-800">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Spedizioni</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold uppercase text-xs tracking-widest text-gray-400 mb-6">Seguici</h4>
            <div className="flex gap-4 text-xs font-black">
              <a href="#" target="_blank" rel="noreferrer" className="group">
                <img src={instagram} alt="Instagram" className="w-6 h-6 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" style={{ filter: 'grayscale(1) brightness(0.5)' }}/>

            </a>

            <a href="https://tiktok.com/@tuoprofilo" target="_blank" rel="noreferrer" className="group">
              <img src={tiktok} alt="TikTok" className="w-6 h-6 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" style={{ filter: 'grayscale(1) brightness(0.5)' }}/>
            </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-900/5">
          <p className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400">
            © 2026 Seoul Soul ITALY
          </p>
        </div>
      </div>
    </section>
  );
};

export default CombinedFooter;