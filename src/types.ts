export interface CustomerStory {
  image: string;
  caption: string;
  customerName?: string;
  initials?: string;
}

export interface Category {
  name: string;
  image: string;
  icon: 'Shirt' | 'Watch' | 'Gift';
}

export interface Product {
  image: string;
  name: string;
  price: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  path: string;
}

export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Particle {
  cx: number;
  cy: number;
  r: number;
  animateCxFrom: number;
  animateCxTo: number;
  animateCyFrom: number;
  animateCyTo: number;
  dur: number;
}