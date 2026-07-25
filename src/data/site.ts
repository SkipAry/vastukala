/**
 * ─────────────────────────────────────────────────────────────
 *  VASTUKALA ASSOCIATES — SITE CONFIGURATION
 *  Edit contact details, links, projects and copy here.
 *  Every section of the website reads from this single file.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Vastukala Associates",
  tagline: "Architecture | Interior | Structural Consultancy",
  url: "https://vastukalaassociates.com",
  phoneDisplay: "+91 96045 96536",
  phoneE164: "+919604596536",
  whatsappNumber: "919604596536",
  whatsappMessage:
    "Hello Vastukala Associates, I would like to discuss a project. My project type is ______ and the location is ______.",
  email: "", // add official email when available
  formEndpoint: "https://formspree.io/f/mvzevdke",
  address: {
    line1: "2nd Floor, Above Baba Jewellers, Baba Complex",
    line2: "Talegaon–Shikrapur Road, Shikrapur",
    city: "Pune",
    state: "Maharashtra",
    pincode: "412208",
  },
  mapsQuery:
    "Vastukala Associates, Baba Complex, Talegaon-Shikrapur Road, Shikrapur, Pune 412208",
  businessHours: "Mon–Sat, 10:00 AM – 7:00 PM", // placeholder — confirm before launch
  founder: {
    name: "Er. Rushikesh Pingale",
    credentials: "B.Tech & M.Tech in Civil Engineering, MIT Pune",
    role: "Founder & Principal Consultant",
  },
  social: {
    instagram: "https://www.instagram.com/vastukala.associates",
    facebook: "https://www.facebook.com/vastukala.associates",
    youtube: "", // add when available
    linkedin: "", // add when available
  },
  geo: { lat: 18.6926, lng: 74.1381 }, // Shikrapur — verify exact pin before launch
};

export const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.mapsQuery
)}`;

export const telLink = `tel:${site.phoneE164}`;

/* ── Statistics (verified company figures only) ─────────────── */
export const stats = [
  { value: 1500, suffix: "+", label: "Projects Designed & Executed" },
  { value: 15, suffix: "+", label: "States & Regions Served" },
  { value: 8, suffix: "", label: "Specialists on the Core Team" },
  { value: 5, suffix: "", label: "Services Under One Roof" },
];

/* ── Client logos (files in public/clients/) ────────────────────
   Shown as a two-row scrolling marquee. Row 1 scrolls left,
   row 2 scrolls right. Add or remove entries freely.           */
export type ClientLogo = { name: string; logo: string };

export const clientsRow1: ClientLogo[] = [
  { name: "John Deere", logo: "/clients/john-deere.webp" },
  { name: "Magarpatta City", logo: "/clients/magarpatta-city.webp" },
  { name: "Duroshox", logo: "/clients/duroshox.webp" },
  { name: "Rosmerta Technologies", logo: "/clients/rosmerta.webp" },
  { name: "Shreeram Developers", logo: "/clients/shreeram-developers.webp" },
  { name: "Somnath Realty", logo: "/clients/somnath-realty.webp" },
  { name: "JB Group of Companies", logo: "/clients/jb-group.webp" },
];

export const clientsRow2: ClientLogo[] = [
  { name: "Prathamesh Aura", logo: "/clients/prathamesh-aura.webp" },
  { name: "Arambha Properties & Construction", logo: "/clients/arambha-properties.webp" },
  { name: "Dnyanraj Building Construction", logo: "/clients/dnyanraj-construction.webp" },
  { name: "Sai Inficon Consultants", logo: "/clients/sai-inficon.webp" },
  { name: "B&T General Contraction", logo: "/clients/bt-contraction.webp" },
  { name: "Kekiz — The Cake Shop", logo: "/clients/kekiz.webp" },
  { name: "BJ", logo: "/clients/bj-jewellers.webp" },
];

