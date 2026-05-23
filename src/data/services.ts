import type { Service } from '@/types';

export const services: Service[] = [
  {
    slug: 'bed-bug-control',
    name: 'Bed Bug Control',
    category: 'residential',
    shortDescription: 'Complete elimination of bed bugs using heat and chemical treatment.',
    fullDescription:
      'Our bed bug control service uses a combination of heat treatment and targeted chemical application to eliminate bed bugs at all life stages — eggs, nymphs, and adults. We inspect every corner of your mattress, furniture, and walls to ensure complete eradication.',
    image: '/images/bed-bug.jpg',
    duration: '2–3 hours',
    startingPrice: 1200,
    pricing: {
      '1 BHK': 1200,
      '2 BHK': 1800,
      '3 BHK': 2500,
      'Villa / Bungalow': 5000,
    },
    recommendations: [
      'Repeat treatment after 3 months for long-term protection.',
      'Use mattress covers after treatment.',
      'Avoid buying second-hand furniture without inspection.',
    ],
    dosAndDonts: {
      dos: [
        'Keep windows open for ventilation during treatment.',
        'Remove bed sheets and wash them before treatment.',
        'Keep pets and children away during treatment.',
      ],
      donts: [
        'Do not mop floors for 24 hours after treatment.',
        'Do not cover treated areas with carpets immediately.',
        'Avoid using other pesticides after treatment.',
      ],
    },
    faqs: [
      {
        question: 'How long does bed bug treatment take?',
        answer: 'The treatment typically takes 2–3 hours depending on the size of your home.',
      },
      {
        question: 'Is the treatment safe for children and pets?',
        answer:
          'Yes, we use government-approved chemicals. However, we recommend keeping children and pets away for 2–4 hours after treatment.',
      },
      {
        question: 'How many sessions are needed?',
        answer:
          'Most cases are resolved in one session. Severe infestations may need a follow-up after 2 weeks.',
      },
    ],
  },
  {
    slug: 'mosquito-control',
    name: 'Mosquito Control',
    category: 'residential',
    shortDescription: 'Fogging and larvicide treatment to eliminate mosquitoes at every stage.',
    fullDescription:
      'Our mosquito control service includes indoor fogging, outdoor residual spray, and larvicide treatment for stagnant water sources. We identify and treat breeding grounds to provide lasting relief.',
    image: '/images/mosquito.jpg',
    duration: '1–2 hours',
    startingPrice: 999,
    pricing: {
      '1 BHK': 999,
      '2 BHK': 1499,
      '3 BHK': 1999,
      'Villa / Bungalow': 3500,
    },
    recommendations: [
      'Remove stagnant water from pots, coolers, and drains.',
      'Use mosquito nets for added protection.',
      'Repeat treatment every 3 months during monsoon.',
    ],
    dosAndDonts: {
      dos: [
        'Keep all windows open before fogging.',
        'Cover food and water containers.',
        'Inform your neighbours as fogging spreads.',
      ],
      donts: [
        'Do not enter the treated area for 1 hour.',
        'Do not switch on AC/fans during fogging.',
        'Avoid washing treated surfaces for 12 hours.',
      ],
    },
    faqs: [
      {
        question: 'How long does mosquito control last?',
        answer: 'The effect lasts 30–45 days. We recommend quarterly treatments.',
      },
      {
        question: 'Is fogging safe indoors?',
        answer:
          'Yes, we use water-based eco-friendly fogging solutions safe for indoor use.',
      },
    ],
  },
  {
    slug: 'cockroach-control',
    name: 'Cockroach Control',
    category: 'residential',
    shortDescription: 'Gel bait and spray treatment to wipe out cockroach colonies.',
    fullDescription:
      'We use a dual approach — gel bait applied inside cracks and crevices, combined with a residual spray. The gel attracts cockroaches and eliminates the entire colony through cascade effect.',
    image: '/images/cockroach.jpg',
    duration: '1–2 hours',
    startingPrice: 899,
    pricing: {
      '1 BHK': 899,
      '2 BHK': 1299,
      '3 BHK': 1699,
      'Villa / Bungalow': 3000,
    },
    recommendations: [
      'Keep kitchen dry and clean after treatment.',
      'Seal cracks in walls and cabinets.',
      'Repeat every 6 months for maintenance.',
    ],
    dosAndDonts: {
      dos: [
        'Empty kitchen shelves before treatment.',
        'Keep the kitchen clean and dry.',
        'Report recurring spots to our technician.',
      ],
      donts: [
        'Do not clean surfaces where gel is applied for 3 days.',
        'Avoid using strong-smelling cleaners near bait points.',
        'Do not apply other insecticides over gel bait areas.',
      ],
    },
    faqs: [
      {
        question: 'How soon will cockroaches disappear?',
        answer:
          'You will notice a significant reduction within 3–5 days. Complete elimination takes 2–3 weeks.',
      },
      {
        question: 'Will cockroaches come back?',
        answer:
          'Our treatment has a 30-day guarantee. Follow our aftercare tips to prevent re-infestation.',
      },
    ],
  },
  {
    slug: 'rodent-control',
    name: 'Rodent Control',
    category: 'residential',
    shortDescription: 'Trapping, baiting, and proofing to eliminate rats and mice.',
    fullDescription:
      'Our rodent control service combines snap traps, glue boards, and rodenticide bait stations. We also identify and seal entry points to prevent future infestations.',
    image: '/images/rodent.jpg',
    duration: '2–4 hours',
    startingPrice: 1500,
    pricing: {
      '1 BHK': 1500,
      '2 BHK': 2200,
      '3 BHK': 3000,
      'Villa / Bungalow': 6000,
    },
    recommendations: [
      'Store food in sealed containers.',
      'Block gaps around pipes and doors.',
      'Clear clutter from storage areas.',
    ],
    dosAndDonts: {
      dos: [
        'Keep food sealed and elevated.',
        'Dispose of garbage regularly.',
        'Report sightings to our team for free follow-up.',
      ],
      donts: [
        'Do not disturb bait stations placed by our team.',
        'Avoid leaving pet food out overnight.',
        'Do not block drainage without our advice.',
      ],
    },
    faqs: [
      {
        question: 'Is rodenticide safe around children?',
        answer:
          'Bait stations are tamper-resistant. However, we place them in inaccessible locations as a precaution.',
      },
      {
        question: 'How many visits are needed?',
        answer:
          'Typically 2–3 visits over 2 weeks for complete control, depending on the infestation level.',
      },
    ],
  },
  {
    slug: 'termite-control',
    name: 'Termite Control',
    category: 'residential',
    shortDescription: 'Anti-termite treatment for walls, soil, and wooden structures.',
    fullDescription:
      'We offer both pre-construction and post-construction anti-termite treatment. Our soil treatment and wood treatment methods create a long-lasting chemical barrier that protects your property from termite damage.',
    image: '/images/termite.jpg',
    duration: '3–6 hours',
    startingPrice: 2000,
    pricing: {
      'Post-Construction (1 BHK)': 2000,
      'Post-Construction (2 BHK)': 3500,
      'Post-Construction (3 BHK)': 5000,
      'Pre-Construction (per sq ft)': 12,
    },
    recommendations: [
      'Do not keep wooden furniture in contact with soil.',
      'Fix water leaks promptly — termites thrive in moisture.',
      'Annual inspection is recommended.',
    ],
    dosAndDonts: {
      dos: [
        'Allow technician full access to walls and flooring.',
        'Keep pets away from drill areas.',
        'Report new mud tubes immediately.',
      ],
      donts: [
        'Do not repaint over treated surfaces for 48 hours.',
        'Do not block drill holes after treatment.',
        'Avoid watering plants near treated soil for 24 hours.',
      ],
    },
    faqs: [
      {
        question: 'How long does anti-termite treatment last?',
        answer:
          'Post-construction treatment lasts 5–10 years depending on the chemical used. We offer annual warranty plans.',
      },
      {
        question: 'Will drilling damage my floor?',
        answer:
          'Drill holes are small (6–8mm) and are sealed with cement after treatment. They are barely noticeable.',
      },
    ],
  },
  {
    slug: 'lizard-control',
    name: 'Lizard Control',
    category: 'residential',
    shortDescription: 'Safe repellent treatment to drive lizards out of your home.',
    fullDescription:
      'Our lizard control service uses natural repellents and targeted sprays in entry points, corners, and behind appliances to discourage lizards from inhabiting your home.',
    image: '/images/lizard.jpg',
    duration: '1 hour',
    startingPrice: 799,
    pricing: {
      '1 BHK': 799,
      '2 BHK': 1099,
      '3 BHK': 1399,
      'Villa / Bungalow': 2500,
    },
    recommendations: [
      'Reduce insect activity indoors to starve lizards.',
      'Seal gaps around windows and doors.',
      'Keep lights off near entry points at night.',
    ],
    dosAndDonts: {
      dos: [
        'Keep the house clean and free of insects.',
        'Allow treatment of all corners and crevices.',
        'Ventilate after treatment.',
      ],
      donts: [
        'Do not wipe treated surfaces for 24 hours.',
        'Avoid leaving food scraps that attract insects.',
      ],
    },
    faqs: [
      {
        question: 'Is lizard control safe for kids?',
        answer:
          'Yes. We use non-toxic repellents. Keep children away for 1–2 hours after treatment.',
      },
      {
        question: 'How long will lizards stay away?',
        answer: 'Effect lasts 1–2 months. Repeat quarterly for best results.',
      },
    ],
  },
  {
    slug: 'commercial-pest-control',
    name: 'Commercial Pest Control',
    category: 'commercial',
    shortDescription: 'Comprehensive pest management for offices, restaurants, hotels, and warehouses.',
    fullDescription:
      'We offer customised Annual Maintenance Contracts (AMC) for commercial establishments. Our certified technicians conduct regular inspections and treatments tailored to your industry’s regulatory requirements.',
    image: '/images/commercial.jpg',
    duration: 'Varies by site',
    startingPrice: 5000,
    pricing: {
      'Small Office (up to 1000 sq ft)': 5000,
      'Restaurant / Food Business': 8000,
      'Hotel / Hospitality': 15000,
      'Warehouse / Factory': 20000,
    },
    recommendations: [
      'Sign up for an AMC for compliance documentation.',
      'Schedule treatments during off-hours.',
      'Train staff on basic pest prevention.',
    ],
    dosAndDonts: {
      dos: [
        'Provide access to all areas including kitchen and store.',
        'Inform staff before scheduled treatment.',
        'Keep records of all pest control visits for audits.',
      ],
      donts: [
        'Do not cancel scheduled visits without 24-hour notice.',
        'Avoid storing food in open areas.',
        'Do not ignore early signs of infestation.',
      ],
    },
    faqs: [
      {
        question: 'Do you provide pest control certificates?',
        answer:
          'Yes. We provide government-compliant pest control certificates valid for FSSAI, municipal, and hotel audits.',
      },
      {
        question: 'Can you service outside business hours?',
        answer:
          'Yes, we offer night and weekend slots for commercial clients to avoid disruption.',
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

export const residentialServices = services.filter(
  (s) => s.category === 'residential'
);

export const commercialServices = services.filter(
  (s) => s.category === 'commercial'
);
