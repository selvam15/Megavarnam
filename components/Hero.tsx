
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white font-['Playfair_Display'] mb-4 animate-fade-in-down">
          {t.meganathAstro}
        </h1>
        <p className="text-xl md:text-2xl text-yellow-300 mb-8 animate-fade-in-up">
          {t.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
          <a
            href="#contact"
            className="px-8 py-3 bg-yellow-400 text-gray-900 font-bold rounded-full hover:bg-yellow-300 transition-transform transform hover:scale-105 shadow-lg"
          >
            {t.bookConsultation}
          </a>
          <a
            href="#about"
            className="px-8 py-3 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-all transform hover:scale-105"
          >
            {t.learnMore}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
