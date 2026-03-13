import React from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.json';
import Breadcrumbs from '../components/Breadcrumbs';

const CategoryPage = () => {
  const { categoryName } = useParams();

  // Filtriamo i prodotti per questa categoria
  const filteredProducts = productsData.filter(
    (p) => p.category.toLowerCase() === categoryName.toLowerCase()
  );

  // Configurazione stili specifici richiesti
  const categoryStyles = {
    album: {
      bg: "bg-[#f8bccb]",
      accent: "text-pink-600",
      title: "Album K-Pop",
      desc: "Le ultime uscite dei tuoi idol preferiti."
    },
    skincare: {
      bg: "bg-[#e9d6bc] bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]",
      accent: "text-[#8d6e63]",
      title: "K-Beauty Ritual",
      desc: "Segreti di bellezza direttamente da Seoul."
    },
    merchandising: {
      bg: "bg-[#d1edf1]",
      accent: "text-cyan-600",
      title: "Official Merch",
      desc: "Accessori e oggetti da collezione imperdibili."
    }
  };

  const currentStyle = categoryStyles[categoryName.toLowerCase()] || categoryStyles.album;

  return (
    <div className={`min-h-screen pt-40 pb-20 transition-colors duration-700 ${currentStyle.bg}`}>
      <div className="max-w-7xl mx-auto px-6">
        
        <Breadcrumbs productName={currentStyle.title} />

        {/* HEADER CATEGORIA */}
        <div className="mb-16">
          <h1 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter leading-none">
            {categoryName} <br />
            <span className="text-white drop-shadow-md">Collection</span>
          </h1>
          <p className="mt-6 text-sm font-black uppercase tracking-[0.4em] text-slate-700/60">
            {currentStyle.desc}
          </p>
        </div>

        {/* GRIGLIA PRODOTTI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <Link to={`/store/${product.id}`} key={product.id} className="group">
              {/* Card con stile minimale */}
              <div className="relative aspect-square overflow-hidden rounded-[3rem] bg-white shadow-xl transition-transform duration-500 group-hover:-translate-y-2">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Overlay prezzo al passaggio */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                   <span className="bg-white text-slate-900 px-6 py-2 rounded-full font-black italic">
                     {product.price}€
                   </span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 leading-tight group-hover:text-white transition-colors">
                  {product.name}
                </h3>
                <p className="text-[10px] font-black uppercase tracking-widest mt-2 opacity-50">
                  Quick View +
                </p>
              </div>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="font-black uppercase tracking-widest text-slate-500">Nessun prodotto trovato in questa categoria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;