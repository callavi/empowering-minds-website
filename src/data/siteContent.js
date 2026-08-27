import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Compass,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  LineChart,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
   Eye,
  TrendingUp,
  Leaf,
  BookOpenCheck,
} from "lucide-react";

export const navLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Programs", to: "/programs" },
  { label: "Trainer Profile", to: "/trainer-profile" },
  { label: "Empower U", to: "/empower-u" },
  { label: "Contact", to: "/contact" },
];

export const trustedPartners = [
  "Future Leaders Institute",
  "Northstar Campus Network",
  "Catalyst HR Forum",
  "Apex Education Group",
  "Thrive Corporate Academy",
  "BridgePoint Learning",
];

export const trainerProfile = {
  name: "Ira Saha",
  role: "Founder, Trainer & Human Capital Strategist",
  image:
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  intro:
  "Over years of working with students, educators, professionals, and institutional leaders, Empowering Minds was founded to integrate Applied Psychology and structured Human Resource Development into academic and corporate environments—strengthening coping mechanisms, emotional regulation, leadership maturity, communication effectiveness, and performance enhancement to create measurable and sustainable transformation.",
  bio: "Her work blends leadership development, facilitation, coaching, and capability building into learning journeys.",
  highlights: [
    "20+ years across education, HR, and capability-building ecosystems",
    "Designed high-impact interventions for corporate teams and academic institutions",
    "Known for practical frameworks that build confidence, ownership, and visible outcomes",
  ],
};

export const trainerPageContent = {
  heroTitle: "Meet the facilitators who turn insight into visible growth.",
  heroDescription:
    "Our trainers bring together behavioural understanding, institutional context, and practical delivery experience to create learning journeys that feel credible, engaging, and outcomes-focused.",
  learnPoints: [
    {
      title: "Practical industry and institutional exposure",
      description:
        "Our facilitators work across campuses, leadership teams, and people functions, so every session stays grounded in real contexts.",
    },
    {
      title: "Behavioural transformation at the center",
      description:
        "We go beyond information delivery to build awareness, habits, communication confidence, and applied behaviour change.",
    },
    {
      title: "Structured learning outcomes",
      description:
        "Programs are designed with clear developmental milestones, reflective exercises, and outcomes participants can track.",
    },
    {
      title: "Real-world implementation mindset",
      description:
        "Every intervention is built to help learners apply frameworks, conversations, and decisions in their day-to-day environments.",
    },
  ],
};

export const homepageSections = {
  whoWeAre:
    "Empowering Minds is a Human Capital Development initiative focused on strengthening institutions and organisations through structured behavioural, emotional and mind-based transformation.",
  intersectionIntro: "We operate at the intersection of",
  intersectionAreas: [
  {
    title: "Awareness",
    description:
      "Creating awareness through reflective and developmental interventions that strengthen understanding, sensitivity, and perspective.",
    icon: Eye,
  },
  {
    title: "Clarity",
    description:
      "Helping individuals gain clarity in thinking, communication, and emotional understanding for stronger decision-making and growth.",
    icon: Lightbulb,
  },
  {
    title: "Capacity Building",
    description:
      "Building skills, competencies, and readiness through structured learning experiences and developmental engagement.",
    icon: TrendingUp,
  },
  {
    title: "Sustainable Impact",
    description:
      "Designing interventions that create long-term value, behavioural transformation, and measurable outcomes beyond short-term change.",
    icon: Leaf,
  },
  {
    title: "Real World Learning",
    description:
      "Practical learning experiences grounded in real-life workplace, institutional, and performance-based challenges.",
    icon: BookOpenCheck,
  },
 {
    title: "Corporate Conditioning",
    description:
      "Preparing individuals and teams to align with workplace expectations, business culture, adaptability, and professional performance standards.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Institutional Development",
    description:
      "Strengthening institutions through people-focused, system-oriented, and growth-driven developmental interventions.",
    icon: Building2,
  },
],
  approachIntro:
    "Our approach is designed to move participants from insight to action. Every engagement begins with context, builds capability through application, and stays focused on what shifts behavior in the real world.",
  approachPillars: [
    {
      title: "Awareness",
      description: "Build clarity around mindset, context, and the patterns shaping growth.",
      icon: Compass,
    },
    {
      title: "Capability",
      description: "Develop skills through frameworks, tools, and guided practice.",
      icon: Lightbulb,
    },
    {
      title: "Confidence",
      description: "Create the assurance to apply new learning in visible, meaningful ways.",
      icon: ShieldCheck,
    },
    {
      title: "Impact",
      description: "Translate development into stronger performance, leadership, and outcomes.",
      icon: LineChart,
    },
    {
      title: "Sustainability",
      description: "Embed habits and systems that help transformation last beyond the workshop.",
      icon: Target,
    },
  ],
};

