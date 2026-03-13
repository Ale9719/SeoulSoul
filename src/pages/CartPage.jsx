import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext'; 
import Breadcrumbs from '../components/Breadcrumbs';

const CartPage = () => {
  // Estraiamo tutto ciò che ci serve dal Context
  const { cartItems, addToCart, removeFromCart, updateQuantity } = useCart();

  // Calcoli dinamici basati sui prodotti reali
  const subtotal = cartItems.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0);
  const shipping = cartItems.length > 0 ? 5.90 : 0;
  const total = subtotal + shipping;

  // Se il carrello è vuoto, mostriamo un design dedicato
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#fcfaf7] pt-40 pb-20 px-6 flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-[radial-gradient(at_0%_0%,#f8bccb_0%,transparent_60%),radial-gradient(at_100%_100%,#d1edf1_0%,transparent_60%),radial-gradient(at_50%_50%,#e9d6bc_0%,transparent_50%)] opacity-70 pointer-events-none"></div>
        <div className="relative z-10 w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-8 text-slate-300">
          <ShoppingBag size={40} />
        </div>
        <h1 className="relative z-10 text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-slate-900 mb-4">
          Il tuo carrello è <span className="text-pink-500">vuoto</span>
        </h1>
        <p className="relative z-10 text-slate-500 font-bold uppercase tracking-widest text-sm mb-10">
          La tua collezione K-Culture aspetta solo te.
        </p>
        <Link to="/store" className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-pink-500 to-cyan-400 rounded-sm blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative bg-white border-slate-900 px-10 py-4 rounded-sm font-black italic uppercase tracking-[0.2em] text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all">
            Torna allo Shop
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfaf7] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_0%_0%,#f8bccb_0%,transparent_60%),radial-gradient(at_100%_100%,#d1edf1_0%,transparent_60%),radial-gradient(at_50%_50%,#e9d6bc_0%,transparent_50%)] opacity-70 pointer-events-none"></div>
     {/* <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <div className="absolute top-[0%] left-[-10%] w-125 h-125 bg-[#f8bccb] rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[0%] right-[-10%] w-150 h-150 bg-[#d1edf1] rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-white opacity-20 blur-[180px] rounded-full"></div>
      </div>*/}
    <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Breadcrumbs />
        {/* HEADER CARRELLO */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <Link to="/store" className="group flex items-center gap-2 text-slate-400 hover:text-pink-500 font-black uppercase text-[10px] tracking-[0.3em] mb-4 transition-colors">
              <ArrowLeft size={14} /> Continua lo Shopping
            </Link>
            <h1 className="text-6xl font-black uppercase tracking-tighter text-slate-900 leading-none">
              Il Tuo <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-cyan-400 pr-2 pb-2">Carrello</span>
            </h1>
          </div>
          <p className="font-black uppercase tracking-widest text-slate-400 text-sm">
            {cartItems.length} {cartItems.length === 1 ? 'Articolo selezionato' : 'Articoli selezionati'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* LISTA PRODOTTI REALI (SINISTRA) */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-8">
              {cartItems.map((item) => (
                <div key={item.id} className="group relative flex flex-col md:flex-row items-center gap-8 p-6 rounded-sm bg-white border border-slate-100 hover:shadow-xl hover:shadow-pink-100/50 transition-all duration-500">
                  
                  {/* Immagine Prodotto */}
                  <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-sm overflow-hidden bg-slate-50 border border-slate-100">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>

                  {/* Info Prodotto */}
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-[10px] font-black uppercase tracking-widest text-pink-500 mb-1">{item.category}</p>
                    <h3 className="text-2xl font-black tracking-tighter text-slate-900 mb-2 leading-tight">{item.name}</h3>
                    <p className="text-xl font-black text-slate-900">{parseFloat(item.price).toFixed(2)}€</p>
                  </div>

                  {/* Selettore Quantità Funzionante */}
                  <div className="flex items-center gap-4 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-slate-400 hover:text-pink-500 transition-colors disabled:opacity-30"
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-black text-slate-900 w-6 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-slate-400 hover:text-cyan-500 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Rimuovi Funzionante */}
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-slate-300 hover:text-red-500 transition-colors p-2"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>

        {/* RIEPILOGO ORDINE (DESTRA) */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 group"> 
            <div className="absolute -inset-2 bg-linear-to-r from-pink-400 to-cyan-400 rounded-[3rem] blur-2xl opacity-25 group-hover:opacity-50 transition duration-1000"></div>
    
            {/* IL BLOCCO RIEPILOGO */}
            <div className="relative p-10 bg-white rounded-[3rem] shadow-2xl overflow-hidden">
      
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 text-slate-900">
                Riepilogo
            </h2>
      
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-slate-900 font-bold uppercase text-xs tracking-widest">
                <span>Subtotale</span>
                <span className="text-slate-900 font-black">{subtotal.toFixed(2)}€</span>
            </div>
            <div className="flex justify-between text-slate-900 font-bold uppercase text-xs tracking-widest">
              <span>Spedizione</span>
              <span className="text-slate-900 font-black">{shipping.toFixed(2)}€</span>
            </div>
        
            <div className="h-px bg-white/10 my-4"></div>
        
            <div className="flex justify-between items-end">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400">Totale</span>
              <span className="text-4xl font-black tracking-tighter text-slate-900">
                {total.toFixed(2)}€
              </span>
            </div>
          </div>

        {/* Tasto Checkout Neon */}
          <button className="w-full relative group/btn cursor-pointer">
            <div className="absolute -inset-1 bg-linear-to-r from-pink-500 to-cyan-400 rounded-sm blur opacity-60 group-hover/btn:opacity-100 transition duration-500"></div>
            <div className="relative hover:bg-linear-to-r hover:from-pink-500 hover:to-cyan-400 bg-slate-900 py-5 rounded-sm font-black italic uppercase tracking-[0.2em] text-white transition-all transform group-hover/btn:scale-[1.02] text-center">
            Vai al Pagamento
            </div>
          </button>

          <p className="text-[9px] text-slate-500 uppercase tracking-widest text-center mt-6 font-bold">
            Transazioni sicure e criptate SSL
          </p>
        </div>
      </div>
    </div>

  </div>
 </div>
</div>
  );
};

export default CartPage;