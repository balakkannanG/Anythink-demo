"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";

const experiences = [
  {
    title: "Saree Draping Workshop",
    city: "Delhi",
    image: "/memories/memory-05.jpg",
     icon: "/work/section 3/Rectangle 5.png",
    alt: "Saree draping workshop experience",
  },
  {
    title: "Chocolate Making Workshop",
    city: "Kolkata",
    image: "/memories/memory-06.jpg",
    icon: "/work/section 3/Rectangle 6.png",
    alt: "Chocolate making workshop experience",
  },
  {
    title: "Smartphone Photography Workshop",
    city: "Delhi",
    image: "/memories/memory-07.jpg",
    icon: "/work/section 3/Rectangle 7.png",
    alt: "Smartphone photography workshop experience",
  },
  {
    title: "Father's Day Out",
    city: "Bengaluru",
    image: "/memories/memory-08.jpg",
    icon: "/work/section 3/Rectangle 8.png",
    alt: "Father's Day family experience",
  },
] as const;

export function RetailCustomerExperiencesSection() {
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
          <div className="absolute top-0 left-0 hidden text-left sm:block">
            <p className="font-mono text-sm uppercase tracking-[0.15em] text-chalk">Titan</p>
            <p className="font-sans text-4xl leading-[0.72] text-chalk">encircle</p>
            <p className="mt-2 font-mono text-[0.45rem] uppercase tracking-[0.25em] text-chalk-faint">People · Planet · Purpose</p>
          </div>
          <Image
            src="/homepage/anythinkmedialogobl.svg"
            alt="anyTHINK Media and Events"
            width={170}
            height={74}
            className="absolute top-0 right-0 hidden h-auto w-32 sm:block"
          />
          <p className="font-head text-[clamp(1.8rem,4vw,3.5rem)] uppercase leading-none text-chalk">Retail customer</p>
          <h2 className="mt-2 font-head text-[clamp(2.8rem,7vw,6rem)] uppercase leading-[0.8] text-mustard">
             <span className="block max-sm:inline md:inline-flex text-mustard ">
                <span className="inline-flex text-mustard "><img src="/homepage/leftsidethreeline.png" alt="leftsidethreeline" className=" w-10 max-sm:hidden mt-2" /></span></span>  Experiences<span className="inline-flex text-mustard "><img src="/homepage/rightsidethreeline.png" alt="rightsidethreeline" className=" w-10 max-sm:w-10 max-sm:hidden mt-2" /></span> <span className="block text-mustard  "><img src="/homepage/underline.png" alt="underline" className=" w-60 max-sm:mx-auto max-md:w-40 max-sm:w-60 mx-auto" /></span>
          </h2>
          <p className="mt-5 font-mono text-[clamp(1rem,2.5vw,1.7rem)] uppercase tracking-[0.35em] text-white/80">Across India</p>
        </motion.header>

        <motion.div
          className="mx-auto mt-14 grid max-w-5xl sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.title}
              className={`group px-4 py-5 sm:px-6 lg:px-5 max-md:border-none! ${index > 0 ? " borderbgimageleft  sm:border-l" : ""}`}
              initial={{ opacity: 0, y: 16 }}

              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative rotate-1 border-4 borderbgimage bg-board p-1 shadow-[0_0_0_1px_rgb(243_239_226/0.2)] transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.02]">
                <span className="absolute -top-4 left-1/2 z-10 h-8 w-16 -translate-x-1/2 -rotate-2 bg-mustard/70" aria-hidden="true" />
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={experience.image}
                    alt={experience.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 42vw, 85vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="mt-6 flex items-start justify-center gap-3 text-center">
                <img
                  src={experience.icon}
                  alt={experience.title}
                  className="mt-1 h-auto w-26 shrink-0 object-contain"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-chalk text-2xl uppercase leading-[0.9] text-mustard sm:text-[1.55rem]">
                    {experience.title}
                  </h3>
                  <p className="mt-3 font-mono text-xl text-white/80">
                    <span className="font-chalk text-sky-300">{experience.city}</span>
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 flex flex-col justify-between gap-5 sm:mt-16 sm:flex-row sm:items-end"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-chalk text-2xl leading-[0.9] text-white/80">
            Creating experiences.
            <span className="block text-mustard">Building relationships.</span>
          </p>
          <div className="hidden h-10 flex-1 border-b border-dashed borderbgimagebottom sm:ml-8 sm:block" aria-hidden="true" />
        </motion.div>
      </div>
    </motion.section>
  );
}