export const testimonials = [
  {
    quote:
      "The sessions were practical, energizing, and immediately useful for our leadership pipeline. We saw stronger collaboration within weeks.",
    name: "Ananya Mehta",
    role: "HR Head, Apex Education Group",
  },
  {
    quote:
      "Our students responded brilliantly to the confidence-building modules. The delivery felt modern, personal, and deeply relevant.",
    name: "Rahul Menon",
    role: "Dean, Northstar Business School",
  },
  {
    quote:
      "Empowering Minds helped our managers lead more intentionally. The frameworks were simple to adopt and strong in impact.",
    name: "Shweta Kapoor",
    role: "L&D Lead, Thrive Corporate Academy",
  },
];

export const impactStats = [
  { value: "12K+", label: "Learners reached across programs" },
  { value: "150+", label: "Workshops and interventions delivered" },
  { value: "40+", label: "Institutional and corporate partners" },
  { value: "92%", label: "Participants reporting improved confidence" },
];

export const serviceGroups = [
  {
    id: "human-capital-development",
    title: "Human Capital Development",
    description:
      "People-first interventions that strengthen capability, performance, and long-term workforce growth.",
    icon: Users,
    services: ["Employee Development", "Capability Building", "Performance Enhancement"],
  },
  {
    id: "leadership-programs",
    title: "Leadership Programs",
    description:
      "Development pathways for leaders at every stage of influence and organizational responsibility.",
    icon: Trophy,
    services: ["Emerging Leaders", "Mid-Level Managers", "Senior Leadership"],
  },
  {
    id: "student-development",
    title: "Student Development",
    description:
      "Future-focused learning experiences that help students communicate, compete, and thrive.",
    icon: GraduationCap,
    services: [
      "Communication Skills",
      "Employability Skills",
      "Career Readiness",
      "Confidence Building",
    ],
  },
  {
    id: "institutional-development",
    title: "Institutional Development",
    description:
      "Strategic programs for faculty, academic leaders, and institutions navigating growth.",
    icon: Building2,
    services: ["Faculty Development", "Academic Leadership", "Organizational Growth"],
  },
];

