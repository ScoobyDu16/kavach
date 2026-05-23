export interface ServicePricing {
  [key: string]: number;
}

export interface ServiceDos {
  dos: string[];
  donts: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  category: 'residential' | 'commercial';
  shortDescription: string;
  fullDescription: string;
  image: string;
  duration: string;
  pricing: ServicePricing;
  recommendations: string[];
  dosAndDonts: ServiceDos;
  faqs: ServiceFAQ[];
  startingPrice: number;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
