import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Search, ShoppingBag, X, Menu } from 'lucide-react'; 
import { useCart } from '../context/CartContext';

const logo = 'img/logo.png';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchInputRef = useRef(null);
  const mobileSearchRef = useRef(null);
  const { totalItems } = useCart();
  const isDarkTheme = isScrolled || isMobileMenuOpen || location.pathname.startsWith('/store') || location.pathname.startsWith('/cart') || location.pathname.startsWith('/forum');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen) searchInputRef.current?.focus();
  }, [isSearchOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const links = [
    { name: "HOME", href: "/" },
    { name: "STORE", href: "/store" },
    { name: "ABOUT ME", href: "/about" },
    { name: "FORUM", href: "/forum" },
    { name: "CONTACT ME", href: "/contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 backdrop-blur-md w-full z-50 transition-all duration-500 ${
        isDarkTheme ? "bg-white/80 shadow-md py-4" : "bg-transparent py-6"
      }`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          
          {/* LOGO */}
          <div className={`w-30 transition-opacity duration-300 ${isSearchOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            <Link to="/">
              <img src={logo} alt="Logo" className="transition-all duration-300" /> 
            </Link>
          </div>

          {/* LINKS CENTRALI — solo desktop */}
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

          {/* AREA AZIONI */}
          <div className="flex items-center gap-5 relative">
            
            {/* BARRA DI RICERCA — solo desktop */}
            <div className={`hidden lg:flex absolute right-full mr-4 items-center transition-all duration-500 origin-right ${
              isSearchOpen ? "w-62.5 md:w-100 opacity-100 scale-100" : "w-0 opacity-0 scale-95 pointer-events-none"
            }`}>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Cerca prodotti, album..."
                className="w-full bg-slate-100/50 border-b-2 border-pink-400 px-4 py-1 text-sm font-bold focus:outline-hidden text-slate-900 rounded-t-lg"
              />
            </div>

            {/* Bottone Lente — solo desktop */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hidden lg:block group relative z-10"
            >
              {isSearchOpen ? (
                <X size={26} className="text-pink-500 hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Search 
                  size={24} 
                  className={`transition-colors duration-300 ${isDarkTheme ? "text-gray-800" : "text-white"} group-hover:text-pink-500`} 
                />
              )}
            </button>

            {/* Carrello */}
            <Link to="/cart" className={`group relative transition-all duration-300 ${isSearchOpen ? "opacity-50 pointer-events-none" : "opacity-100"}`}>
              <ShoppingBag size={26} className={`transition-colors duration-300 ${isDarkTheme ? "text-gray-800" : "text-white"} group-hover:text-cyan-400`} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-linear-to-r from-pink-500 to-cyan-400 text-white text-[10px] font-black w-4 h-4 flex items-center justify-center rounded-full shadow-[0_0_10px_rgba(34,211,238,0.4)]">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Icona search — solo mobile */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="lg:hidden relative z-10"
            >
              {isSearchOpen ? (
                <X size={26} className="text-pink-500 transition-transform duration-300" />
              ) : (
                <Search size={26} className={`transition-colors duration-300 ${isDarkTheme ? "text-gray-800" : "text-white"}`} />
              )}
            </button>

            {/* Hamburger — solo mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-10 p-1"
            >
              {isMobileMenuOpen ? (
                <X size={28} className="text-gray-800 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu size={28} className={`transition-colors duration-300 ${isDarkTheme ? "text-gray-800" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>

        {/* BARRA RICERCA MOBILE — scorre sotto la navbar */}
        <div className={`lg:hidden w-full transition-all duration-400 overflow-hidden ${
          isSearchOpen && !isMobileMenuOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="px-8 py-3 border-t border-slate-100">
            <div className="relative p-0.5 rounded-sm bg-linear-to-r from-pink-400 to-cyan-400">
              <div className="flex items-center bg-white rounded-sm px-4 py-3 gap-3">
                <Search size={16} className="text-slate-400 shrink-0" />
                <input
                  ref={mobileSearchRef}
                  type="text"
                  placeholder="Cerca prodotti, album..."
                  className="w-full outline-none text-sm font-bold text-slate-800 placeholder:text-slate-300 placeholder:italic"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        <div className="absolute inset-0 bg-white/95 backdrop-blur-xl" />
        
        <div className="relative h-full flex flex-col items-center justify-center gap-2 px-8">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100 rounded-full blur-[80px] opacity-50 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-100 rounded-full blur-[80px] opacity-50 pointer-events-none" />

          {links.map((link, i) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className="relative group w-full text-center py-4"
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${i * 60}ms` : '0ms',
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transition: 'transform 0.4s ease, opacity 0.4s ease'
                }}
              >
                <span className={`text-3xl font-black uppercase tracking-tighter bg-linear-to-r from-pink-500 to-cyan-400 bg-clip-text transition-all duration-300 ${
                  isActive ? "text-transparent" : "text-gray-800 group-hover:text-transparent"
                }`}>
                  {link.name}
                </span>
                {isActive && (
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-pink-400" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;