import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs = ({ productName }) => {
  const location = useLocation();
  
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] mb-10 text-slate-400 relative z-10">
      {/* Home è sempre il punto di partenza */}
      <Link to="/" className="hover:text-pink-500 transition-colors">
        Home
      </Link>

      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        // Mappatura nomi 
        const displayName = value === 'store' ? 'Shop' : value;

        return (
          <div key={to} className="flex items-center gap-2">
            <ChevronRight size={10} className="text-slate-900" />
            
            {last ? (
              // Se è l'ultimo elemento, mostriamo il nome del prodotto (se passato) o il path
              <span className="text-slate-900 italic font-black">
                {productName ? productName : displayName}
              </span>
            ) : (
              // Altrimenti è un link cliccabile
              <Link to={to} className="hover:text-cyan-500 transition-colors">
                {displayName}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;