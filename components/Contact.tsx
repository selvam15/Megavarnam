import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_29mq6ku',      // EmailJS Service ID
        'template_zljibyw',     // EmailJS Template ID
        formRef.current,
        'QWN6p-cyqQ0PbiGua'     // EmailJS Public Key
      )
      .then(
        () => {
          alert('Message sent successfully!');
          formRef.current?.reset();
        },
        (error) => {
          console.error('EmailJS Error:', error);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-yellow-300 mb-12">
          {t.contactTitle}
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* CONTACT FORM */}
          <div className="lg:w-1/2 bg-gray-800/50 p-8 rounded-lg border border-yellow-400/20">
            <form ref={formRef} onSubmit={sendEmail}>

              {/* NAME */}
              <div className="mb-4">
                <label className="block text-yellow-300 mb-2">
                  {t.contactForm.name}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-gray-700 text-white p-3 rounded-md border border-gray-600 focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* DOB / TOB / POB */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

                <div>
                  <label className="block text-yellow-300 mb-2">
                    {t.contactForm.dob}
                  </label>
                  <input
                    type="date"
                    name="dob"
                    required
                    className="w-full bg-gray-700 text-white p-3 rounded-md border border-gray-600 focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div>
                  <label className="block text-yellow-300 mb-2">
                    {t.contactForm.tob}
                  </label>
                  <input
                    type="time"
                    name="tob"
                    required
                    className="w-full bg-gray-700 text-white p-3 rounded-md border border-gray-600 focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div>
                  <label className="block text-yellow-300 mb-2">
                    {t.contactForm.pob}
                  </label>
                  <input
                    type="text"
                    name="pob"
                    required
                    className="w-full bg-gray-700 text-white p-3 rounded-md border border-gray-600 focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

              </div>

              {/* MESSAGE */}
              <div className="mb-6">
                <label className="block text-yellow-300 mb-2">
                  {t.contactForm.message}
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-gray-700 text-white p-3 rounded-md border border-gray-600 focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full px-8 py-3 bg-yellow-400 text-gray-900 font-bold rounded-full hover:bg-yellow-300 transition-transform transform hover:scale-105 shadow-lg"
              >
                {t.contactForm.submit}
              </button>

            </form>
          </div>

          {/* CONTACT DETAILS */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t.contactDetails}
            </h3>

            <div className="space-y-4 text-lg text-gray-300">
              <p>📞 +91 93904 23009</p>
              <p>📧 megatelelinks@gmail.com</p>
              <p>📍 #5/51 Nagaru Street, Narayanavanam – 517581</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
