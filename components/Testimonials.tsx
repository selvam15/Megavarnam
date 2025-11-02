
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const TestimonialCard: React.FC<{ quote: string; name: string; location: string }> = ({ quote, name, location }) => (
  <div className="bg-gray-800/50 p-8 rounded-lg border border-yellow-400/20 relative">
    <svg className="absolute top-4 left-4 h-8 w-8 text-yellow-400/30" fill="currentColor" viewBox="0 0 32 32">
      <path d="M9.333 22.667h-5.333v-8h5.333v8zM28 22.667h-5.333v-8h5.333v8zM25.333 8h-10.667c-1.473 0-2.667 1.193-2.667 2.667v10.667h10.667v-5.333h5.333c1.473 0 2.667-1.193 2.667-2.667v-5.333c0-1.473-1.193-2.667-2.667-2.667zM6.667 8h-5.333c-1.473 0-2.667 1.193-2.667 2.667v5.333c0 1.473 1.193 2.667 2.667 2.667h5.333v-10.667z" />
    </svg>
    <p className="text-lg text-gray-300 italic mb-6 mt-4">"{quote}"</p>
    <div className="text-right">
      <p className="font-bold text-white text-md">- {name}</p>
      <p className="text-sm text-yellow-400">{location}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-yellow-300 mb-12">{t.testimonialsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
