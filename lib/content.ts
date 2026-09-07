import type {
  CaseStudy,
  MethodItem,
  NavItem,
  Service,
  ServiceIcon,
} from "@/lib/types";

export const serviceIconMap: Record<string, ServiceIcon> = {
  celebration: "/work/icon/bum.png",
  camera: "/work/icon/camera.png",
  headphone: "/work/icon/headphone.png",
  map: "/work/icon/map.png",
  podcasts: "/work/icon/mic.png",
  podcast: "/work/icon/mic.png",
  mobileads: "/work/icon/mobile.png",
  radio: "/work/icon/radio.png",
  radiowithout: "/work/icon/Rectangle 1.png",
  films: "/work/icon/clapperboard.png",
  mic: "/work/icon/Rectangle 2.png",
  admarket: "/work/icon/Rectangle 2.png",
  massage: "/work/icon/Rectangle 4.png",
  list: "/work/icon/Rectangle 6.png",
  services: "/work/icon/setting.png",
  trafie: "/work/icon/trafie.png",
  user: "/work/icon/user.png",
  womon: "/work/icon/womon.png",
  
};

export function getServiceIcon(service: string): string {
  // Try exact match first
  const lowerService = service.toLowerCase();
  if (serviceIconMap[lowerService]) {
    return serviceIconMap[lowerService];
  }
  
  // Try to find a keyword in the service string
  for (const [key, icon] of Object.entries(serviceIconMap)) {
    if (lowerService.includes(key)) {
      return icon;
    }
  }
  
  // Default to radio if no match found
  return "/work/icon/radio.png";
}

export const navItems: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Who we are", href: "/about" },
  { label: "What we do", href: "/services" },
  { label: "Our work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export const services: readonly Service[] = [
  {
    id: "radio",
    number: "01",
    title: "Radio",
    description:
      "Strategy, buying, scripts and spots production — making the right voices heard with maximum recall.",
    note: "sound first",
    icon: "radio",
  },
  {
    id: "podcasts",
    number: "02",
    title: "Podcasts",
    description:
      "Branded conversations and original series that turn a point of view into a story people want to stay with.",
    note: "stories that last",
    icon: "mic",
  },
  {
    id: "films-ads",
    number: "03",
    title: "Films & Ads",
    description:
      "From the first frame to the final cut — films and ads with a clear idea at the centre.",
    note: "make it move",
    icon: "clapperboard",
  },
  {
    id: "digital-social",
    number: "04",
    title: "Digital & Social",
    description:
      "Content creation that connects, engages and keeps conversations moving across the places people spend time.",
    note: "keep talking",
    icon: "share",
  },
  {
    id: "events-activations",
    number: "05",
    title: "Events & Activations",
    description:
      "From concept to crowd — memorable experiences, mall activations and end-to-end execution that bring the idea to life.",
    note: "make a moment",
    icon: "party",
  },
];

export const methodItems: readonly MethodItem[] = [
  {
    number: "01",
    title: "Strategy",
    description: "A clear point of view for the brand, the audience and the moment.",
  },
  {
    number: "02",
    title: "Creativity",
    description: "The idea, shaped with the craft and confidence to stand apart.",
  },
  {
    number: "03",
    title: "Media",
    description: "The right channels, voices and formats to make the message travel.",
  },
  {
    number: "04",
    title: "Experiences",
    description: "The moments that connect people to a brand in a meaningful way.",
  },
];

