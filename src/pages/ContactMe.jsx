import React from 'react';
import contact from 'img/contact.png';
import tiktok from 'img/tiktok.svg'; 
import logo from 'img/Contact.png'; 

const ContactMe = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfaf7]">
      
      {/* HEADER */}
      <header className="h-[60vh] relative flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img src={contact} alt="About Me Background" className={`w-full h-full object-cover`}/>
          <div className="absolute inset-0 bg-black/40"></div> 
        </div>

        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
            Mettiamoci in <br /> 
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-cyan-400 pr-2 pt-2">
              contatto
            </span>
          </h1>
          <p className="text-white/80 mt-4 font-bold uppercase tracking-widest text-sm">
            Seoul Soul • Community • Support
          </p>
        </div>
      </header>

      {/* SEZIONE FORM */}
      <section className="relative py-20 overflow-hidden flex-1">
        <div className="absolute inset-0 bg-[radial-gradient(at_0%_0%,#f8bccb_0%,transparent_60%),radial-gradient(at_100%_100%,#d1edf1_0%,transparent_60%),radial-gradient(at_50%_50%,#e9d6bc_0%,transparent_50%)] opacity-70 pointer-events-none"></div>

        {/*<div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
          <div className="absolute top-[0%] left-[-5%] w-100 h-100 bg-[#f8bccb] rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[0%] right-[-5%] w-125 h-125 bg-[#d1edf1] rounded-full blur-[130px]"></div>
        </div>*/}

        <div className="relative z-10 max-w-4xl mx-auto px-6">
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* CAMPO NOME */}
              <div className="flex flex-col gap-3 group">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-4">Nome</label>
                <div className="relative p-0.5 rounded-sm bg-linear-to-r from-pink-400 to-cyan-400 opacity-60 group-focus-within:opacity-100 group-focus-within:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all duration-500">
                  <input 
                    type="text" 
                    placeholder="Il tuo nome"
                    className="w-full bg-white rounded-sm px-6 py-4 outline-none font-bold text-slate-800 placeholder:text-slate-300 placeholder:italic transition-all"
                  />
                </div>
              </div>

              {/* CAMPO EMAIL */}
              <div className="flex flex-col gap-3 group">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-4">Email</label>
                <div className="relative p-0.5 rounded-sm bg-linear-to-r from-pink-400 to-cyan-400 opacity-60 group-focus-within:opacity-100 group-focus-within:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-500">
                  <input 
                    type="email" 
                    placeholder="tua@email.com"
                    className="w-full bg-white rounded-sm px-6 py-4 outline-none font-bold text-slate-800 placeholder:text-slate-300 placeholder:italic transition-all"
                  />
                </div>
              </div>

              {/* CAMPO OGGETTO (SELECT) */}
              <div className="md:col-span-2 flex flex-col gap-3 group">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-4">Cosa ti serve?</label>
                <div className="relative p-0.5 rounded-sm bg-linear-to-r from-pink-400 to-cyan-400 opacity-60 group-focus-within:opacity-100 transition-all duration-500">
                  <select className="w-full bg-white rounded-sm px-6 py-4 outline-none font-bold text-slate-800 appearance-none cursor-pointer">
                    <option>Informazioni Prodotti</option>
                    <option>Collaborazioni K-Pop</option>
                    <option>Segnalazione Problemi</option>
                    <option>Altro</option>
                  </select>
                </div>
              </div>

              {/* CAMPO MESSAGGIO (TEXTAREA) */}
              <div className="md:col-span-2 flex flex-col gap-3 group">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-4">Messaggio</label>
                <div className="relative s rounded-sm bg-linear-to-r from-pink-400 to-cyan-400 opacity-60 group-focus-within:opacity-100 group-focus-within:shadow-[0_0_25px_rgba(236,72,153,0.2)] transition-all duration-500">
                  <textarea 
                    rows="6" 
                    placeholder="Scrivi qui il tuo messaggio..."
                    className="w-full bg-white rounded-sm px-6 py-4 outline-none font-bold text-slate-800 placeholder:text-slate-300 placeholder:italic resize-none block"
                  ></textarea>
                </div>
              </div>

              <div className="md:col-span-2 mt-6 relative group/btn">
                <div className="absolute -inset-1 bg-linear-to-r from-pink-500 to-cyan-400 rounded-sm blur opacity-40 group-hover/btn:opacity-0 transition-all duration-500"></div>
                    <div className="relative p-0.5 rounded-sm bg-linear-to-r from-pink-500 to-cyan-400 transition-all duration-500">
                        <button type="submit" className="relative w-full py-5 rounded-sm font-black italic uppercase tracking-[0.2em] transition-all duration-300 bg-white text-slate-900 group-hover/btn:bg-transparent group-hover/btn:text-white">
                            Invia Messaggio
                        </button>
                    </div>
                </div>

            </form>

            {/* FOOTER DEL FORM */}
            <div className="mt-12 pt-8 border-t border-slate-100 text-center">
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 mb-6">Oppure seguimi qui</p>
              <div className="flex gap-6 mt-10 justify-center">
               <a href="#" className="w-12 h-12 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                  <img src={instagram} alt="IG" className={`w-6 h-6 `}/>
                
               </a>
               <a href="#" className="w-12 h-12 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                  <img src={tiktok} alt="TT" className={`w-6 h-6 `}/>
               </a>
            </div>
            </div>

          </div>
      </section>
    </div>
  );
};

export default ContactMe;