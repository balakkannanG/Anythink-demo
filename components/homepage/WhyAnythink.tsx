"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BarChart3,
  BookOpen,
  CircleCheck,
  FileCheck2,
  Heart,
  MessageCircle,
  Sparkles,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRef, useState } from "react";

const reasons: readonly {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}[] = [
  {
    number: "01",
    title: "Experienced people",
    description: "A team with deep experience across media, marketing, content, events and brand building.",
    icon: Users,
    image: "/homepage/whoweare.webp",
  },
  {
    number: "02",
    title: "Storytelling that connects",
    description: "We turn brand messages into stories people understand, remember and engage with.",
    icon: BookOpen,
    image: "/homepage/whoweare.webp",
  },
  {
    number: "03",
    title: "Content that moves",
    description: "From podcasts and videos to branded content and social storytelling - content with a purpose.",
    icon: MessageCircle,
    image: "/homepage/whoweare.webp",
  },
  {
    number: "04",
    title: "Growth thinking",
    description: "We connect creativity to reach, engagement, footfall, participation and business goals.",
    icon: BarChart3,
    image: "/homepage/whoweare.webp",
  },
  {
    number: "05",
    title: "The complete cycle",
    description: "Ideas, content, media, experiences and measurement brought together in one clear cycle.",
    icon: Heart,
    image: "/homepage/whoweare.webp",
  },
  {
    number: "06",
    title: "End-to-end execution",
    description: "Strategy, creative, production, vendors, artists, media, logistics and on-ground execution.",
    icon: FileCheck2,
    image: "/homepage/whoweare.webp",
  },
  {
    number: "07",
    title: "Proven track record",
    description: "A portfolio spanning corporates, retail, festivals, employee engagement, customer experiences, media and branded content.",
    icon: CircleCheck,
    image: "/homepage/whoweare.webp",
  },
] as const;

