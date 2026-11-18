export interface BundleOption {
  id: 'single' | 'duo' | 'trio';
  name: string;
  subtitle: string;
  bottles: number;
  price: number;
  originalPrice: number;
  savingsText: string;
  perBottle: number;
}

export interface BenefitItem {
  number: string;
  title: string;
  summary: string;
  detail: string;
}

export interface JourneyStage {
  id: 'day1' | 'day7' | 'day14';
  label: string;
  timeframe: string;
  headline: string;
  description: string;
  highlights: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  verifiedLabel: string;
  quote: string;
  skinConcern: string;
  image?: string;
}

export const BRAND_IMAGES = {
  heroModel: '/src/assets/images/hero_filipina_glow_model_1795010601837.jpg',
  productBottle: '/src/assets/images/product_glow_serum_bottle_1795010602463.jpg',
  serumTexture: '/src/assets/images/serum_texture_swatch_1795010603214.jpg',
  angelCebu: '/src/assets/images/testimonial_angel_cebu_1795010603690.jpg',
} as const;

export const BUNDLE_OPTIONS: BundleOption[] = [
  {
    id: 'single',
    name: '1 Bottle · Starter Glow',
    subtitle: '30ml · Good for 30–45 days',
    bottles: 1,
    price: 699,
    originalPrice: 990,
    savingsText: 'Save ₱291',
    perBottle: 699,
  },
  {
    id: 'duo',
    name: '2 Bottles · 14-Day Glow Duo',
    subtitle: '60ml · Most popular for sharing or 3-month supply',
    bottles: 2,
    price: 1198,
    originalPrice: 1980,
    savingsText: 'Save ₱782',
    perBottle: 599,
  },
  {
    id: 'trio',
    name: '3 Bottles · Full Radiance Kit',
    subtitle: '90ml · Best value per bottle',
    bottles: 3,
    price: 1647,
    originalPrice: 2970,
    savingsText: 'Save ₱1,323',
    perBottle: 549,
  },
];

export const THREE_BENEFITS: BenefitItem[] = [
  {
    number: '01',
    title: 'Brightens Dark Spots & Uneven Tone',
    summary: 'Fades post-acne marks and sun dullness in 14 days.',
    detail:
      'Formulated with 10% stabilized Vitamin C and 5% Niacinamide to visibly lift stubborn dark spots and bring out clear, luminous radiance across all Filipina skin tones.',
  },
  {
    number: '02',
    title: 'Dewy Glass-Skin Glow Without Lagkit',
    summary: 'Water-light absorption built for tropical PH humidity.',
    detail:
      'Silky rosewater-peptide serum sinks in within 8 seconds—never greasy, heavy, or sticky under sunscreen, makeup, or humid afternoon commutes.',
  },
  {
    number: '03',
    title: 'Calms & Strengthens Your Skin Barrier',
    summary: 'Gentle daily nourishment for sensitive, acne-prone skin.',
    detail:
      'Centella Asiatica and biomimetic peptides soothe redness, refine visible pores, and lock in 24-hour hydration without harsh bleaching agents or alcohol.',
  },
];

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    id: 'day1',
    label: 'Days 1–3',
    timeframe: 'Immediate Hydration & Comfort',
    headline: 'Fresh, bouncy hydration from the very first drop',
    description:
      'Rosewater humectants and soothing Centella calm tightness right away, leaving your skin soft and makeup-ready without an oily T-zone.',
    highlights: [
      'Absorbs cleanly in 8 seconds with zero sticky residue',
      'Reduces dry patches around cheeks and nose',
      'Keeps skin balanced under humid heat and AC',
    ],
  },
  {
    id: 'day7',
    label: 'Days 4–7',
    timeframe: 'Visible Clarity & Smoothness',
    headline: 'Dullness lifts as skin texture feels noticeably smoother',
    description:
      '5% Niacinamide regulates midday oil production and refines the look of pores, giving your bare face a rested, healthy morning sheen.',
    highlights: [
      'More balanced oil control through afternoon heat',
      'Smoother skin texture and softer cheek contour',
      'Fresh, awake tone even on minimal-sleep days',
    ],
  },
  {
    id: 'day14',
    label: 'Days 8–14',
    timeframe: '14-Day Luminous Glow',
    headline: 'Brighter, glowing skin with visibly lighter dark spots',
    description:
      'Stabilized Vitamin C and brightening peptides work together to fade stubborn acne marks and sun spots, revealing even-toned glass skin.',
    highlights: [
      'Post-blemish marks and dark patches appear softer',
      'Natural lit-from-within glow without foundation',
      'Stronger, calmer moisture barrier day after day',
    ],
  },
];

export const KEY_ACTIVES = [
  {
    name: '10% Stabilized Vitamin C',
    role: 'Radiance & Spot Fading',
    note: 'Non-oxidizing ethyl ascorbic acid targets dark marks gently without stinging.',
  },
  {
    name: '5% Niacinamide (Vitamin B3)',
    role: 'Tone & Oil Balance',
    note: 'Refines enlarged pores and keeps shine balanced in humid weather.',
  },
  {
    name: 'Tri-Peptide Rose Complex',
    role: 'Plump Glass-Skin Bounce',
    note: 'Supports natural collagen elasticity for supple, dewy cheekbones.',
  },
  {
    name: 'Centella Asiatica Extract',
    role: 'Barrier Calm & Repair',
    note: 'Soothes heat redness and protects sensitive Filipina skin.',
  },
];

export const FEATURED_TESTIMONIAL: TestimonialItem = {
  id: 'angel-cebu',
  name: 'Angel M.',
  location: 'Cebu City',
  rating: 5,
  verifiedLabel: 'Verified COD Buyer · Used 14 Days',
  skinConcern: 'Acne marks & humid-weather oiliness',
  quote:
    'I struggled with stubborn acne marks and oily skin from commuting in Cebu. After 14 days of using Lumina every morning and night, my dark spots visibly lightened and my skin looks naturally glowing even without foundation.',
  image: BRAND_IMAGES.angelCebu,
};

export const SECONDARY_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'clarisse-qc',
    name: 'Clarisse R.',
    location: 'Quezon City',
    rating: 5,
    verifiedLabel: 'Verified COD Buyer · 2-Bottle Duo',
    skinConcern: 'Dullness & uneven morena tone',
    quote:
      'Finally a brightening serum that does not feel sticky in Manila traffic. My cheeks look fresh and radiant by week two, and Cash on Delivery arrived in just two days.',
  },
  {
    id: 'bea-davao',
    name: 'Bea T.',
    location: 'Davao City',
    rating: 5,
    verifiedLabel: 'Verified COD Buyer · Starter Glow',
    skinConcern: 'Sensitive skin & sun spots',
    quote:
      'No stinging at all on my sensitive skin. My post-pimple marks around my jawline faded gently and my bare face has a soft pink-dewy glow.',
  },
];