/* ── Services ───────────────────────────────────────────────── */
export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "plan" | "interior" | "render" | "approval" | "layout";
  image: string;
};

export const services: Service[] = [
  {
    id: "architectural-design",
    title: "Architectural Design & Planning",
    description:
      "Site-responsive, functional and aesthetically distinctive architectural solutions for residential, commercial, institutional and industrial projects.",
    icon: "plan",
    image: "/projects/sanaswadi-residence.webp",
  },
  {
    id: "interior-design",
    title: "Interior Design",
    description:
      "Thoughtfully composed interiors that balance comfort, material quality, functionality and individual character.",
    icon: "interior",
    image: "/projects/interior-living-1.webp",
  },
  {
    id: "3d-visualization",
    title: "3D Visualization & Rendering",
    description:
      "Photorealistic visualizations that help clients confidently experience and refine their projects before construction begins.",
    icon: "render",
    image: "/projects/floor-plan-3d.webp",
  },
  {
    id: "pmrda-sanctioning",
    title: "PMRDA Sanctioning",
    description:
      "Professional assistance with drawings, documentation, submissions and coordination throughout the approval process.",
    icon: "approval",
    image: "/projects/talegaon-apartment.webp",
  },
  {
    id: "na-layout",
    title: "NA Layout Planning",
    description:
      "Efficient and regulation-conscious layout planning designed to maximize land potential, accessibility and long-term value.",
    icon: "layout",
    image: "/projects/balod-layout.webp",
  },
];

/* ── Featured projects (all imagery from the Vastukala portfolio;
      all images are design visualizations by Vastukala Associates) ── */
export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Industrial"
  | "Institutional"
  | "Interiors"
  | "Layout Planning";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  image: string;
  alt: string;
  size: "wide" | "tall" | "standard";
};

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Residential",
  "Commercial",
  "Industrial",
  "Institutional",
  "Interiors",
  "Layout Planning",
];

