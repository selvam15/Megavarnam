
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-yellow-300 mb-12">{t.contactTitle}</h2>
        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="lg:w-1/2 bg-gray-800/50 p-8 rounded-lg border border-yellow-400/20">
            <form action="mailto:megatelelinks@gmail.com" method="POST" encType="text/plain">
              <div className="mb-4">
                <label htmlFor="name" className="block text-yellow-300 mb-2">{t.contactForm.name}</label>
                <input type="text" id="name" className="w-full bg-gray-700 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="dob" className="block text-yellow-300 mb-2">{t.contactForm.dob}</label>
                  <input type="date" id="dob" className="w-full bg-gray-700 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                </div>
                 <div>
                  <label htmlFor="tob" className="block text-yellow-300 mb-2">{t.contactForm.tob}</label>
                  <input type="time" id="tob"className="w-full bg-gray-700 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
                </div>
                <div>
                  <label htmlFor="pob" className="block text-yellow-300 mb-2">{t.contactForm.pob}</label>
                  <input type="text" id="pob" className="w-full bg-gray-700 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-yellow-300 mb-2">{t.contactForm.message}</label>
                <textarea id="message" rows={5} className="w-full bg-gray-700 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
              </div>
              <button type="submit" className="w-full px-8 py-3 bg-yellow-400 text-gray-900 font-bold rounded-full hover:bg-yellow-300 transition-transform transform hover:scale-105 shadow-lg">
                {t.contactForm.submit}
              </button>
            </form>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-4 font-['Playfair_Display']">{t.contactDetails}</h3>
            <div className="space-y-4 text-lg text-gray-300">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +91 93904 23009
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                megatelelinks@gmail.com
              </p>
              <p className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-yellow-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                #5/51 Nagaru Street, Narayanavanam - 517581, Tirupati Dist, A.P.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
