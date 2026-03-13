import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Search, ShoppingBag, X } from 'lucide-react'; 
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null); 
  const { totalItems } = useCart();
  const isDarkTheme = isScrolled || location.pathname.startsWith('/store') || location.pathname.startsWith('/cart') || location.pathname.startsWith('/forum');

  // Gestione Scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen) searchInputRef.current?.focus();
  }, [isSearchOpen]);

  const links = [
    { name: "HOME", href: "/" },
    { name: "STORE", href: "/store" },
    { name: "ABOUT ME", href: "/about" },
    { name: "FORUM", href: "/forum" },
    { name: "CONTACT ME", href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 backdrop-blur-md w-full z-50 transition-all duration-500 ${
      isDarkTheme ? "bg-white/80 shadow-md py-4" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        
        {/* LOGO */}
        <div className={`w-30 transition-opacity duration-300 ${isSearchOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          <Link to="/">
            <img src="/SeoulSoul/img/logo.png" alt="Logo" className={`transition-all duration-300`} />
          </Link>
        </div>

        {/* LINKS CENTRALI */}
        <div className={`hidden lg:flex gap-8 transition-opacity duration-300 ${isSearchOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          {links.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link key={link.name} to={link.href} className="relative group text-sm tracking-tighter">
                <span className={`transition-all font-black duration-300 bg-linear-to-r from-pink-500 to-cyan-400 bg-clip-text ${
                  isActive ? "text-transparent" : isDarkTheme ? "text-gray-800 hover:text-transparent" : "text-white hover:text-transparent"
                }`}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* AREA AZIONI: RICERCA E CARRELLO */}
        <div className="flex items-center gap-6 relative">
          
          {/* BARRA DI RICERCA ANIMATA */}
          <div className={`absolute right-full mr-4 flex items-center transition-all duration-500 origin-right ${
            isSearchOpen ? "w-62.5 md:w-100 opacity-100 scale-100" : "w-0 opacity-0 scale-95 pointer-events-none"
          }`}>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Cerca prodotti, album..."
              className={`w-full bg-slate-100/50 border-b-2 border-pink-400 px-4 py-1 text-sm font-bold focus:outline-hidden text-slate-900 rounded-t-lg`}
            />
          </div>

          {/* Bottone Lente / Chiudi */}
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="group relative z-10"
          >
            {isSearchOpen ? (
              <X size={22} className="text-pink-500 hover:rotate-90 transition-transform duration-300" />
            ) : (
              <Search 
                size={20} 
                className={`transition-colors duration-300 ${isDarkTheme ? "text-gray-800" : "text-white"} group-hover:text-pink-500`} 
              />
            )}
          </button>

          {/* Carrello */}
          <Link to="/cart" className={`group relative transition-all duration-300 ${isSearchOpen ? "opacity-50 pointer-events-none" : "opacity-100"}`}>
            <ShoppingBag size={20} className={`transition-colors duration-300 ${isDarkTheme ? "text-gray-800" : "text-white"} group-hover:text-cyan-400`} />
  
  {/* Badge quantità - diventerà dinamico quando collegheremo la logica */}
  {totalItems > 0 && (
  <span className="absolute -top-2 -right-2 bg-linear-to-r from-pink-500 to-cyan-400 text-white text-[10px] font-black w-4 h-4 flex items-center justify-center rounded-full shadow-[0_0_10px_rgba(34,211,238,0.4)]">
    {totalItems}
  </span>
  )}
        </Link>
        </div>
      </div>  
    </nav>
  );
};

export default Navbar;