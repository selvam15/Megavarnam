
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header className="sticky top-0 z-50 bg-gray-900/50 backdrop-blur-lg shadow-lg shadow-yellow-400/10">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl md:text-3xl font-bold text-white font-['Playfair_Display'] tracking-wider">
          {t.meganathAstro}
        </a>
        <LanguageSwitcher />
      </nav>
    </header>
  );
};

export default Header;
