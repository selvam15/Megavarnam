
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-yellow-300 mb-12">{t.aboutTitle}</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <img 
              src="https://picsum.photos/seed/astrologer/400/400" 
              alt="P K Megavarnan" 
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-yellow-400 shadow-2xl shadow-yellow-400/20"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-3xl font-bold text-white font-['Playfair_Display']">{t.aboutName}</h3>
            <p className="text-xl text-yellow-400 mb-4">{t.aboutProfession}</p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t.aboutBio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