export const programs = [
  {
    id: "human-capital-development-lab",
    category: "Human Capital Development",
    cardCategory: "LONG TERM",
    emoji: "🪪",
    title: "Fellowship in L&D & OD (Updated with AI Tools)",
    description:
      "A strategic capability-building program for people professionals driving workforce growth.",
    shortDescription:
      "Transform into a high-impact L&D and OD leader with advanced strategic capabilities.",
    audience: "HR teams and L&D professionals",
    duration: "24 weeks blended",
    format: "Live + cohort-based",
    price: "₹89,250",
    priceLine: "₹89,250 · 24 Weeks Program ·",
    startDate: "13 June 2026",
    durationLine: "Starting 13 June 2026",
    footerDate: "24 weeks",
    ctaLabel: "View Fellowship",
    topAccent: "bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-muted)] to-[var(--color-secondary)]",
    icon: BriefcaseBusiness,
    outcomes: [
      "Design development pathways linked to performance",
      "Build learning strategies aligned to business goals",
      "Lead capability interventions with measurable outcomes",
    ],
  },
  {
    id: "leadership-excellence-sprint",
    category: "Leadership Programs",
    cardCategory: "STRATEGIC",
    emoji: "🪪",
    title: "MEHR's Annual Strategic membership for Evolution & Renewal (MASER)",
    description:
      "A practical leadership sprint for managers building influence, alignment, and team confidence.",
    shortDescription:
      "Build strategic renewal capacity through a focused annual membership experience.",
    audience: "Emerging and mid-level leaders",
    duration: "12 weeks",
    format: "Workshop series",
    price: "₹12,000",
    priceLine: "₹12,000 · 24 Weeks Program ·",
    startDate: "13 June 2026",
    durationLine: "Starting 13 June 2026",
    footerDate: "24 weeks",
    ctaLabel: "View Maser",
    topAccent: "bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-muted)] to-[var(--color-secondary)]",
    icon: Trophy,
    outcomes: [
      "Improve feedback and communication rhythms",
      "Lead through change with more clarity",
      "Strengthen accountability within teams",
    ],
  },
  {
    id: "faculty-development-for-impact",
    category: "Institutional Development",
    cardCategory: "SPECIALIST",
    emoji: "🤝",
    title: "Certified Learning & Development Manager (Updated with AI Tools)",
    description:
      "A blended program to help faculty elevate facilitation, student engagement, and academic leadership.",
    shortDescription:
      "Master modern learning strategies with AI-powered L&D expertise",
    audience: "Faculty and academic leaders",
    duration: "6 weeks",
    format: "Hybrid delivery",
    price: "₹29,500",
    priceLine: "₹29,500 + 18% GST ·",
    startDate: "13 June 2026",
    durationLine: "04 Weeks Live · 06 Weeks Blended",
    footerDate: "13 June 2026",
    ctaLabel: "View Certification",
    topAccent: "bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-muted)] to-[var(--color-secondary)]",
    icon: Building2,
    outcomes: [
      "Refresh learner-centered teaching practices",
      "Strengthen classroom and institutional leadership",
      "Create action plans for improved student outcomes",
    ],
  },
  {
    id: "career-readiness-bootcamp",
    category: "Student Development",
    cardCategory: "SPECIALIST",
    emoji: "🤝",
    title: "Certified HR Business Partnering (Updated with AI Tools)",
    description:
      "An immersive journey covering communication, interviews, employability, and workplace presence.",
    shortDescription:
      "Become a strategic HR partner who drives real business impact",
    audience: "College students and final-year cohorts",
    duration: "6 weeks",
    format: "Bootcamp",
    price: "₹29,500",
    priceLine: "₹29,500 + 18% GST ·",
    startDate: "13 June 2026",
    durationLine: "04 Weeks Live · 06 Weeks Blended",
    footerDate: "13 June 2026",
    ctaLabel: "View Certification",
    topAccent: "bg-gradient-to-r from-[var(--color-muted)] via-[var(--color-secondary)] to-[var(--color-secondary)]",
    icon: GraduationCap,
    outcomes: [
      "Build interview and workplace communication confidence",
      "Improve presentation and collaboration skills",
      "Prepare for placements with stronger self-awareness",
    ],
  },
  {
    id: "emerging-leaders-lab",
    category: "Leadership Programs",
    cardCategory: "STRATEGIC",
    emoji: "🧭",
    title: "Emerging Leaders Lab",
    description:
      "A focused pathway for high-potential professionals stepping into leadership responsibility.",
    shortDescription:
      "Develop executive presence, decision-making, and people leadership in a guided lab.",
    audience: "First-time and future managers",
    duration: "8 weeks",
    format: "Live cohort",
    price: "₹18,500",
    priceLine: "₹18,500 · 08 Weeks Program ·",
    startDate: "15 September 2026",
    durationLine: "Starting 15 September 2026",
    footerDate: "8 weeks",
    ctaLabel: "View Program",
    topAccent: "bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-muted)] to-[var(--color-secondary)]",
    icon: Sparkles,
    outcomes: [
      "Develop executive presence",
      "Practice coaching conversations",
      "Set team priorities with more confidence",
    ],
  },
  {
    id: "institutional-growth-forum",
    category: "Institutional Development",
    cardCategory: "SPECIALIST",
    emoji: "🏛️",
    title: "Institutional Growth Forum",
    description:
      "A strategic forum to help institutions strengthen leadership, culture, and development systems.",
    shortDescription:
      "Help institutional leaders align strategy, culture, and development systems for growth.",
    audience: "Directors, deans, and institutional leaders",
    duration: "10 weeks",
    format: "Facilitated roundtable",
    price: "₹39,500",
    priceLine: "₹39,500 · 10 Weeks Program ·",
    startDate: "01 October 2026",
    durationLine: "Starting 01 October 2026",
    footerDate: "10 weeks",
    ctaLabel: "View Program",
    topAccent: "bg-gradient-to-r from-[var(--color-muted)] via-[var(--color-secondary)] to-[var(--color-secondary)]",
    icon: ArrowUpRight,
    outcomes: [
      "Align people development with institutional strategy",
      "Improve collaboration across leadership functions",
      "Prioritize sustainable growth initiatives",
    ],
  },
  {
    id: "performance-enhancement-studio",
    category: "Human Capital Development",
    cardCategory: "LONG TERM",
    emoji: "📈",
    title: "Performance Enhancement Studio",
    description:
      "A results-focused engagement to improve productivity, ownership, and performance conversations.",
    shortDescription:
      "Improve productivity, ownership, and coaching conversations across teams.",
    audience: "People managers and team leads",
    duration: "8 weeks",
    format: "Onsite or virtual",
    price: "₹24,000",
    priceLine: "₹24,000 · 08 Weeks Program ·",
    startDate: "22 October 2026",
    durationLine: "Starting 22 October 2026",
    footerDate: "8 weeks",
    ctaLabel: "View Program",
    topAccent: "bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-muted)] to-[var(--color-secondary)]",
    icon: LineChart,
    outcomes: [
      "Run sharper goal-setting conversations",
      "Build stronger review and coaching habits",
      "Create visible performance improvement plans",
    ],
  },
  {
    id: "confidence-and-communication-clinic",
    category: "Student Development",
    cardCategory: "SPECIALIST",
    emoji: "🎤",
    title: "Confidence and Communication Clinic",
    description:
      "A high-energy clinic designed to help learners speak with confidence and show up with clarity.",
    shortDescription:
      "Help learners communicate clearly, reduce hesitation, and present with confidence.",
    audience: "Students and early-career talent",
    duration: "4 weeks",
    format: "Interactive workshop",
    price: "₹7,500",
    priceLine: "₹7,500 · 04 Weeks Program ·",
    startDate: "05 November 2026",
    durationLine: "Starting 05 November 2026",
    footerDate: "4 weeks",
    ctaLabel: "View Program",
    topAccent: "bg-gradient-to-r from-[var(--color-muted)] via-[var(--color-secondary)] to-[var(--color-secondary)]",
    icon: HeartHandshake,
    outcomes: [
      "Speak more clearly in formal settings",
      "Reduce hesitation and self-doubt",
      "Project confidence during presentations",
    ],
  },
];

