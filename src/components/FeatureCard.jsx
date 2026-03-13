const FeatureCard = ({ title, className="", text, buttonText, bgColor, neonColor, hoverBg, isGradient, showButton = true, textColor = "text-gray-800" }) => {
  return (
    <div className={`${bgColor} flex-1 min-w-[50%] xl:min-w-[25%] flex flex-col items-center justify-between p-10 transition-transform hover:filter-brightness(0.85) cursor-pointer ${className}`}>
      
      {/* Titolo in alto */}
      <h2 className={`text-2xl font-bold uppercase tracking-widest text-center ${textColor}`}>
        {title}
      </h2>

      {/* Placeholder per l'immagine */}
      <div className="flex-1 flex items-center justify-center py-4">
        <div className="w-40 h-40 bg-white/20 rounded-lg border border-white/30 flex items-center justify-center italic text-sm text-center">
          Immagine {title}
        </div>
      </div>

      {/* testo ripetuto e Bottone come nel mockup */} 
      <div className="flex flex-col items-center gap-4 w-full text-center">
        <p className={`${textColor}`}>
          {text}
        </p>

{showButton && (
      <>
        {isGradient ? (
          /* VERSIONE GRADIENTE (FORUM) */  
          <div className={`p-[1.5px] rounded-md ${neonColor} transition-all duration-300 w-full max-w-37.5`}>
            <button className={`w-full h-full py-2 ${bgColor} hover:bg-transparent rounded-sm text-[10px] font-black uppercase tracking-tighter text-slate-800 hover:text-white transition-all duration-300`}>
                {buttonText}
            </button>
          </div>
        ) : (
          /* VERSIONE NORMALE (GLI ALTRI TRE) */
          <button className={`w-full h-full bg-white/20 py-2 border-2 rounded-md text-[10px] font-black transition-all duration-300 uppercase tracking-tighter ${neonColor} ${hoverBg}`}>
            {buttonText}
          </button>
        )}
      </>
    )}
      </div>
    </div>
  );
};

export default FeatureCard;
