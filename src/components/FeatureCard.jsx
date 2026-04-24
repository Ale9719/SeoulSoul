const FeatureCard = ({
  title,
  className = "",
  text,
  buttonText,
  bgColor,
  neonColor,
  hoverBg,
  isGradient,
  showButton = true,
  textColor = "text-gray-800",
}) => {
  return (
    <div
      className={`${bgColor} flex flex-col items-center justify-between p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:brightness-95 cursor-pointer ${className}`}
    >
      {/* Titolo */}
      <h2 className={`text-lg sm:text-xl font-bold uppercase tracking-widest text-center ${textColor}`}>
        {title}
      </h2>

      {/* Immagine placeholder */}
      <div className="flex-1 flex items-center justify-center py-6">
        <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 bg-white/20 rounded-lg border border-white/30 flex items-center justify-center text-xs italic text-center px-2 opacity-60">
          Immagine {title}
        </div>
      </div>

      {/* Testo + Bottone */}
      <div className="flex flex-col items-center gap-3 w-full text-center">
        <p className={`text-sm leading-snug ${textColor}`}>{text}</p>

        {showButton && (
          <>
            {isGradient ? (
              <div className={`p-[1.5px] rounded-md ${neonColor} w-full`}>
                <button
                  className={`w-full py-2 px-3 ${bgColor} hover:bg-transparent rounded-sm text-[10px] sm:text-xs font-black uppercase tracking-tighter text-slate-800 hover:text-white transition-all duration-300`}
                >
                  {buttonText}
                </button>
              </div>
            ) : (
              <button
                className={`w-full py-2 px-3 bg-white/20 border-2 rounded-md text-[10px] sm:text-xs font-black transition-all duration-300 uppercase tracking-tighter ${neonColor} ${hoverBg}`}
              >
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