export const projects: Project[] = [
  {
    id: "ghansoli-apartments",
    title: "Apartment Development",
    category: "Residential",
    location: "Ghansoli, Navi Mumbai",
    image: "/projects/ghansoli-aerial.webp",
    alt: "Aerial design visualization of a multi-storey apartment development at Ghansoli, Navi Mumbai",
    size: "wide",
  },
  {
    id: "magarpatta-commercial",
    title: "Commercial Complex",
    category: "Commercial",
    location: "Magarpatta, Hadapsar",
    image: "/projects/magarpatta-commercial.webp",
    alt: "Design visualization of a modern commercial complex at Magarpatta, Hadapsar, Pune",
    size: "standard",
  },
  {
    id: "john-deere-sanaswadi",
    title: "Industrial Facility, John Deere",
    category: "Industrial",
    location: "Sanaswadi, Pune",
    image: "/projects/john-deere-sanaswadi.webp",
    alt: "Design visualization of an industrial facility for John Deere at Sanaswadi, Pune",
    size: "wide",
  },
  {
    id: "sanaswadi-luxury-residence",
    title: "Luxury Residence",
    category: "Residential",
    location: "Sanaswadi, Pune",
    image: "/projects/sanaswadi-residence.webp",
    alt: "Evening design visualization of a contemporary luxury residence at Sanaswadi, Pune",
    size: "standard",
  },
  {
    id: "talegaon-commercial",
    title: "Commercial Building",
    category: "Commercial",
    location: "Talegaon Dhamdhere",
    image: "/projects/talegaon-commercial.webp",
    alt: "Design visualization of a multi-storey commercial building at Talegaon Dhamdhere",
    size: "tall",
  },
  {
    id: "sahajpur-bungalow",
    title: "Modern Bungalow",
    category: "Residential",
    location: "Sahajpur, Pune",
    image: "/projects/sahajpur-bungalow.webp",
    alt: "Design visualization of a modern bungalow with cantilevered terrace at Sahajpur, Pune",
    size: "standard",
  },
  {
    id: "howrah-industrial",
    title: "Industrial Development",
    category: "Industrial",
    location: "Howrah, Kolkata",
    image: "/projects/howrah-industrial-1.webp",
    alt: "Design visualization of an industrial development at Howrah, Kolkata",
    size: "wide",
  },
  {
    id: "lohgaon-apartments",
    title: "Apartment Building",
    category: "Residential",
    location: "Lohgaon, Pune",
    image: "/projects/lohgaon-apartment.webp",
    alt: "Design visualization of a residential apartment building at Lohgaon, Pune",
    size: "tall",
  },
  {
    id: "karauli-residence",
    title: "Private Residence",
    category: "Residential",
    location: "Karauli, Rajasthan",
    image: "/projects/karauli-residence.webp",
    alt: "Design visualization of a private residence at Karauli, Rajasthan",
    size: "tall",
  },
  {
    id: "khandoba-temple",
    title: "Khandoba Temple Complex",
    category: "Institutional",
    location: "Dhok Sangavi",
    image: "/projects/khandoba-temple.webp",
    alt: "Design visualization of the Khandoba Temple complex with fort-style stone walls at Dhok Sangavi",
    size: "wide",
  },
  {
    id: "balod-layout",
    title: "Township Layout",
    category: "Layout Planning",
    location: "Balod, Chhattisgarh",
    image: "/projects/balod-layout.webp",
    alt: "Aerial design visualization of a planned township layout at Balod, Chhattisgarh",
    size: "wide",
  },
  {
    id: "gandhinagar-bungalow",
    title: "Luxury Bungalow",
    category: "Residential",
    location: "Gandhinagar, Gujarat",
    image: "/projects/gandhinagar-bungalow.webp",
    alt: "Design visualization of a luxury bungalow at Gandhinagar, Gujarat",
    size: "standard",
  },
  {
    id: "living-room-interior",
    title: "Premium Living Room",
    category: "Interiors",
    location: "Pune",
    image: "/projects/interior-living-1.webp",
    alt: "Interior design visualization of a premium double-height living room",
    size: "wide",
  },
  {
    id: "bedroom-interior",
    title: "Master Bedroom Suite",
    category: "Interiors",
    location: "Pune",
    image: "/projects/interior-bedroom.webp",
    alt: "Interior design visualization of a master bedroom suite with warm material palette",
    size: "standard",
  },
];

/* ── Work process ───────────────────────────────────────────── */
export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding the vision, site, requirements and budget.",
  },
  {
    number: "02",
    title: "Site & Feasibility Study",
    description: "Reviewing context, regulations, opportunities and constraints.",
  },
  {
    number: "03",
    title: "Concept Design",
    description: "Exploring planning, form, functionality and architectural character.",
  },
  {
    number: "04",
    title: "Design Development",
    description: "Refining layouts, materials, elevations and technical coordination.",
  },
  {
    number: "05",
    title: "Visualization & Approvals",
    description: "Creating realistic previews and supporting required submissions.",
  },
  {
    number: "06",
    title: "Documentation & Execution Support",
    description:
      "Providing coordinated information to help translate the design into reality.",
  },
];

