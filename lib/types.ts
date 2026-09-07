export type SiteRoute = "/" | "/about" | "/services" | "/work" | "/contact";

export type ServiceIcon = string;

export type CaseStudyId = "aukera" | "titan-world" | "prestige-group" | "voice-titan";

export interface NavItem {
  label: string;
  href: SiteRoute;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  note: string;
  icon: ServiceIcon;
}

export interface MethodItem {
  number: string;
  title: "Strategy" | "Creativity" | "Media" | "Experiences";
  description: string;
}

export interface CaseStudyService {
  icon: string;
  label: string;
}

export interface CaseStudyFrame {
  label: string;
  tone: "chalk" | "mustard";
}

export interface CaseStudy {
  id: CaseStudyId;
  number: string;
  title: string;
  eyebrow: string;
  image?: string;
  summary: string;
  metadata: string;
  services: (string | CaseStudyService)[];
  frames: CaseStudyFrame[];
}

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;
export type ContactFormStatus = "idle" | "submitting" | "success" | "error";