function ReasonCard({
  reason,
  active,
  onClick,
}: {
  reason: (typeof reasons)[number];
  active: boolean;
  onClick: () => void;
}) {
  const Icon = reason.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Show reason ${reason.number}: ${reason.title}`}
      aria-pressed={active}
      className={`my-2 flex size-32 shrink-0 flex-col items-center justify-center rounded-full border bg-black px-5 text-center transition-all duration-300 sm:size-40 sm:px-7 ${
        active ? "z-10 scale-125 border-2 border-mustard shadow-[0_0_24px_rgb(224_173_26/0.16)]" : "border-chalk/50 opacity-60 hover:border-mustard hover:opacity-100"
      }`}
    >
      <span className="font-marker text-2xl text-mustard sm:text-3xl">{reason.number}</span>
      <Icon className="my-1 text-mustard" size={24} strokeWidth={1.2} aria-hidden="true" />
      <span className="font-head text-sm uppercase leading-[0.9] text-chalk sm:text-base">{reason.title}</span>
    </button>
  );
}

export function WhyAnythink() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const wheelLockRef = useRef(false);
  const activeReason = reasons[activeIndex];
  const ActiveIcon = activeReason.icon;

  const handleCarouselWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (wheelLockRef.current || Math.abs(event.deltaY) < 10) return;

    event.preventDefault();
    wheelLockRef.current = true;

    const direction = event.deltaY > 0 ? 1 : -1;
    const nextIndex = (activeIndexRef.current + direction + reasons.length) % reasons.length;
    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);

    window.setTimeout(() => {
      wheelLockRef.current = false;
    }, 350);
  };

  return (
    <section className="overflow-hidden border-y border-line bg-black">
      <div className="site-rail py-14 sm:py-24">
        <motion.header
          className="relative pt-6 text-left max-sm:text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/homepage/anythinkmedialogobl.svg"
            alt="anyTHINK Media and Events"
            width={220}
            height={95}
            className="absolute top-4 right-0 hidden h-auto w-50 sm:block"
          />
          <p className="font-chalk text-2xl  uppercase text-chalk-dim">Starts with an</p>
          <h2 className="mt-1 font-head text-[clamp(3.5rem,6vw,5rem)] uppercase leading-[0.8] text-chalk">
            Why <span className="text-mustard">Anythink?</span>
          </h2>
           <motion.div
              className="mt-5 h-auto w-100 max-sm:w-auto max-w-full max-sm:ml-6 -rotate-1  flex justify-center items-center"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0 }}
              aria-hidden="true"
            >     <img src="/homepage/section 4/Layer 2.png" alt="" className="w-100 h-full object-cover mx-auto" /> 
             </motion.div>
          <motion.p
            className="mt-5 w-full text-right font-chalk text-xl uppercase leading-tight text-chalk-dim max-sm:text-center sm:text-2xl relative "
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
<span className="absolute left-0 top-0 w-auto h-full hidden lg:block" aria-hidden="true" >
      <img src="/homepage/section 6/Rectangle 111.png" alt="" className=" w-140 " /></span>
            Experienced people. Powerful storytelling.
            <br />
            Impactful <span className="text-mustard">content.</span> Measurable <span className="text-mustard">growth.</span>
          </motion.p>
        </motion.header>

        <div className="mx-auto mt-14 grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20">
          {/*
            Future mobile carousel section. Keep this block commented while the
            shared carousel is used on mobile and desktop.

            <motion.div className="sm:hidden flex flex-col gap-6 overflow-hidden">
              <div className="relative flex flex-col gap-4 overflow-y-scroll snap-y snap-mandatory scroll-smooth h-[26rem] rounded-lg border border-chalk/30 bg-board">
                {reasons.map((reason) => (
                  <article key={reason.number} className="flex-shrink-0 h-96 snap-start snap-always">
                    Your future mobile card layout
                  </article>
                ))}
              </div>
            </motion.div>
          */}

          {/* Carousel Details */}
          <motion.div
            className="border-l-2 border-mustard pl-6 sm:pl-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 text-mustard">
              <ActiveIcon size={36} strokeWidth={1.2} aria-hidden="true" />
              <span className="font-marker text-4xl">{activeReason.number}</span>
            </div>
            <h3 className="mt-6 max-w-xl font-head text-[clamp(2.25rem,5vw,4.5rem)] uppercase leading-[0.85] text-chalk">
              {activeReason.title}
            </h3>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/80 font-mono sm:text-lg">{activeReason.description}</p>
            <div className="mt-10 flex items-center gap-4">
              <span className="font-chalk text-2xl text-mustard">Starts with an idea.</span>
              <Sparkles className="text-mustard" size={24} aria-hidden="true" />
            </div>
          </motion.div>

          {/* Shared Carousel */}
          <motion.div
            onWheel={handleCarouselWheel}
            className="relative flex min-h-120 flex-col items-center justify-center overflow-hidden border-y border-dashed border-line py-8"
            style={{ overscrollBehavior: "contain" }}
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex w-full flex-col items-center gap-5">
              {[-1, 0, 1].map((offset) => {
                const index = (activeIndex + offset + reasons.length) % reasons.length;
                const reason = reasons[index];

                return (
                  <ReasonCard
                    key={`${reason.number}-${offset}`}
                    reason={reason}
                    active={offset === 0}
                    onClick={() => {
                      activeIndexRef.current = index;
                      setActiveIndex(index);
                    }}
                  />
                );
              })}
            </div>
            <div className="absolute right-3 top-1/2 flex -translate-y-1/2 flex-col gap-2" aria-label="Choose a reason">
              {reasons.map((reason, index) => (
                <button
                  key={reason.number}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to reason ${reason.number}`}
                  aria-pressed={activeIndex === index}
                  className={`size-2 rounded-full transition-colors ${activeIndex === index ? "bg-mustard" : "bg-chalk-dim hover:bg-mustard"}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto mt-12 max-w-2xl borderbgimageyellow px-6 py-5 text-center sm:mt-16 sm:px-10 border relative"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="absolute left-0 top-0 w-auto h-full  lg:block md:block  hidden" aria-hidden="true">
            <img src="/homepage/section 6/Rectangle 16.png" alt="" className="w-18 ml-2" />
          </span>
          <p className="font-chalk text-2xl uppercase leading-tight text-chalk sm:text-3xl">
            One team. One complete cycle.
            <br />
            From the first <span className="text-mustard">idea</span> to the final <span className="text-mustard">impact.</span>
          </p>
          <span className="absolute right-0 top-0 w-auto h-full md:block lg:block hidden " aria-hidden="true">
            <img src="/homepage/section 6/Rectangle 18.png" alt="" className="w-16 " />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