export const caseStudies: readonly CaseStudy[] = [
  {
    id: "aukera",
    number: "01",
    eyebrow: "Partnership",
    title: "Aukera",
    image: "/Company/Asset 17.png",
    summary:
      "Anythink Media is associated with Aukera since Nov 2023. We work very closely with their team on every story and activation.",
    metadata: "Our partnership since Nov 2023",
    services: [
      { icon: "/work/icon/Rectangle 1.png", label: "Radio strategy & buying, ensuring maximum ROI" },
      { icon: "/work/icon/Rectangle 2.png", label: "Radio scripts & spots production" },
      { icon: "/work/icon/Rectangle 3.png", label: "Mall activations & events for larger reach" },
      { icon: "/work/icon/Rectangle 4.png", label: "Content creation - social media" },
    ],
    frames: [
      { label: "Aukera / on location", tone: "chalk" },
      { label: "content creation", tone: "mustard" },
      { label: "mall activations", tone: "mustard" },
      { label: "radio strategy & buying", tone: "chalk" },
      { label: "stories in motion", tone: "mustard" },
    ],
  },
  {
    id: "titan-world",
    number: "02",
    eyebrow: "Partnership",
    title: "Titan World",
      image: "/Company/Asset 5.png",
    summary:
      "Strategic collaborations with the right voices to amplify brand love, supported by smart media and flawless execution.",
    metadata: "Work done for Titan World",
    services: [
      { icon: "/work/icon/user.png", label: "Influencers - strategic collaborations with the right voices" },
      { icon: "/work/icon/radio.png", label: "Radio - smart strategy, engaging scripts & impactful spots" },
      { icon: "/work/icon/mobile.png", label: "Digital content that connects, engages and drives conversations" },
      { icon: "/work/icon/bum.png", label: "Events - memorable experiences that create lasting impact" },
      { icon: "/work/icon/Rectangle 6.png", label: "End-to-end execution - planning, coordination and production" },
    ],
    frames: [
      { label: "Titan World / influencers", tone: "mustard" },
      { label: "Titan World / customer experience", tone: "chalk" },
      { label: "Titan World / retail display", tone: "chalk" },
      { label: "Titan World / conversations", tone: "mustard" },
      { label: "Titan World / events", tone: "mustard" },
    ],
  },
  {
    id: "prestige-group",
    number: "03",
    eyebrow: "Partnership",
    title: "Prestige Group",
      image: "/Company/Asset 1.png",
    summary:
      "Stories that inspire. Connections that last. Impact that matters. A collection of branded content ideas made to sound human and stay with the audience.",
    metadata: "Association since 2023",
    services: [
      { icon: "/work/icon/mic.png", label: "Brick by Brick - end-to-end execution of the Prestige podcast" },
      { icon: "/work/icon/headphone.png", label: "Inspire & Ignite - branded content for Uzma Irfan" },
      { icon: "/work/icon/camera.png", label: "Uzma Off Duty - branded travel stories" },
    ],
    frames: [
      { label: "Brick by Brick", tone: "chalk" },
      { label: "Inspire & Ignite", tone: "mustard" },
      { label: "Uzma Off Duty", tone: "mustard" },
    ],
  },
  {
    id: "voice-titan",
    number: "04",
    eyebrow: "Titan Encircle",
    title: "Voice Titan",
      image: "/Company/Asset 3.png",
    summary:
      "A pan India music talent hunt curated for Titan employees and customers, delivered with strategy, planning, execution and impact.",
    metadata: "End-to-end excellence delivered",
    services: [
      { icon: "/work/icon/trafie.png", label: "Winner won ₹5 lakhs cash prize" },
      { icon: "/work/icon/women.png", label: "Usha Uthup was the judge" },
      { icon: "/work/icon/map.png", label: "Done pan India" },
      { icon: "/work/icon/setting.png", label: "Managed end to end" },
      // { icon: "/work/icon/bum.png", label: "₹80 lakh budget event" },
    ],
    frames: [
      { label: "Voice Titan / launch", tone: "mustard" },
      { label: "Voice Titan / live music", tone: "chalk" },
      { label: "Voice Titan / talent hunt", tone: "chalk" },
      { label: "Voice Titan / grand finale", tone: "mustard" },
      { label: "Voice Titan / community", tone: "mustard" },
    ],
  },
];

export const contactDetails = {
  email: "hello@anythink.media",
  locations: "Hyd · Delhi · Lucknow · Bengaluru",
  socials: ["Instagram", "LinkedIn"],
} as const;
