export interface Service {
  id: string;
  name: string;
  category: 'hair' | 'skin' | 'body' | 'bridal';
  price: string;
  duration: string;
  description: string;
  image: string;
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialization: string;
  bio: string;
  image: string;
  socials: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
    tiktok?: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hair' | 'makeup' | 'nails' | 'spa' | 'before-after';
  image: string;
  beforeImage?: string; // For before-after slider comparison
  isVideo?: boolean;
  videoUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  role?: string;
  text: string;
  rating: number;
  image: string;
  treatment: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'booking' | 'treatments' | 'policies';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Beauty' | 'Hair Care' | 'Wellness' | 'Trends';
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  tags: string[];
}
