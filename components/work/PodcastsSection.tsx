"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const podcasts = [
  {
    title: "Brick by Brick",
    detail: "The official podcast for Prestige Group",
    image: "/memories/memory-04.jpg",
    alt: "Podcast production moment",
  },
  {
    title: "The Last Chapter",
    detail: "Podcast for seniors by Primus Senior Living",
    image: "/memories/memory-09.jpg",
    alt: "Conversation being recorded in a studio",
  },
  {
    title: "Eco Scapes",
    detail: "With Suraj Nayak for Eco Scapes",
    image: "/memories/memory-16.jpg",
    alt: "Speaker at an outdoor podcast recording",
  },
  {
    title: "Studio 1886",
    detail: "Internal employee podcast for Bosch",
    image: "/memories/memory-22.jpg",
    alt: "Podcast guest in conversation",
  },
  {
    title: "Inspire & Ignite",
    detail: "Conversations that empower with Uzma Irfan",
    image: "/memories/memory-25.jpg",
    alt: "Podcast conversation between two guests",
  },
] as const;

export function PodcastsSection() {
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
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.35em] text-WHITE/80">Anythink media & events</p>
          <h2 className="mt-4 font-head text-[clamp(3.25rem,8vw,6.5rem)] uppercase leading-[0.82] text-mustard">
           <span className="block max-sm:inline md:inline-flex text-mustard ">
                <span className="inline-flex text-mustard "><img src="/homepage/leftsidethreeline.png" alt="leftsidethreeline" className=" w-10 max-sm:hidden mt-2" /></span></span> Podcasts<span className="inline-flex text-mustard "><img src="/homepage/rightsidethreeline.png" alt="rightsidethreeline" className=" w-10 max-sm:w-10 max-sm:hidden mt-2" /></span>
          </h2>
          <p className="mt-5 font-chalk text-2xl leading-tight text-white/80 sm:text-3xl">
            Stories that inform. Conversations that inspire.
            <span className="block font-chalk  text-mustard">Podcasts that leave a lasting impact.</span>
          </p>
        </motion.header>

        <motion.div
          className="mx-auto mt-14 grid max-w-5xl gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-6 lg:gap-x-10 lg:gap-y-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          
          {podcasts.map((podcast, index) => (
            <motion.article
              key={podcast.title}
              className={`group lg:col-span-2 ${index === 3 ? "lg:col-start-2" : ""} ${index === 4 ? "lg:col-start-4" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative -rotate-1 border-4 borderbgimage bg-board p-1 shadow-[0_0_0_1px_rgb(243_239_226/0.2)] transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.015]">
                <div className="relative aspect-[1.65] overflow-hidden">
                  <Image
                    src={podcast.image}
                    alt={podcast.alt}
                    fill
                    sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 92vw"
                    className="object-cover grayscale-[0.2] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="mt-5 flex gap-4">
                <img 
                  src="/work/section 1/Layer 3.png" 
                  alt="Podcast"
                  className="mt-1 shrink-0 w-[80px] h-auto object-contain"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-chalk text-2xl uppercase leading-none text-mustard sm:text-3xl">{podcast.title}</h3>
                  <p className="mt-2 max-w-xs font-mono text-sm leading-tight text-white/80">{podcast.detail}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
          <div className="relative w-full h-auto flex items-center justify-center mt-8 sm:mt-12 lg:mt-0">
            <img 
              src="/work/section 1/Layer 2.png" 
              alt="Podcasts background" 
              className="w-60 max-w-xs sm:max-w-md lg:max-w-none h-auto object-contain lg:absolute md:absolute md:right-0 lg:left-0 -top-70" 
            />
          </div>

        <motion.p
          className="mt-16 text-center font-mono text-[0.80rem] uppercase tracking-[0.4em] text-white/80 sm:mt-20"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Real voices. Real impact. Remarkable stories.
        </motion.p>
      </div>
    </motion.section>
  );
}