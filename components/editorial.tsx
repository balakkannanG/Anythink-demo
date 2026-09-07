import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p className={`flex items-center gap-4 font-mono text-[0.62rem] font-medium uppercase tracking-[0.28em] text-mustard ${className}`}>
      <span className="h-px w-10 bg-mustard" aria-hidden="true" />
      {children}
    </p>
  );
}

type HeadingTag = "h1" | "h2" | "h3";
type HeadingSize = "hero" | "display" | "section" | "card";

interface ChalkHeadingProps {
  as?: HeadingTag;
  size?: HeadingSize;
  children: ReactNode;
  className?: string;
}

const headingSizes: Record<HeadingSize, string> = {
  hero: "text-[clamp(3.1rem,7vw,7rem)] leading-[0.86]",
  display: "text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.84]",
  section: "text-[clamp(2.8rem,5vw,5.2rem)] leading-[0.88]",
  card: "text-[clamp(2rem,3vw,3rem)] leading-none",
};

export function ChalkHeading({
  as = "h2",
  size = "section",
  children,
  className = "",
}: ChalkHeadingProps) {
  const Heading = as;

  return (
    <Heading className={`font-head uppercase text-chalk ${headingSizes[size]} ${className}`}>
      {children}
    </Heading>
  );
}

interface ActionLinkProps {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "plain";
  className?: string;
}

export function ActionLink({
  href,
  children,
  variant = "outline",
  className = "",
}: ActionLinkProps) {
  const variantClasses = {
    solid: "borderbgimageyellow bg-mustard text-ink hover:bg-transparent hover:text-mustard",
    outline: "border border-line-strong text-chalk hover:border-mustard hover:text-mustard",
    plain: "border-b border-mustard text-mustard hover:text-chalk",
  };

  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-4 px-5 font-mono text-[0.65rem] font-medium uppercase tracking-[0.18em] transition-colors ${variantClasses[variant]} ${className}`}
    >
      {children}
      <ArrowUpRight
        size={15}
        strokeWidth={1.5}
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </Link>
  );
}

export function ProcessMotif({ className = "" }: { className?: string }) {
  return (
    <figure className={`relative min-h-[17rem] w-full ${className}`} aria-label="Idea to impact process illustration">
      {/* <svg className="absolute inset-0 h-full w-full" viewBox="0 0 720 360" fill="none" role="img" aria-hidden="true">
        <path d="M42 248C145 194 245 270 344 206C442 143 504 218 679 84" stroke="currentColor" strokeWidth="2" strokeDasharray="2 11" className="text-chalk-dim" />
        <path d="M73 204L86 153L99 204M86 153V233" stroke="currentColor" strokeWidth="2" className="text-chalk" />
        <circle cx="86" cy="140" r="12" stroke="currentColor" strokeWidth="2" className="text-chalk" />
        <path d="M207 238L220 187L233 238M220 187V267" stroke="currentColor" strokeWidth="2" className="text-chalk" />
        <circle cx="220" cy="174" r="12" stroke="currentColor" strokeWidth="2" className="text-chalk" />
        <path d="M577 136L590 84L603 136M590 84V167" stroke="currentColor" strokeWidth="2" className="text-chalk" />
        <circle cx="590" cy="70" r="12" stroke="currentColor" strokeWidth="2" className="text-chalk" />
        <path d="M642 98L655 48L668 98M655 48V129" stroke="currentColor" strokeWidth="2" className="text-chalk" />
        <circle cx="655" cy="35" r="12" stroke="currentColor" strokeWidth="2" className="text-chalk" />
        <path d="M360 112C360 73 390 42 428 42C467 42 497 73 497 112C497 138 485 155 468 171C458 181 454 190 454 204H402C402 190 398 181 388 171C371 155 360 138 360 112Z" stroke="currentColor" strokeWidth="3" className="text-mustard" />
        <path d="M403 225H454M409 240H448M419 255H439M429 42V16M344 76L322 63M508 76L530 63" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-mustard" />
        <path d="M385 110C399 91 414 85 429 92C443 99 452 89 468 78M386 110C400 126 413 132 429 125C445 118 454 128 470 141" stroke="currentColor" strokeWidth="2" className="text-chalk" />
        <path d="M129 239L156 223L180 234M264 207L293 195L316 202M509 164L535 151L558 157" stroke="currentColor" strokeWidth="2" className="text-mustard" />
        <rect x="130" y="235" width="28" height="20" transform="rotate(-11 130 235)" stroke="currentColor" strokeWidth="2" className="text-chalk" />
        <rect x="273" y="210" width="28" height="20" transform="rotate(-12 273 210)" stroke="currentColor" strokeWidth="2" className="text-chalk" />
        <rect x="507" y="173" width="28" height="20" transform="rotate(-9 507 173)" stroke="currentColor" strokeWidth="2" className="text-chalk" />
      </svg> */}
      <div className="absolute right-0 bottom-0 left-0 flex justify-between px-3 font-mono text-[0.58rem] uppercase tracking-[0.18em] text-chalk-faint sm:px-8">
        <span>01 · idea</span>
        <span>02 · plan</span>
        <span>03 · execute</span>
        <span>04 · amplify</span>
      </div>
    </figure>
  );
}

export function StoryMap({ className = "" }: { className?: string }) {
  return (
    <div className={`chalk-frame relative overflow-hidden p-6 sm:p-8 ${className}`}>
      <div className="flex items-center justify-between border-b border-dashed border-line pb-4">
        <span className="font-chalk text-2xl text-chalk">a little about us</span>
        <span className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-mustard">our story</span>
      </div>
     <img src="/homepage/whoweare.webp" alt="" className="w-full h-130 max-sm:h-80" />
      <div className="flex items-end justify-between gap-4 border-t border-dashed border-line pt-4">
        <span className="font-chalk text-xl text-chalk-dim">make room for the unexpected</span>
        <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-chalk-faint">idea · strategy · create · connect</span>
      </div>
    </div>
  );
}

export function QuestionCallout({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <span className="flex size-16 shrink-0 items-center justify-center rounded-full border border-dashed border-mustard font-chalk text-4xl text-mustard">
        ?
      </span>
      <span className="h-px w-12 rotate-[-7deg] bg-mustard" aria-hidden="true" />
      <p className="max-w-[12rem] font-chalk text-xl leading-tight text-chalk-dim">
        Every good thing
        <br />
        <span className="text-mustard">starts with a question.</span>
      </p>
    </div>
  );
}
