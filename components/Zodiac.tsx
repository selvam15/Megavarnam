import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { zodiacSigns } from '../data/zodiacData';
import { ZodiacSign } from '../types';

const zodiacIconUrls: Record<string, string> = {
  aries: "https://static.vecteezy.com/system/resources/previews/009/456/396/original/aries-zodiac-sign-png.png",
  taurus: "https://www.pngplay.com/wp-content/uploads/2/Taurus-PNG-Clipart-Background.png",
  gemini: "https://www.pngall.com/wp-content/uploads/2016/05/Gemini-Free-Download-PNG.png",
  cancer: "http://www.pngmart.com/files/5/Cancer-Zodiac-Symbol-Transparent-Background.png",
  leo: "https://pngimg.com/d/leo_PNG46.png",
  virgo: "https://royaltyfreefootages.com/upload/video/Golden%20Virgo%20png,%20Virgo%20logo%20PNG,%20Virgo%20sign%20PNG%20transparent%20images,%20zodiac%20Virgo%20png%20full%20hd%20images%20download_1658900869.png",
  libra: "https://pngimg.com/uploads/libra/libra_PNG29.png",
  scorpio: "http://www.pngmart.com/files/5/Scorpio-Zodiac-Symbol-Transparent-Background.png",
  sagittarius: "https://pngimg.com/d/sagittarius_PNG74.png",
  capricorn: "https://pngimg.com/uploads/capricorn/capricorn_PNG94.png",
  aquarius: "https://pngimg.com/uploads/aquarius/aquarius_PNG38.png",
  pisces: "http://clipart-library.com/image_gallery2/Pisces-PNG-HD.png"
};

const Zodiac: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(zodiacSigns[0]);

  const radius = 150; // For md screens and up
  const mobileRadius = 110; // For sm screens

  return (
    <section id="zodiac" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-yellow-300 mb-4">{t.zodiacTitle}</h2>
        <p className="text-center text-gray-400 mb-12">{t.zodiacPrompt}</p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
            {zodiacSigns.map((sign, index) => {
              const angle = (index / zodiacSigns.length) * 2 * Math.PI - Math.PI / 2;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const mobileX = Math.cos(angle) * mobileRadius;
              const mobileY = Math.sin(angle) * mobileRadius;

              return (
                <button
                  key={sign.id}
                  onClick={() => setSelectedSign(sign)}
                  className={`absolute w-16 h-16 md:w-20 md:h-20 p-2 rounded-full transition-all duration-300 transform
                    ${selectedSign?.id === sign.id ? 'bg-yellow-400/30 scale-110 border-2 border-yellow-400' : 'bg-gray-800/80 hover:bg-yellow-400/20'}`}
                  style={{ 
                    top: `calc(50% + ${mobileY}px)`, 
                    left: `calc(50% + ${mobileX}px)`,
                    transform: 'translate(-50%, -50%)',
                    '@media (min-width: 768px)': {
                      top: `calc(50% + ${y}px)`,
                      left: `calc(50% + ${x}px)`,
                    }
                  } as React.CSSProperties}
                  aria-label={sign.name[language]}
                >
                  <img src={zodiacIconUrls[sign.id]} alt={sign.name[language]} className="w-full h-full object-contain" />
                </button>
              );
            })}
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gray-800 flex items-center justify-center text-center p-4 shadow-inner">
               <img src="https://static.vecteezy.com/system/resources/previews/009/344/705/large_2x/sun-transparent-background-free-png.png" alt="Sun" className="w-32 h-32 opacity-20"/>
            </div>
          </div>

          <div className="w-full lg:w-1/3 text-center lg:text-left min-h-[200px]">
            {selectedSign ? (
              <div className="bg-gray-800/50 p-6 rounded-lg border border-yellow-400/20">
                <h3 className="text-3xl font-bold text-yellow-300 font-['Playfair_Display']">{selectedSign.name[language]}</h3>
                <p className="text-sm text-gray-400 mb-4">{selectedSign.dates}</p>
                <p className="text-lg text-white leading-relaxed">{selectedSign.prediction[language]}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Zodiac;