export const categories = [
  "All",
  "Human Capital Development",
  "Leadership Programs",
  "Student Development",
  "Institutional Development",
];

export const aboutContent = {
  heroTitle: "Learning experiences that move people and institutions forward.",
  heroText:
    "Empowering Minds partners with organizations, campuses, and leaders to create transformation that is thoughtful, practical, and measurable.",
  mission:
    "To design development experiences that unlock confidence, capability, and sustainable impact.",
  vision:
    "To be a trusted growth partner for institutions and teams building a stronger future through people development.",
  story:
    "Empowering Minds was created to bridge a gap often felt in learning and development: the gap between inspiring ideas and real-world application. Our journey began with a simple commitment to create development experiences that are grounded, action-oriented, and deeply human.",
  values: [
    "Human-centered growth",
    "Practical transformation",
    "Integrity in facilitation",
    "Partnership over prescription",
    "Sustainable impact",
  ],
  reasons: [
    "Programs built for real-world behavior change",
    "Strong mix of corporate and academic understanding",
    "Flexible formats across workshops, cohorts, and strategic interventions",
  ],
};

export const trainers = [
  {
    id: 1,
    name: "Dr. Ritu Sharma",
    role: "Founder & Lead Trainer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
    shortBio:
      "With two decades of corporate and institutional experience, Dr. Ritu Sharma helps leaders, faculty, students, and people teams move from potential to practical transformation.",
    fullBio:
      "Dr. Ritu Sharma brings a deep blend of leadership development, learning design, and institutional consulting experience to Empowering Minds. Her facilitation approach combines behavioural insight with structured capability-building so participants can strengthen confidence, leadership presence, communication, and execution in ways that are visible and sustainable.",
    expertise: ["Leadership Development", "L&D", "OD", "Human Capital Development"],
    experience:
      "20+ years across corporate learning, academic leadership development, and human capital capability-building.",
    highlights: [
      "Designed leadership and faculty development journeys for institutions and people teams",
      "Guides participants from self-awareness to practical workplace and classroom application",
      "Known for combining strategic clarity with reflective, people-centered facilitation",
    ],
  },
  {
    id: 2,
    name: "Ananya Verma",
    role: "Communication & Behavioral Skills Trainer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    shortBio:
      "Ananya works with students and professionals to build confidence, communication clarity, and workplace readiness.",
    fullBio:
      "Ananya Verma specializes in helping learners express themselves with more clarity, confidence, and professional polish. Her sessions are interactive, practical, and closely aligned with real-world expectations around interviews, presentations, collaboration, and professional communication.",
    expertise: ["Communication", "Confidence Building", "Interview Skills"],
    experience:
      "10+ years facilitating communication, behavioural readiness, and employability-focused development programs.",
    highlights: [
      "Builds practical speaking confidence for students, graduates, and early professionals",
      "Designs learning experiences around workplace etiquette, presentations, and interviews",
      "Creates safe, high-engagement environments that improve clarity and self-belief",
    ],
  },
  {
    id: 3,
    name: "Rahul Mehta",
    role: "Leadership & Performance Coach",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    shortBio:
      "Rahul specializes in leadership capability building, team performance, and manager effectiveness programs.",
    fullBio:
      "Rahul Mehta works with managers and emerging leaders to strengthen accountability, people leadership, and team effectiveness. He focuses on translating leadership concepts into practical routines, clearer conversations, and stronger decision-making so participants can perform with more consistency and confidence.",
    expertise: ["Leadership", "Performance Coaching", "Team Effectiveness"],
    experience:
      "12+ years delivering manager effectiveness, performance coaching, and leadership readiness interventions.",
    highlights: [
      "Supports first-time and emerging leaders as they step into greater responsibility",
      "Brings a strong execution lens to coaching, feedback, and performance conversations",
      "Helps teams build clarity, ownership, and stronger collaboration habits",
    ],
  },
];