/* ── Project types ──────────────────────────────────────────── */
export const projectTypes = [
  {
    title: "Luxury Residences",
    description: "Homes designed around the way you live, built to be admired for decades.",
    image: "/projects/gujarat-bungalow.webp",
    alt: "Design visualization of a luxury residence in Gujarat",
  },
  {
    title: "Bungalows",
    description: "Individual bungalows that balance character, comfort and climate.",
    image: "/projects/shikrapur-bungalow.webp",
    alt: "Design visualization of a bungalow with terrace garden at Shikrapur",
  },
  {
    title: "Apartment Buildings",
    description: "Efficient, saleable planning with elevations that stand out.",
    image: "/projects/ghansoli-apartment.webp",
    alt: "Design visualization of an apartment building at Ghansoli, Navi Mumbai",
  },
  {
    title: "Commercial Spaces",
    description: "Retail and office buildings planned for footfall, visibility and returns.",
    image: "/projects/sanaswadi-mixeduse.webp",
    alt: "Design visualization of a mixed-use commercial building at Sanaswadi",
  },
  {
    title: "Industrial Projects",
    description: "Functional industrial planning aligned with operations and compliance.",
    image: "/projects/howrah-industrial-2.webp",
    alt: "Design visualization of an industrial building at Howrah, Kolkata",
  },
  {
    title: "Institutional Developments",
    description: "Temples, campuses and public buildings designed with purpose and dignity.",
    image: "/projects/khandoba-temple-aerial.webp",
    alt: "Aerial design visualization of the Khandoba Temple complex at Dhok Sangavi",
  },
  {
    title: "Interior Spaces",
    description: "Interiors that carry the architecture's intent into every room.",
    image: "/projects/interior-kitchen.webp",
    alt: "Interior design visualization of a modern open kitchen and dining space",
  },
  {
    title: "Land Layouts",
    description: "NA layouts and township planning that maximize land value.",
    image: "/projects/floor-plan-3d.webp",
    alt: "Three-dimensional layout plan visualization",
  },
];

/* ── FAQs (rendered visibly; also used for FAQ schema) ──────── */
export const faqs = [
  {
    question: "What types of architectural projects do you undertake?",
    answer:
      "We design bungalows, luxury residences, apartment buildings, commercial complexes, industrial facilities, institutional developments and interiors. We also prepare NA layouts and township plans. With 1000+ projects behind us, most project types and scales are familiar territory.",
  },
  {
    question: "Do you provide services outside Pune?",
    answer:
      "Yes. While our office is in Shikrapur, Pune, we have delivered projects across Maharashtra and in states including Gujarat, Rajasthan, West Bengal and Chhattisgarh. Distance is rarely a constraint — drawings, visualizations and coordination are handled seamlessly online, supported by site visits where needed.",
  },
  {
    question: "Can you handle both architecture and interior design?",
    answer:
      "Yes. Many clients engage us for both, which keeps the exterior architecture and interior spaces consistent in material, light and character — and saves the effort of coordinating two separate consultants.",
  },
  {
    question: "Do you provide 3D visualization before construction?",
    answer:
      "Yes. Photorealistic 3D views and walkthroughs are part of our design process, so you can see and refine your project before construction begins. This reduces surprises and costly changes on site.",
  },
  {
    question: "Can you assist with PMRDA approvals?",
    answer:
      "Yes. We prepare sanction drawings and documentation and coordinate submissions with the authorities. Approval timelines depend on the authority and the specifics of each proposal, so we guide you on realistic expectations for your case.",
  },
  {
    question: "What information is needed to start a project?",
    answer:
      "A copy of your land documents (7/12 extract or property card), the plot location, an idea of your requirements and an approximate budget are enough for a first conversation. If you have survey drawings or existing plans, those help too.",
  },
  {
    question: "How can I schedule a consultation?",
    answer:
      "Call us on +91 96045 96536, message us on WhatsApp, or submit the inquiry form on this page. We will get back to you to understand your project and schedule a discussion at the office or online.",
  },
];

/* ── Testimonials ───────────────────────────────────────────────
   CMS-READY STRUCTURE — intentionally empty at launch.
   Add only genuine, verified client testimonials here.
   The section renders automatically once entries exist.        */
export type Testimonial = {
  clientName: string;
  projectType: string;
  location: string;
  quote: string;
  image?: string;
};

export const testimonials: Testimonial[] = [
  // Example shape (do not publish without client consent):
  // {
  //   clientName: "Client Name",
  //   projectType: "Bungalow",
  //   location: "Shikrapur",
  //   quote: "Verified quote from the client.",
  //   image: "/projects/example.webp",
  // },
];
