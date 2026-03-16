import React, { useState, useEffect } from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import productsData from '../Data/products.json';
import Breadcrumbs from '../components/Breadcrumbs';

const Store = () => {
  const [filter, setFilter] = useState('all');
  const location = useLocation(); // Hook per leggere l'URL corrente

  // LOGICA DI AGGIORNAMENTO FILTRO TRAMITE URL
  useEffect(() => {
    // Legge i parametri dopo il '?' (es: ?cat=album)
    const params = new URLSearchParams(location.search);
    const categoryFromUrl = params.get('cat');

    if (categoryFromUrl) {
      // Se il parametro esiste, imposta il filtro dello stato
      setFilter(categoryFromUrl);
      
      // scrolla leggermente verso il basso per mostrare i prodotti filtrati
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  }, [location.search]); // Si riattiva ogni volta che l'URL cambia

  const filteredProducts = filter === 'all' 
    ? productsData 
    : productsData.filter(p => p.category.toLowerCase() === filter.toLowerCase());

  return (
    <div className="min-h-screen bg-[#fcfaf7] pt-32 pb-20 relative overflow-hidden">
       <div className="absolute inset-0 bg-[radial-gradient(at_0%_0%,#f8bccb_0%,transparent_60%),radial-gradient(at_100%_100%,#d1edf1_0%,transparent_60%),radial-gradient(at_50%_50%,#e9d6bc_0%,transparent_50%)] opacity-70 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Breadcrumbs />
        
        {/* TITOLO PAGINA */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-slate-900 leading-none">
            Seoul Soul <br /> 
            <span className="inline-block text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-cyan-400 pr-4 pb-2">
              Shop
            </span>
          </h1>
          <p className="text-slate-500 font-bold uppercase tracking-[0.3em] mt-4 text-sm">
            Curated K-Culture Selection
          </p>
        </div>

        {/* FILTRI CATEGORIA */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
            {['all', 'skincare', 'album', 'merchandising'].map((cat) => {
            const isSelected = filter === cat;

            if (cat === 'all') {
                return (
                  <div key="all" className={`relative p-0.5 rounded-sm transition-all duration-500 group ${isSelected ? 'bg-linear-to-r from-pink-500 to-cyan-400 scale-110 shadow-[0_0_20px_rgba(236,72,153,0.3)]' : 'bg-transparent hover:bg-linear-to-r hover:from-pink-500 hover:to-cyan-400'}`}>
                    <button onClick={() => setFilter('all')} className={`px-10 py-3 rounded-sm font-black uppercase tracking-widest text-xs transition-all duration-300 w-full cursor-pointer ${isSelected ? 'bg-transparent text-white' : 'bg-white text-slate-300 hover:text-slate-900'}`}>
                      {cat}
                    </button>
                  </div>
                );
            }

            const styles = {
              skincare: {
                active: "bg-[#e9d6bc] border-[#e9d6bc] shadow-[0_0_20px_rgba(233,214,188,0.6)]",
                hover: "hover:border-[#e9d6bc] hover:text-[#e9d6bc]"
              },
              album: {
                active: "bg-pink-500 border-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.4)]",
                hover: "hover:border-pink-500 hover:text-pink-500"
              },
              merchandising: {
                active: "bg-cyan-400 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)]",
                hover: "hover:border-cyan-400 hover:text-cyan-400"
              }
            };

            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-10 py-3 rounded-sm font-black uppercase tracking-widest text-xs transition-all duration-300 border-2 cursor-pointer
                  ${isSelected 
                    ? `${styles[cat].active} text-white scale-110` 
                    : `bg-white text-slate-300 border-slate-100 ${styles[cat].hover}`
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* GRIGLIA PRODOTTI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <Link to={`/store/${product.id}`} key={product.id} className="group cursor-pointer">
              <div className="relative p-0.5 rounded-[3rem] bg-transparent group-hover:bg-linear-to-r group-hover:from-pink-400 group-hover:to-cyan-400 transition-all duration-500">
                <div className="relative aspect-4/5 overflow-hidden rounded-[2.9rem] bg-white shadow-sm group-hover:shadow-2xl transition-all">
                  {product.isNew && (
                    <div className="absolute top-6 left-6 z-10 bg-linear-to-r from-pink-500 to-cyan-400 text-white text-[9px] font-black uppercase px-3 py-1 rounded-full italic">
                      New Arrival
                    </div>
                  )}
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              </div>

              <div className="mt-6 px-4 text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-pink-500 mb-2">{product.category}</p>
                <h3 className="text-xl font-black tracking-tighter text-slate-900 leading-none group-hover:text-cyan-400 transition-colors">
                  {product.name}
                </h3>
                <div className="mt-3 inline-block px-4 py-1 rounded-full font-black text-white bg-slate-900 group-hover:bg-[#d1edf1] group-hover:text-slate-900 transition-colors">
                  {product.price}€
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;