export const empowerUContent = {
  heroTitle: "A growth initiative for confidence, capability, and career momentum.",
  heroDescription:
    "Empower U is a signature development initiative by Empowering Minds designed to strengthen how students, early professionals, and emerging leaders communicate, think, and show up in high-opportunity environments.",
  intro:
    "Built as a practical growth platform, Empower U blends mindset work with real-world readiness. It helps participants develop confidence, communication, employability, and leadership presence through guided learning experiences that move from self-awareness to visible application.",
  focusAreas: [
    {
      title: "Communication & Confidence",
      description:
        "Build clarity in expression, reduce hesitation, and strengthen presence in classrooms, interviews, and workplace conversations.",
      icon: HeartHandshake,
    },
    {
      title: "Career Readiness",
      description:
        "Develop interview readiness, professional etiquette, and the ability to position strengths with confidence.",
      icon: BriefcaseBusiness,
    },
    {
      title: "Leadership Mindset",
      description:
        "Strengthen ownership, initiative, and decision-making habits that prepare participants to lead with maturity.",
      icon: Sparkles,
    },
    {
      title: "Personal Effectiveness",
      description:
        "Sharpen focus, emotional regulation, self-management, and reflective practices that support consistent growth.",
      icon: Target,
    },
    {
      title: "Workplace Readiness",
      description:
        "Prepare for real-world expectations around collaboration, adaptability, accountability, and execution.",
      icon: ShieldCheck,
    },
  ],
  audienceGroups: [
    "Students",
    "Fresh graduates",
    "Early professionals",
    "Aspiring leaders",
  ],
  deliveryFormats: [
    "Workshops",
    "Bootcamps",
    "Guided cohorts",
    "Institutional interventions",
  ],
};

export const contactDetails = {
  phone: "+91 9794278786",
  email: "contact@empoweringminds.in",
  address: "Empowering Minds, 86 VIP Road, Yamuna Apartment, Kolkata 700048, India",
};

export const faqs = [
  {
    question: "Do you offer customized programs?",
    answer:
      "Yes. We tailor engagements based on your audience, business or institutional context, and desired outcomes.",
  },
  {
    question: "Can sessions be delivered virtually?",
    answer:
      "Absolutely. We support onsite, virtual, and blended formats depending on the program design.",
  },
  {
    question: "Who are your programs designed for?",
    answer:
      "Our programs support students, faculty, academic leaders, HR teams, managers, and senior leadership groups.",
  },
];
