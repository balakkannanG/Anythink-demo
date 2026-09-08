"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  CircleUserRound,
  Mic2,
  Radio,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ProfileIcon = LucideIcon | string;

const profileHighlights: readonly { icon: ProfileIcon; text: string }[] = [
  {
    icon: '/homepage/section 5/Layer 28.png',
    text: "With over 20 years of experience, RJ Rubina is a distinguished Radio Host, Storyteller, Emcee, Podcaster, and Voice-over Artist. Known as the queen of radio in Bangalore, she has been the charismatic host of the highly successful show ‘Thoda Personal’ on 93.5 Red FM for over 8 years.",
  },
  {
    icon: '/homepage/section 5/Layer 29.png',
    text: "Her extensive career includes work at top radio stations in India and Dubai, as well as in media, marketing, consultancy, and events. An innovative and creative communication expert, RJ Rubina has received numerous awards for her contributions to the field, including the prestigious Best Talk Show Host award from the New York Festivals Radio Awards and KWAA award for excellence in Radio.",
  },
  {
    icon: '/homepage/section 5/Layer 30.png',
    text: "RJ Rubina’s expertise has not only built a popular show but also created a platform where people feel comfortable sharing their true selves and stories. Her unfailing passion and love for her work led her to found ANYTHINK, where her dedication to perfection transforms every event or project into something magical.",
  },
  {
    icon: '/homepage/section 5/Layer 31.png',
    text: "In addition to her radio career, RJ Rubina is renowned for creating and curating innovative concepts for her clients. Her involvement, eye for detail, and love for her work enable her to turn ideas into unforgettable experiences.",
  },
] as const;

export function MeetOurTeam() {
  return (
    <section className="overflow-hidden border-y border-line bg-black">
      <motion.div
        className="site-rail py-16 sm:py-24"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.header
          className="flex items-start justify-between gap-8 border-t border-line pt-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <h2 className="font-head text-[clamp(4rem,6vw,5rem)] uppercase leading-[0.8] text-chalk max-sm:text-center">
              Meet our <span className="text-mustard">team</span>
            </h2>
            <motion.div
              className="mt-5 h-auto w-100 max-sm:w-auto max-w-full max-sm:ml-6 -rotate-1 "
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0 }}
              aria-hidden="true"
            >     <img src="/homepage/section 5/Layer 26.png" alt="" className="w-auto h-full object-cover mx-auto" /> 
             </motion.div>
          </div>
          <Image
            src="/homepage/anythinkmedialogobl.svg"
            alt="anyTHINK Media and Events"
            width={220}
            height={95}
            className="hidden h-auto w-40 sm:block"
          />
        </motion.header>

        <div className="mt-12 grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-8 flex items-center max-md:justify-center gap-5">
              <h3 className="font-chalk text-4xl uppercase leading-border text-mustard sm:text-5xl text-center">
                Rubina Patel
              </h3>
              <span className="h-8 w-px bg-white/80" aria-hidden="true" />
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-white/80">Founder</p>
            </div>

            <div className="space-y-0">
              {profileHighlights.map(({ icon, text }, index) => {
                const Icon = typeof icon === "string" ? null : icon;

                return (
                <motion.div
                  key={text.slice(0, 24)}
                  className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-dashed border-line py-5 first:border-t"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: 0.2 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center justify-center pt-1 text-mustard">
                    {typeof icon === "string" ? (
                      <Image src={icon} alt="" width={50 } height={50} aria-hidden="true" />
                    ) : Icon ? (
                      <Icon size={31} strokeWidth={1.2} aria-hidden="true" />
                    ) : null}
                  </div>
                  <p className="font-mono text-[16px] leading-[1.6] text-white/80 sm:text-[0.95rem]">{text}</p>
                </motion.div>
                );
              })}
            </div>

            <motion.p
              className="mt-7 font-chalk text-3xl text-mustard sm:text-4xl max-sm:text-center"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              Anythink into everything.
              <span className="ml-3 text-chalk">♡</span>
            </motion.p>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-120   p-3 sm:p-5"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="absolute z-3 w-full top-0 left-0  border-chalk" aria-hidden="true"> <img src="/homepage/section 5/Layer 27.png" alt="" className="" /></span>
            {/* <div className="absolute -top-4 left-1/2 h-8 w-28 -translate-x-1/2 -rotate-2 bg-mustard/80" aria-hidden="true" /> */}
            <div className="relative flex aspect-[0.8] items-center justify-center overflow-hidden bg-black">
              <Image
                src="/homepage/robina.jpg"
                alt="Anythink team member illustration"
                fill
                sizes="(min-width: 1024px) 40vw, 120vw"
                className="object-cover rounded-lg opacity-90 pl-0 pr-10 pt-2 pb-1 max-sm:pr-6"
              />
              {/* <Image
                src="/homepage/section 5/Layer 27-1.png"
                alt="Anythink team member illustration"
                fill
                sizes="(min-width: 1024px) 40vw, 120vw"
                className="object-cover rounded-lg opacity-90"
              /> */}
              <span className="absolute right-4 bottom-4 font-marker text-4xl text-mustard" aria-hidden="true">✦</span>
            </div>
              <div className="mb-8 flex items-center gap-5 mt-10 max-md:block hidden ">
              <h3 className="font-chalk text-4xl uppercase leading-none text-mustard sm:text-5xl text-center">
                Rubina Patel
              </h3>
              <span className="h-8 w-px bg-white/80" aria-hidden="true" />
               <img src="/homepage/section 5/Layer 26.png" alt="" className="w-auto h-full object-cover mx-auto" /> 
              {/* <p className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-white/80">Founder</p> */}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
