export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: number;
  slug: string;
  code: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  images: string[];
  features: string[];
  specifications: ProductSpecification[];
  applications: string[];
  featured: boolean;
  availability: string;
}

export const productCategories = [
  "Diagnostic Equipment",
  "Slit Lamps",
  "Refraction Equipment",
  "Trial Lens Sets",
  "Ophthalmic Chairs & Units",
  "Vision Testing Equipment",
  "Microscopes",
  "Accessories",
] as const;

const products: Product[] = [
  {
    id: 1,
    slug: "ie-02-slit-lamp",
    code: "IE-02",
    name: "Clinical Slit Lamp",
    category: "Slit Lamps",
    shortDescription: "Sharp anterior segment assessment with stable illumination and ergonomic controls.",
    description:
      "A premium slit lamp platform for consistent clinical imaging, smooth magnification changes, and dependable patient examination workflows.",
    images: ["/products/slit-lamp.svg"],
    features: ["Five-step magnification", "LED slit illumination", "Smooth joystick positioning"],
    specifications: [
      { label: "Magnification", value: "6x / 10x / 16x / 25x / 40x" },
      { label: "Illumination", value: "Adjustable LED slit source" },
      { label: "Base Travel", value: "Stable X-Y mechanical stage" },
    ],
    applications: ["Routine OPD examinations", "Anterior segment evaluation", "Clinical documentation"],
    featured: true,
    availability: "Available",
  },
  {
    id: 2,
    slug: "ie-08-corona-target-lens-meter",
    code: "IE-08",
    name: "Corona Target Lens Meter",
    category: "Refraction Equipment",
    shortDescription: "Manual lens verification with crisp optics and straightforward adjustment controls.",
    description:
      "Designed for optical workshops and eye care practices requiring dependable manual lens measurement and easy operator use.",
    images: ["/products/lens-meter.svg"],
    features: ["High-contrast target", "Compact tabletop footprint", "Simple diopter scale reading"],
    specifications: [
      { label: "Measurement Range", value: "Manual lens power verification" },
      { label: "Mounting", value: "Desktop" },
      { label: "Usage", value: "Clinical and optical practice" },
    ],
    applications: ["Lens verification", "Workshop use", "Clinic dispensing support"],
    featured: false,
    availability: "Available",
  },
  {
    id: 3,
    slug: "ie-07-trial-lens-set",
    code: "IE-07",
    name: "Professional Trial Lens Set",
    category: "Trial Lens Sets",
    shortDescription: "Comprehensive lens kit arranged for efficient refraction and repeatable workflow.",
    description:
      "A neatly organized trial lens system built for daily refraction, training, and chairside convenience in vision practices.",
    images: ["/products/trial-lens.svg"],
    features: ["Durable carrying case", "Clearly indexed lens arrangement", "Clinic-friendly handling"],
    specifications: [
      { label: "Lens Material", value: "Optical grade lenses" },
      { label: "Set Layout", value: "Segmented prescription grouping" },
      { label: "Case", value: "Protective hard case" },
    ],
    applications: ["Subjective refraction", "Training institutes", "Vision screening"],
    featured: true,
    availability: "Available",
  },
  {
    id: 4,
    slug: "ie-24-ophthalmic-chair-unit",
    code: "IE-24",
    name: "Ophthalmic Chair Unit",
    category: "Ophthalmic Chairs & Units",
    shortDescription: "Integrated patient positioning and instrument support for modern consultation rooms.",
    description:
      "A treatment unit created to streamline examination room ergonomics, patient comfort, and clinician access to instruments.",
    images: ["/products/chair-unit.svg"],
    features: ["Integrated arm assembly", "Comfort-focused patient chair", "Durable clinical finish"],
    specifications: [
      { label: "Configuration", value: "Chair with instrument unit" },
      { label: "Finish", value: "Medical-grade exterior surfaces" },
      { label: "Use Case", value: "Consultation and refraction rooms" },
    ],
    applications: ["Eye clinics", "Hospital OPD rooms", "Refraction cabins"],
    featured: true,
    availability: "Contact for Availability",
  },
  {
    id: 5,
    slug: "ie-32-cordless-indirect-ophthalmoscope",
    code: "IE-32",
    name: "Cordless Indirect Ophthalmoscope",
    category: "Diagnostic Equipment",
    shortDescription: "Portable retinal viewing solution designed for mobile examinations and ward use.",
    description:
      "A cordless examination instrument engineered for freedom of movement and comfortable prolonged diagnostic sessions.",
    images: ["/products/ophthalmoscope.svg"],
    features: ["Cordless operation", "Balanced headgear", "Clear fundus illumination"],
    specifications: [
      { label: "Power", value: "Rechargeable cordless system" },
      { label: "Design", value: "Wearable lightweight frame" },
      { label: "Use", value: "Retinal examination" },
    ],
    applications: ["Retina clinics", "Ward rounds", "Mobile screening"],
    featured: true,
    availability: "Available",
  },
  {
    id: 6,
    slug: "digital-led-distance-vision-chart",
    code: "IE-41",
    name: "Digital LED Distance Vision Chart",
    category: "Vision Testing Equipment",
    shortDescription: "Bright, easy-to-read digital chart designed for refraction rooms and screening setups.",
    description:
      "A clear digital charting system for standard distance vision testing with clean visuals and practical mounting options.",
    images: ["/products/vision-chart.svg"],
    features: ["LED display clarity", "Remote chart control", "Compact wall-mount design"],
    specifications: [
      { label: "Display", value: "Digital LED chart system" },
      { label: "Control", value: "Remote operation" },
      { label: "Placement", value: "Wall mounted" },
    ],
    applications: ["Refraction rooms", "Screening camps", "Optical outlets"],
    featured: false,
    availability: "Available",
  },
  {
    id: 7,
    slug: "zeiss-model-slit-lamp",
    code: "IE-12",
    name: "Zeiss Model Slit Lamp",
    category: "Slit Lamps",
    shortDescription: "Classic tower-style examination optics tailored for dependable daily clinical performance.",
    description:
      "A slit lamp configuration inspired by widely preferred clinical form factors for familiarity, precision, and smooth handling.",
    images: ["/products/slit-lamp.svg"],
    features: ["Tower-style optical body", "Stable illumination arm", "Smooth magnification changes"],
    specifications: [
      { label: "Optical Design", value: "Tower-style biomicroscope" },
      { label: "User Flow", value: "Routine anterior segment exam" },
      { label: "Build", value: "Clinical-duty frame" },
    ],
    applications: ["General ophthalmology", "Resident training", "Hospital OPD"],
    featured: false,
    availability: "Available",
  },
  {
    id: 8,
    slug: "manual-lensmeter",
    code: "IE-14",
    name: "Manual Lensmeter",
    category: "Refraction Equipment",
    shortDescription: "Reliable lens power assessment instrument for dispensing desks and service counters.",
    description:
      "A straightforward lensmeter designed for practices that value dependable manual readings and long service life.",
    images: ["/products/lens-meter.svg"],
    features: ["Manual focusing", "Compact footprint", "Operator-friendly markings"],
    specifications: [
      { label: "Operation", value: "Manual" },
      { label: "Placement", value: "Countertop" },
      { label: "Application", value: "Lens verification" },
    ],
    applications: ["Optical retail", "Clinic dispensing", "Workshop verification"],
    featured: false,
    availability: "Available",
  },
  {
    id: 9,
    slug: "auto-lensmeter",
    code: "IE-15",
    name: "Auto Lensmeter",
    category: "Refraction Equipment",
    shortDescription: "Faster lens measurements with digital convenience for busy optical and clinical teams.",
    description:
      "An automated lens measurement system that supports efficient workflows and clear readings for staff and technicians.",
    images: ["/products/lens-meter.svg"],
    features: ["Digital readout", "Automated detection", "Streamlined operator workflow"],
    specifications: [
      { label: "Display", value: "Digital measurement output" },
      { label: "Mode", value: "Automatic lens detection" },
      { label: "Use Case", value: "High-volume practices" },
    ],
    applications: ["Optical stores", "Hospital optical units", "Busy clinics"],
    featured: true,
    availability: "Available",
  },
  {
    id: 10,
    slug: "applanation-tonometer",
    code: "IE-18",
    name: "Applanation Tonometer",
    category: "Diagnostic Equipment",
    shortDescription: "Stable tonometry attachment for controlled intraocular pressure evaluation.",
    description:
      "A clinic-ready applanation tonometer that integrates smoothly into daily glaucoma screening and follow-up practice.",
    images: ["/products/diagnostic-unit.svg"],
    features: ["Controlled contact measurement", "Clinical mounting compatibility", "Balanced design"],
    specifications: [
      { label: "Measurement", value: "Applanation tonometry" },
      { label: "Compatibility", value: "Clinical slit lamp setup" },
      { label: "Workflow", value: "Routine pressure checks" },
    ],
    applications: ["Glaucoma screening", "Routine eye examination", "Hospital clinics"],
    featured: true,
    availability: "Contact for Availability",
  },
  {
    id: 11,
    slug: "trial-frame",
    code: "IE-09",
    name: "Adjustable Trial Frame",
    category: "Trial Lens Sets",
    shortDescription: "Comfortable and adjustable frame for quick lens positioning during subjective refraction.",
    description:
      "A practical refraction frame designed for repeat use, comfortable patient wear, and smooth clinician adjustments.",
    images: ["/products/trial-lens.svg"],
    features: ["Adjustable bridge", "Multiple lens cell support", "Comfort-fit design"],
    specifications: [
      { label: "Adjustment", value: "Bridge and temple adjustment" },
      { label: "Use", value: "Subjective refraction" },
      { label: "Design", value: "Reusable clinic frame" },
    ],
    applications: ["Refraction practice", "Optometry training", "Screening rooms"],
    featured: false,
    availability: "Available",
  },
  {
    id: 12,
    slug: "retinoscope",
    code: "IE-21",
    name: "Clinical Retinoscope",
    category: "Diagnostic Equipment",
    shortDescription: "Dependable retinoscopy illumination and streak control for objective refraction support.",
    description:
      "Built for practitioners who require consistent optical performance during objective refraction and pediatric assessments.",
    images: ["/products/ophthalmoscope.svg"],
    features: ["Controlled streak movement", "Balanced hand feel", "Clear illumination"],
    specifications: [
      { label: "Type", value: "Clinical retinoscope" },
      { label: "Use", value: "Objective refraction" },
      { label: "Handling", value: "Portable handheld format" },
    ],
    applications: ["Pediatric exams", "Objective refraction", "Training centers"],
    featured: false,
    availability: "Available",
  },
  {
    id: 13,
    slug: "direct-ophthalmoscope",
    code: "IE-22",
    name: "Direct Ophthalmoscope",
    category: "Diagnostic Equipment",
    shortDescription: "Compact handheld optic for chairside fundus evaluation and general examination use.",
    description:
      "A reliable everyday handheld diagnostic device suitable for routine examinations in clinics and consultation rooms.",
    images: ["/products/ophthalmoscope.svg"],
    features: ["Portable handheld format", "Bright focused illumination", "Simple aperture control"],
    specifications: [
      { label: "Format", value: "Handheld" },
      { label: "Illumination", value: "Focused diagnostic beam" },
      { label: "Environment", value: "Chairside use" },
    ],
    applications: ["Routine practice", "General examination", "Screening support"],
    featured: false,
    availability: "Available",
  },
  {
    id: 14,
    slug: "auto-refractometer",
    code: "IE-27",
    name: "Auto Refractometer",
    category: "Refraction Equipment",
    shortDescription: "Fast objective refraction support with digital workflow for modern examination rooms.",
    description:
      "A compact autorefractor solution created to simplify initial measurements and support efficient patient throughput.",
    images: ["/products/diagnostic-unit.svg"],
    features: ["Digital interface", "Objective refraction capture", "Modern compact housing"],
    specifications: [
      { label: "Function", value: "Objective refraction" },
      { label: "Display", value: "Digital interface" },
      { label: "Placement", value: "Refraction workstation" },
    ],
    applications: ["Pre-test rooms", "High-volume clinics", "Hospital eye departments"],
    featured: true,
    availability: "Contact for Availability",
  },
  {
    id: 15,
    slug: "keratometer",
    code: "IE-28",
    name: "Clinical Keratometer",
    category: "Diagnostic Equipment",
    shortDescription: "Corneal curvature assessment instrument designed for careful measurement and stable operation.",
    description:
      "Supports pre-fitting assessments and routine corneal evaluation with dependable optics and structured workflow.",
    images: ["/products/diagnostic-unit.svg"],
    features: ["Corneal curvature assessment", "Stable base positioning", "Optical clarity"],
    specifications: [
      { label: "Measurement", value: "Corneal curvature" },
      { label: "Use", value: "Contact lens and clinical evaluation" },
      { label: "Design", value: "Clinical tabletop" },
    ],
    applications: ["Corneal assessment", "Contact lens fitting", "Pre-op evaluation"],
    featured: false,
    availability: "Contact for Availability",
  },
  {
    id: 16,
    slug: "operating-microscope",
    code: "IE-36",
    name: "Operating Microscope",
    category: "Microscopes",
    shortDescription: "Advanced optical visualization platform for precision-focused ophthalmic procedures.",
    description:
      "A premium microscope solution built to support magnified visualization, controlled movement, and procedural confidence.",
    images: ["/products/microscope.svg"],
    features: ["Enhanced optical clarity", "Procedure-oriented design", "Stable articulated positioning"],
    specifications: [
      { label: "Category", value: "Operating microscope" },
      { label: "Use Case", value: "Ophthalmic procedure support" },
      { label: "Mounting", value: "Clinical installation setup" },
    ],
    applications: ["Surgical support", "Procedure rooms", "Advanced eye care setups"],
    featured: true,
    availability: "Contact for Availability",
  },
  {
    id: 17,
    slug: "vision-drum",
    code: "IE-42",
    name: "Vision Drum",
    category: "Vision Testing Equipment",
    shortDescription: "Traditional acuity testing device with practical use in clinics and outreach screening.",
    description:
      "A reliable visual testing aid for settings that need straightforward, durable, and easy-to-read chart presentation.",
    images: ["/products/vision-chart.svg"],
    features: ["Rotary chart format", "Visible high-contrast characters", "Simple use"],
    specifications: [
      { label: "Format", value: "Rotating drum chart" },
      { label: "Application", value: "Vision screening" },
      { label: "Placement", value: "Room-based testing" },
    ],
    applications: ["Vision testing", "Outreach camps", "General OPD"],
    featured: false,
    availability: "Available",
  },
  {
    id: 18,
    slug: "pd-meter",
    code: "IE-45",
    name: "PD Meter",
    category: "Accessories",
    shortDescription: "Quick pupillary distance measurement tool for optical dispensing and refraction support.",
    description:
      "A compact accessory for fast, repeatable PD readings in clinic and optical practice environments.",
    images: ["/products/accessory.svg"],
    features: ["Compact design", "Fast measurements", "Optical dispensing support"],
    specifications: [
      { label: "Function", value: "Pupillary distance measurement" },
      { label: "Format", value: "Compact tabletop device" },
      { label: "Use", value: "Dispensing workflow" },
    ],
    applications: ["Optical dispensing", "Refraction rooms", "Workshop use"],
    featured: false,
    availability: "Available",
  },
  {
    id: 19,
    slug: "ophthalmic-stool",
    code: "IE-48",
    name: "Ophthalmic Stool",
    category: "Accessories",
    shortDescription: "Smooth mobility and practical comfort for examination and consultation workflows.",
    description:
      "A clinic support stool designed to complement ophthalmic units, refraction stations, and consultation rooms.",
    images: ["/products/accessory.svg"],
    features: ["Stable rolling base", "Comfort-focused seat", "Simple clinical styling"],
    specifications: [
      { label: "Type", value: "Clinical support stool" },
      { label: "Usage", value: "Exam room support" },
      { label: "Mobility", value: "Smooth caster base" },
    ],
    applications: ["Consultation rooms", "Refraction cabins", "Operator seating"],
    featured: false,
    availability: "Available",
  },
  {
    id: 20,
    slug: "instrument-table",
    code: "IE-50",
    name: "Instrument Table",
    category: "Accessories",
    shortDescription: "Stable equipment support table built for everyday clinical instrument handling.",
    description:
      "A practical support table for organizing ophthalmic devices and improving room efficiency in examination spaces.",
    images: ["/products/accessory.svg"],
    features: ["Stable platform", "Compact footprint", "Suitable for multiple device setups"],
    specifications: [
      { label: "Use", value: "Instrument support" },
      { label: "Footprint", value: "Compact clinical layout" },
      { label: "Environment", value: "Examination and refraction rooms" },
    ],
    applications: ["Instrument support", "Clinical rooms", "Optical workflow setup"],
    featured: false,
    availability: "Available",
  },
];

export const allProducts = products;
export const featuredProducts = products.filter((product) => product.featured).slice(0, 8);

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(category: string, currentSlug: string) {
  return products
    .filter((product) => product.category === category && product.slug !== currentSlug)
    .slice(0, 4);
}
