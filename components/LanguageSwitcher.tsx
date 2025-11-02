
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../types';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: Language.EN, name: 'English', flag: '🇬🇧' },
    { code: Language.TA, name: 'தமிழ்', flag: '🇮🇳' },
    { code: Language.TE, name: 'తెలుగు', flag: '🇮🇳' },
  ];

  const selectedLanguage = languages.find(l => l.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors duration-300"
      >
        <span>{selectedLanguage?.flag}</span>
        <span className="hidden md:inline">{selectedLanguage?.name}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-md shadow-lg overflow-hidden z-20">
          <ul>
            {languages.map(lang => (
              <li key={lang.code}>
                <button
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className="w-full text-left flex items-center space-x-3 px-4 py-2 text-sm text-white hover:bg-yellow-400/20"
                >
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
