
export enum Language {
  EN = 'en',
  TA = 'ta',
  TE = 'te',
}

export interface TranslationContent {
  meganathAstro: string;
  subtitle: string;
  bookConsultation: string;
  learnMore: string;
  aboutTitle: string;
  aboutName: string;
  aboutProfession: string;
  aboutBio: string;
  servicesTitle: string;
  services: { title: string; description: string }[];
  zodiacTitle: string;
  zodiacPrompt: string;
  testimonialsTitle: string;
  testimonials: { quote: string; name: string; location: string }[];
  contactTitle: string;
  contactForm: {
    name: string;
    dob: string;
    pob: string;
    message: string;
    submit: string;
  };
  contactDetails: string;
  footerText: string;
}

export type Translations = {
  [key in Language]: TranslationContent;
};

export interface ZodiacSign {
  id: string;
  name: { [key in Language]: string };
  dates: string;
  prediction: { [key in Language]: string };
}
