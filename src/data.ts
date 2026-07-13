import { Service, TeamMember, GalleryItem, Testimonial, FAQItem, BlogPost } from './types';

export const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1600',
    title: 'THE ART OF HAUTE COIFFURE',
    subtitle: 'Where Master Craftsmanship Meets Avant-Garde Beauty',
    ctaText: 'Reserve Experience',
    badge: 'Luxury Hair Artistry'
  },
  {
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1600',
    title: 'SANCTUARY OF PURE WELLNESS',
    subtitle: 'Indulge in Award-Winning Therapies Designed to Rejuvenate Your Soul',
    ctaText: 'Explore Spa Rituals',
    badge: 'Elite Holistic Spa'
  },
  {
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1600',
    title: 'UNVEIL YOUR SUBLIME RADIANCE',
    subtitle: 'Flawless Aesthetic Treatments and Red-Carpet Ready Transformations',
    ctaText: 'Discover Aesthetics',
    badge: 'Couture Makeup & Skin'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    name: 'Couture Haircut & Signature Blowout',
    category: 'hair',
    price: '$120 - $250',
    duration: '75 Mins',
    description: 'Bespoke sculptural cut by our master stylists, tailored precisely to your facial contours, followed by an indulgent scalp massage, conditioning therapy, and a high-volume red-carpet blowout.',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800',
    features: ['Face-shape consultation', 'Kerastase botanical wash', 'Sculpting cut & texture profile', 'Premium serum finish']
  },
  {
    id: 's2',
    name: 'French Balayage & Couture Painting',
    category: 'hair',
    price: '$280 - $450',
    duration: '180 Mins',
    description: 'Exquisite hand-painted highlights designed to capture natural dimensional light. Includes custom root shadow smudge, signature glossing glaze, and structural bond-builder protection.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
    features: ['Custom hand-painted placement', 'Olaplex structural repair', 'Tone glossing service', 'Post-color hydration masque']
  },
  {
    id: 's3',
    name: 'Silk Press & Avant-Garde Styling',
    category: 'hair',
    price: '$95 - $160',
    duration: '60 Mins',
    description: 'Precision thermal smoothing or premium luxury wave styling. Our state-of-the-art steam-infused plates protect structural keratin while infusing blinding diamond shine and movement.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    features: ['Heat defense silk treatment', 'Steam-infusion ironwork', 'Luxurious crown volume styling', 'Anti-humidity sealant']
  },
  {
    id: 's4',
    name: 'Royal Grooming & Beard Sculpting',
    category: 'hair',
    price: '$75 - $120',
    duration: '45 Mins',
    description: 'The ultimate gentleman’s experience. Includes hot towel herbal compress, precision beard fading, edge razor contouring with cold-pressed sandalwood oils, and a skin hydration rub.',
    image: 'https://images.unsplash.com/photo-1621574539437-4b7cb63120b8?auto=format&fit=crop&q=80&w=800',
    features: ['Steam herbal wrap', 'Sandalwood pre-shave oiling', 'Straight-edge razor line-up', 'Soothing balm massage']
  },
  {
    id: 's5',
    name: 'Sublime Caviar & Gold Skin Facial',
    category: 'skin',
    price: '$180 - $320',
    duration: '90 Mins',
    description: 'A decadent cell-rejuvenating facial utilizing luxury caviar extract, marine collagen, and 24K gold nano-particles to instantly lift, deeply hydrate, and brightens dull skin complexions.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800',
    features: ['Ultrasonic deep exfoliation', '24K gold collagen masque', 'Lifting lymphatic massage', 'Pure oxygen-infusion glow']
  },
  {
    id: 's6',
    name: 'Signature Red Carpet Makeup Artistry',
    category: 'skin',
    price: '$150 - $280',
    duration: '60 Mins',
    description: 'Flawless makeup application from high-fashion artists. Ideal for gala events, photoshoots, and elite functions, utilizing luxury hypoallergenic formulas with airbrush finishing.',
    image: 'https://images.unsplash.com/photo-1487412941390-2210615b233f?auto=format&fit=crop&q=80&w=800',
    features: ['High-definition skin prep', 'Custom premium lash contouring', 'Luxury brand palette selection', 'Airbrush sealing mist']
  },
  {
    id: 's7',
    name: '24K Gold Dust Luxury Nail Spas',
    category: 'body',
    price: '$85 - $130',
    duration: '75 Mins',
    description: 'Exquisite manicure and pedicure pairing. Pamper your hands and feet with white truffle oil scrubs, a rich gold dust clay masque, precision nail grooming, and everlasting gel polish.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800',
    features: ['White truffle exfoliating polish', 'Warm paraffin silk wrap', 'Gold dust mud masque', 'Everlasting custom gel paint']
  },
  {
    id: 's8',
    name: 'Heavenly Hot Stone & Marma Massage',
    category: 'body',
    price: '$160 - $240',
    duration: '90 Mins',
    description: 'Unwind completely with heated volcanic basalt stones and signature essential oil aromatherapy. Targets muscle tension while realigning natural energy channels for complete tranquility.',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800',
    features: ['Volcanic hot stone therapy', 'Artisanal organic oil blending', 'Acupressure marma alignment', 'Soothing warm foot bath']
  },
  {
    id: 's9',
    name: 'Advanced Cellular Skin Peeling',
    category: 'skin',
    price: '$140 - $220',
    duration: '45 Mins',
    description: 'Dermatologist-formulated skin chemical resurfacing to target hyperpigmentation, fine lines, and blemishes. Encourages rapid cell renewal for pristine, youthful glass skin.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800',
    features: ['Gentle fruit acid peel', 'Vitamin C complex boosting', 'Soothing botanical ice globe rub', 'Broad-spectrum UV shield']
  },
  {
    id: 's10',
    name: 'Imperial Imperial Bridal Couture Package',
    category: 'bridal',
    price: '$650 - $1200',
    duration: '360 Mins',
    description: 'The ultimate dream experience for our brides. Includes bridal styling trial, wedding day high-definition makeup, body radiance bronzing, couture veil placing, and private luxury lounge service.',
    image: 'https://images.unsplash.com/photo-1591555200813-b5e3762e0d9b?auto=format&fit=crop&q=80&w=800',
    features: ['Private champagne suite', 'Wedding morning hair & makeup', 'Mother-of-the-bride glow treatment', 'Satin robe & custom scenting']
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 't1',
    name: 'Elena Rostova',
    role: 'Creative Director & Hair Stylist',
    experience: '15+ Years Experience',
    specialization: 'High-Fashion Cut & French Balayage',
    bio: 'Elena trained in Paris and London, styling for fashion weeks and celebrity clients. She specializes in crafting dimensional color and precision architectural cuts that reflect natural movement.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    socials: {
      facebook: '#',
      instagram: '#',
      tiktok: '#',
      linkedin: '#'
    }
  },
  {
    id: 't2',
    name: 'Marcus Vance',
    role: 'Master Barber & Hair Sculptor',
    experience: '10+ Years Experience',
    specialization: 'Precision Fading & Beard Grooming',
    bio: 'Renowned for his surgical precision, Marcus combines classic Italian barbering heritage with contemporary urban styling. His hot shave treatments are regarded as legendary.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    socials: {
      facebook: '#',
      instagram: '#',
      tiktok: '#',
      twitter: '#'
    }
  },
  {
    id: 't3',
    name: 'Dr. Sophie Dubois',
    role: 'Aesthetic Specialist',
    experience: '12+ Years Experience',
    specialization: 'Anti-Aging Facials & Skin Resurfacing',
    bio: 'With a doctorate in dermatology science, Sophie believes in result-driven aesthetic treatments. She designs custom cellular facial cocktails that instantly restore youthfulness.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
    socials: {
      instagram: '#',
      linkedin: '#',
      youtube: '#'
    }
  },
  {
    id: 't4',
    name: 'Chloe Tanaka',
    role: 'Bridal Makeup Guru',
    experience: '8+ Years Experience',
    specialization: 'High-Definition Airbrush & Radiance Glow',
    bio: 'Chloe excels in highlighting organic beauty. Having worked extensively with elite bridal designers, she masterfully tailors radiant looks that photograph exquisitely.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    socials: {
      instagram: '#',
      tiktok: '#',
      facebook: '#'
    }
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Balayage Blonde Excellence',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g2',
    title: 'Extreme Hair Transformation',
    category: 'before-after',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
    beforeImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g3',
    title: 'The Golden hour Glow Makeup',
    category: 'makeup',
    image: 'https://images.unsplash.com/photo-1487412941390-2210615b233f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g4',
    title: 'Luxury Nail Sculpting with 24K Detail',
    category: 'nails',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g5',
    title: 'Therapeutic Warm Basalt Stones',
    category: 'spa',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g6',
    title: 'Precision Bob & Sleek Finish',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'q1',
    name: 'Victoria Hearst',
    location: 'Islamabad, PK',
    role: 'Fashion Model',
    text: 'Allure Salon & Spa is an absolute masterpiece. Elena’s French Balayage is the finest in the country—my hair has never felt so silky or captured light so beautiful. Coming here is a highly addictive, sensory luxury ritual.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    treatment: 'French Balayage & Blowout'
  },
  {
    id: 'q2',
    name: 'Kamran Ali Khan',
    location: 'F-10 Sector, ISB',
    role: 'Corporate Executive',
    text: 'The premium Royal Grooming service is outstanding. Marcus’s meticulous attention to beard symmetry and styling, combined with hot herbal compress treatments, provides a peaceful haven in my busy corporate schedule.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    treatment: 'Royal Grooming Package'
  },
  {
    id: 'q3',
    name: 'Amina Jahangir',
    location: 'Diplomatic Enclave',
    role: 'Philanthropist',
    text: 'Sophie’s Caviar Facial is worth every single rupee. My skin felt plump, energized, and glowing for weeks. The salon interior is breathtaking, and the level of service is comparable to top beauty spas in Switzerland.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    treatment: 'Sublime Caviar Facial'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    question: 'How do I schedule an elite salon appointment?',
    answer: 'You can easily reserve your experience by clicking our "Book Appointment" buttons, contacting our concierge front desk at (051) 2370345, or sending a direct message via our digital WhatsApp luxury concierge.',
    category: 'general'
  },
  {
    id: 'f2',
    question: 'What is your cancellation and rescheduling policy?',
    answer: 'We request 24 hours notice for standard treatments and 48 hours notice for multi-treatment or bridal package adjustments. This helps us accommodate our premium waiting list.',
    category: 'booking'
  },
  {
    id: 'f3',
    question: 'Do you offer private VIP luxury suites for bridal dressings?',
    answer: 'Yes, Allure features an exclusive private Royal Bridal Lounge. It is equipped with custom lighting, satin robes, champagne service, and enough space to accommodate your entourage comfortably.',
    category: 'policies'
  },
  {
    id: 'f4',
    question: 'Which professional styling products do you carry?',
    answer: 'We exclusively work with top-tier premium beauty brands such as Kerastase, Olaplex, L’Oreal Professionnel, La Mer, and artisanal organic wellness oils imported from France.',
    category: 'treatments'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'The French Balayage: Guide to Ultimate Sunkissed Elegance',
    excerpt: 'Unveil the secrets of hand-painted, natural dimensional highlighting. Our Creative Director, Elena, breaks down the global trend.',
    content: 'French balayage is an art form. Unlike foils, our master painters custom paint organic highlights to emphasize natural facial symmetry. In this piece, we explore which shades fit warm Asian skin tones, how bond-builder technology keeps bleach-damaged hair completely healthy, and simple daily practices for lasting shine.',
    category: 'Hair Care',
    date: 'July 10, 2026',
    readTime: '5 Min Read',
    author: {
      name: 'Elena Rostova',
      role: 'Creative Director',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100'
    },
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
    tags: ['Balayage', 'Hair Trends', 'Luxury Style']
  },
  {
    id: 'b2',
    title: 'Unlocking Cellular Rejuvenation: The Power of Caviar Face Therapy',
    excerpt: 'Explore how gold dust particles and sturgeon caviar proteins combine to trigger deep collagen lifting and erase fine lines.',
    content: 'Modern dermatology is pivoting back to highly concentrated natural marine luxury. Caviar extract contains proteins that mimic human cell structure, making skin absorption nearly immediate. Learn how our signature 24K gold nano-facial stimulates deep cellular repair, hydrates the epidermis, and why high-profile models receive it before a gala.',
    category: 'Beauty',
    date: 'June 28, 2026',
    readTime: '7 Min Read',
    author: {
      name: 'Dr. Sophie Dubois',
      role: 'Aesthetic Specialist',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100'
    },
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800',
    tags: ['Caviar Facial', 'Anti-Aging', 'Glowing Skin']
  },
  {
    id: 'b3',
    title: 'The Elite Bride: Timeless Styles for the Modern Luxury Wedding',
    excerpt: 'From glass skin finishes to sleek architectural updos, explore Chloe Tanaka’s top bridal beauty directions for the season.',
    content: 'Every bride deserves to look like royalty. This summer is centered around soft satin-skin bases, delicate metallic eye contouring, and minimalist crown styling. Sophie Tanaka details step-by-step skincare timelines for brides (beginning 6 months prior), and how to choose hair-updos that gracefully match couture veils.',
    category: 'Trends',
    date: 'May 15, 2026',
    readTime: '6 Min Read',
    author: {
      name: 'Chloe Tanaka',
      role: 'Bridal Specialist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100'
    },
    image: 'https://images.unsplash.com/photo-1591555200813-b5e3762e0d9b?auto=format&fit=crop&q=80&w=800',
    tags: ['Bridal Care', 'Makeup Artistry', 'Wedding Glow']
  }
];
