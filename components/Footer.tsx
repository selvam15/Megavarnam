
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gray-900 border-t border-yellow-400/20 py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p className="text-2xl font-bold text-white mb-2 font-['Playfair_Display']">{t.meganathAstro}</p>
        <p className="mb-4">
          +91 93904 23009 | megatelelinks@gmail.com
        </p>
        <p className="text-sm">{t.footerText}</p>
      </div>
    </footer>
  );
};

export default Footer;
