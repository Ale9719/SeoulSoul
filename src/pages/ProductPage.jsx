import React, { useState } from 'react'; 
import { useParams } from 'react-router-dom';
import productsData from '../data/products.json';
import { useCart } from '../context/CartContext';
import Breadcrumbs from '../components/Breadcrumbs';


const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart(); // Estraiamo la funzione addToCart
  const [added, setAdded] = useState(false); // Stato per il feedback del bottone

  const product = productsData.find(p => p.id === parseInt(id));

  if (!product) return <div className="pt-40 text-center text-2xl font-black">Prodotto non trovato! 💔</div>;

  // Gestione del click
  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    // Reset del feedback dopo 2 secondi
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    
    <div className="min-h-screen bg-[#fcfaf7] pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <div className="absolute top-[0%] left-[-10%] w-125 h-125 bg-[#f8bccb] rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[0%] right-[-10%] w-150 h-150 bg-[#d1edf1] rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-white opacity-20 blur-[180px] rounded-full"></div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="col-span-full">
      <Breadcrumbs productName={product.name} />
    </div>
        {/* SINISTRA: Immagine*/}
        <div className="relative p-0.75 rounded-[4rem] bg-linear-to-br from-pink-400 to-cyan-400 shadow-2xl shadow-pink-200">
           <img 
             src={product.image} 
             alt={product.name} 
             className="w-full aspect-square object-cover rounded-[3.8rem] bg-white"
           />
        </div>

        {/* DESTRA: Dettagli */}
        <div className="flex flex-col gap-6">
          <span className="text-pink-500 font-black uppercase tracking-[0.4em] text-xs">{product.category}</span>
          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-slate-900 leading-none">
            {product.name}
          </h1>
          <p className="text-4xl font-black text-slate-900">{product.price}€</p>
          
          <div className="h-0.5 w-20 bg-linear-to-r from-pink-400 to-cyan-400 my-4"></div>
          
          <p className="text-slate-500 leading-relaxed font-medium">
            {product.description || "Questo è un pezzo unico selezionato da Seoul Soul per la tua collezione. Qualità garantita e stile inconfondibile K-Culture."}
          </p>

          {/* bottone */}
          <div className="mt-8 relative group/btn w-full max-w-sm">
            <div className={`absolute -inset-1 bg-linear-to-r from-pink-500 to-cyan-400 rounded-2xl blur transition-all duration-500 ${added ? 'opacity-100' : 'opacity-40 group-hover/btn:opacity-80'}`}></div>
            
            <div className="relative p-0.5 rounded-2xl bg-linear-to-r from-pink-500 to-cyan-400 transition-all duration-500">
              <button 
                onClick={handleAddToCart}
                className={`relative w-full py-5 rounded-[14px] font-black italic uppercase tracking-[0.2em] transition-all duration-300 ${added ? 'bg-transparent text-white' : 'bg-white text-slate-900 group-hover/btn:bg-transparent group-hover/btn:text-white'}`} >
                {added ? 'Aggiunto! ✨' : 'Aggiungi al Carrello'}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductPage;