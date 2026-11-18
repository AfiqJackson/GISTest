import { Programme, Testimonial } from '../types';

export const PROGRAMMES: Programme[] = [
  {
    id: 'culinary-hospitality',
    title: 'Culinary Arts and Hospitality',
    category: 'Hospitality & Culinary',
    duration: '2 Years',
    level: 'Diploma / Certificate',
    description: 'Master professional culinary techniques, kitchen management, food safety, and hotel hospitality operations.',
    fullDescription: 'Designed for students with a passion for gastronomy and service excellence, this programme combines rigorous hands-on kitchen training with professional hospitality management. Students gain real-world experience in our modern demonstration kitchens and partner hotel internships.',
    careerProspects: [
      'Commis Chef / Assistant Chef',
      'Food & Beverage Supervisor',
      'Restaurant Operations Manager',
      'Hotel Guest Services Executive'
    ],
    entryRequirements: 'Minimum PT3 / SPM / SKM Level 2 or equivalent (Minimum age 15 and above with parental consent).',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
    highlights: ['State-of-the-art kitchen labs', 'Industry hotel placements', 'Halal kitchen compliance standards', 'Masterclasses by veteran chefs']
  },
  {
    id: 'automotive',
    title: 'Automotive Technology',
    category: 'Engineering & TVET',
    duration: '2 Years',
    level: 'SKM / Diploma Pathway',
    description: 'Comprehensive diagnostic and repair training for modern combustion and hybrid vehicle systems.',
    fullDescription: 'Equips students with industry-standard technical skills in automotive mechanics, engine diagnostics, electrical wiring, and EV/hybrid maintenance. Taught by certified master technicians in fully equipped workshops.',
    careerProspects: [
      'Automotive Diagnostic Technician',
      'Service Advisor',
      'Fleet Maintenance Specialist',
      'Automotive Workshop Supervisor'
    ],
    entryRequirements: 'Minimum PT3 / SPM / SKM Level 2 or equivalent (Minimum age 15 and above).',
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80',
    highlights: ['Hands-on workshop training', 'Diagnostic scanner operations', 'Industry partner service centres', 'Safety-first workshop protocol']
  },
  {
    id: 'welding-electrical',
    title: 'Welding and Electrical Technology',
    category: 'Engineering & TVET',
    duration: '1.5 - 2 Years',
    level: 'SKM Certification',
    description: 'Master advanced industrial welding (SMAW, MIG, TIG) and commercial electrical wiring and installation.',
    fullDescription: 'High-demand vocational training focusing on structural welding, pipe fitting, electrical schematics, and industrial safety compliance certified by relevant bodies.',
    careerProspects: [
      'Certified Industrial Welder',
      'Electrical Installation Technician',
      'Construction Safety Inspector',
      'Maintenance Contractor'
    ],
    entryRequirements: 'Minimum PT3 / SPM (Minimum age 15 and above).',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80',
    highlights: ['Professional welding booths', 'Suruhanjaya Tenaga aligned electrical modules', 'Industry safety certification', 'High employability rate']
  },
  {
    id: 'early-childhood',
    title: 'Early Childhood Education',
    category: 'Education & Care',
    duration: '2 Years',
    level: 'Diploma',
    description: 'Train to become a professional preschool educator, child psychologist assistant, or childcare centre operator.',
    fullDescription: 'Focuses on child development psychology, interactive pedagogy, curriculum planning, creative arts, and inclusive learning environments for children aged 0 to 6 years.',
    careerProspects: [
      'Preschool Teacher / Educator',
      'Childcare Centre Supervisor',
      'Early Learning Curriculum Assistant',
      'Kindergarten Owner / Operator'
    ],
    entryRequirements: 'SPM with minimum 3 credits or relevant certificate qualification.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    highlights: ['Practical teaching placements', 'Child psychology workshops', 'Montessori & STEM early learning methods', 'First aid & child safety training']
  },
  {
    id: 'healthcare-elderly',
    title: 'Healthcare and Elderly Care',
    category: 'Healthcare & Community',
    duration: '2 Years',
    level: 'Diploma / Certificate',
    description: 'Professional training in nursing support, elderly caregiving, health monitoring, and wellness assistance.',
    fullDescription: 'Addresses the growing demand for compassionate healthcare professionals. Students learn patient care, vital signs monitoring, geriatric assistance, physical therapy support, and medical ethics.',
    careerProspects: [
      'Healthcare Assistant / Caregiver',
      'Elderly Care Facility Supervisor',
      'Rehabilitation Support Aide',
      'Community Health Worker'
    ],
    entryRequirements: 'SPM / SKM with pass in Bahasa Melayu and Science / Biology.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    highlights: ['Clinical simulation labs', 'Geriatric care partnerships', 'Empathy and communication training', 'Certified caregiving credentials']
  },
  {
    id: 'logistics-maritime',
    title: 'Logistics, Transport and Maritime',
    category: 'Business & Operations',
    duration: '2 Years',
    level: 'Diploma',
    description: 'Learn supply chain management, warehouse operations, freight forwarding, and port logistics.',
    fullDescription: 'Prepares students for Malaysia’s thriving transport and logistics hub sectors. Covers inventory control, customs documentation, digital supply chain software, and port management principles.',
    careerProspects: [
      'Logistics Operations Executive',
      'Warehouse Supervisor',
      'Freight Forwarding Coordinator',
      'Supply Chain Assistant'
    ],
    entryRequirements: 'SPM with minimum 3 credits or equivalent.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    highlights: ['Industry warehouse visits', 'Digital inventory systems training', 'Port operations exposure', 'Export/import regulatory modules']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'As parents, we were anxious about sending our 16-year-old son away for technical training. The Mentor-Mentee system and dedicated wardens at GIS gave us absolute peace of mind. Today, he is thriving in Automotive Tech.',
    author: 'En. Razak & Puan Aminah',
    role: 'Parents of Diploma Student',
    location: 'Seremban, Negeri Sembilan',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't2',
    quote: 'GIS helped us navigate the PTPK application smoothly. The lecturers treat every student with genuine care, ensuring my daughter caught up with her culinary practicals despite starting with zero kitchen experience.',
    author: 'Puan Siti Zubaidah',
    role: 'Parent of Culinary Arts Graduate',
    location: 'Nilai, Negeri Sembilan',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't3',
    quote: 'The practical training and industry connections at GIS made all the difference. I secured an internship with a major logistics firm even before completing my final semester.',
    author: 'Muhammad Farhan',
    role: 'Logistics Diploma Alumni',
    location: 'Kuala Lumpur',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  }
];

export const FAQS = [
  {
    question: 'What are the entry requirements for GIS programmes?',
    answer: 'Entry requirements vary by programme level. For foundation and certificate/SKM courses, students who have completed PT3 or SPM aged 15 and above are eligible to apply with parental consent. Diploma programmes generally require SPM with relevant credits. Contact our counsellors to verify your child’s eligibility.'
  },
  {
    question: 'Can teenagers aged 15 and above apply?',
    answer: 'Yes! GIS offers specialized pathway programmes suitable for teenagers aged 15 and above who wish to embark on early technical, vocational, or skills-based education alongside supportive mentorship and academic guidance.'
  },
  {
    question: 'What programmes are available at GIS?',
    answer: 'We offer diverse industry-aligned programmes including Culinary Arts & Hospitality, Automotive Technology, Welding & Electrical, Early Childhood Education, Healthcare & Elderly Care, and Logistics & Transport.'
  },
  {
    question: 'Can students apply for PTPTN or PTPK financial assistance?',
    answer: 'Yes. GIS provides comprehensive guidance and application support for eligible students seeking education financing through PTPTN, PTPK, KWSP account withdrawals, Baitulmal assistance, and other applicable funding schemes.'
  },
  {
    question: 'What student hostel and welfare support is provided?',
    answer: 'GIS provides supervised student accommodation with dedicated wardens, welfare guidance, adjustment support for students living away from home for the first time, and a 24-hour parent/student contact-response arrangement for peace of mind.'
  },
  {
    question: 'What career pathways are available after graduation?',
    answer: 'Through our industry partnerships and documented Memorandums of Understanding (MOUs), students receive practical industry exposure, mentorship, and guidance towards employment opportunities or advanced degree pathways.'
  },
  {
    question: 'How can parents arrange a campus visit or speak with a counsellor?',
    answer: 'Parents and guardians are warmly invited to visit our Nilai campus! You can schedule a visit by filling out our enquiry form, contacting us via WhatsApp at +60 11-6535 5635, or calling our admissions office directly.'
  }
];
