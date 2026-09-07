"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences: readonly { title: string; client: string; image: string; alt: string; icon: string }[] = [
  {
    title: "Drum Circle",
    client: "Cisco",
    image: "/memories/memory-10.jpg",
    alt: "Drum circle employee engagement workshop",
    icon: "/work/section 4/Rectangle 5.png",
  },
  {
    title: "Boom Wackers",
    client: "Cisco",
    image: "/memories/memory-11.jpg",
    alt: "Boom wackers employee engagement workshop",
    icon: "/work/section 4/Rectangle 6.png",
  },
  {
    title: "Painting Workshop",
    client: "Tessel",
    image: "/memories/memory-12.jpg",
    alt: "Painting workshop employee engagement experience",
    icon: "/work/section 4/Rectangle 7.png",
  },
  {
    title: "Neon Dance Workshop",
    client: "Tessel",
    image: "/memories/memory-13.jpg",
    alt: "Neon dance employee engagement workshop",
    icon: "/work/section 4/Rectangle 9.png",
  },
  {
    title: "Employee Engagement Games",
    client: "Tru Global",
    image: "/memories/memory-14.jpg",
    alt: "Employee engagement games",
    icon: "/work/section 4/Rectangle 10.png",
  },
] as const;

export function EmployeeEngagementSection() {
  return (
    <motion.section
      className="overflow-hidden border-y border-line bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="site-rail py-16 sm:py-24">
        <motion.header
          className="relative mx-auto max-w-5xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/homepage/anythinkmedialogobl.svg"
            alt="anyTHINK Media and Events"
            width={220}
            height={95}
            className="absolute top-0 -left-20 hidden h-auto w-40 sm:block"
          />
          <p className="font-head text-[clamp(2.4rem,4vw,4.5rem)] uppercase leading-[0.85] text-chalk">  <span className="block max-sm:inline md:inline-flex text-mustard ">
                <span className="inline-flex text-mustard "><img src="/homepage/leftsidethreeline.png" alt="leftsidethreeline" className=" w-10 max-sm:hidden mt-2" /></span></span>Employee engagement <span className="inline-flex text-mustard "><img src="/homepage/rightsidethreeline.png" alt="rightsidethreeline" className=" w-10 max-sm:w-10 max-sm:hidden mt-2" /></span> <span className="block text-mustard  "><img src="/homepage/underline.png" alt="underline" className=" w-60 max-sm:mx-auto max-md:w-40 max-sm:w-60 mx-auto" /></span></p>
          <p className="mt-6 font-chalk text-3xl leading-[0.9] text-white/80 sm:text-4xl">
            Engaged teams. Inspired people.
            <span className="block text-mustard">Stronger together.</span>
          </p>
        </motion.header>

        <motion.div
          className="mx-auto mt-14 grid max-w-5xl gap-y-12 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-6 lg:gap-x-8 lg:gap-y-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {experiences.map((experience, index) => {
            const isBottomRow = index > 2;

            return (
              <motion.article
                key={experience.title}
                className={`group px-4 sm:px-3 lg:col-span-2 ${index === 3 ? "lg:col-start-2" : ""} ${index === 4 ? "lg:col-start-4" : ""} ${isBottomRow ? "lg:border-t lg:border-dashed lg:border-line lg:pt-10" : ""}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative -rotate-1 border-4 border-chalk bg-board p-1 shadow-[0_0_0_1px_rgb(243_239_226/0.2)] transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.02]">
                  <span className="absolute -top-4 left-1/2 z-10 h-8 w-16 -translate-x-1/2 rotate-2 bg-mustard/70" aria-hidden="true" />
                  <div className="relative aspect-[1.7] overflow-hidden">
                    <Image
                      src={experience.image}
                      alt={experience.alt}
                      fill
                      sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 88vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="mt-6 flex items-start justify-center gap-3 text-center">
                  <img 
                    src={experience.icon}
                    alt={experience.title}
                    className="mt-1 shrink-0 w-20 h-auto object-contain"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-chalk text-2xl uppercase leading-[0.9] text-mustard sm:text-[1.65rem]">{experience.title}</h3>
                    <p className="mt-3 font-mono text-xl text-white/80 ">
                      for <span className="text-sky-300 font-chalk">{experience.client}</span>
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.p
          className="mt-14 text-center font-mono text-[0.62rem] uppercase tracking-[0.35em] text-white/80 sm:mt-20 text-sm"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Experiences that engage. Moments that matter.
        </motion.p>
      </div>
    </motion.section>
  );
}