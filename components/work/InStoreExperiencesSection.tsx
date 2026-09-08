"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";

const experiences = [
  {
    title: "Macha Making Workshop",
    client: "Mia",
    image: "/memories/memory-04.jpg",
    icon: "/work/section 2/Rectangle 7.png",
    alt: "Macha making workshop experience",
  },
  {
    title: "Pizza Making Workshop",
    client: "Titan",
    image: "/memories/memory-09.jpg",
    icon: "/work/section 2/Rectangle 8.png",
    alt: "Pizza making workshop experience",
  },
  {
    title: "Stand Up Comedy",
    client: "Tanishq Pune",
    image: "/memories/memory-16.jpg",   
    icon: "/work/section 2/Rectangle 9.png",  
    alt: "Stand up comedy experience",
  },
  {
    title: "Violin Experience",
    client: "Helios",
    image: "/memories/memory-22.jpg",
    icon: "/work/section 2/Rectangle 10.png",
    alt: "Violin experience in a store",
  },
] as const;

export function InStoreExperiencesSection() {
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
          className="relative mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/homepage/anythinkmedialogobl.svg"
            alt="anyTHINK Media and Events"
            width={170}
            height={74}
            className="absolute -top-2 right-0 hidden h-auto w-32 sm:block"
          />
          <p className="font-head text-[clamp(2rem,4vw,3.5rem)] uppercase leading-none text-chalk">In store</p>
          <h2 className="mt-2 font-head text-[clamp(3rem,7vw,6rem)] uppercase leading-[0.8] text-mustard">
           <span className="block max-sm:inline md:inline-flex text-mustard ">
                <span className="inline-flex text-mustard "><img src="/homepage/leftsidethreeline.png" alt="leftsidethreeline" className=" w-10 max-sm:hidden mt-2" /></span></span>  Experiences<span className="inline-flex text-mustard "><img src="/homepage/rightsidethreeline.png" alt="rightsidethreeline" className=" w-10 max-sm:w-10 max-sm:hidden mt-2" /></span> <span className="block text-mustard  "><img src="/homepage/underline.png" alt="underline" className=" w-60 max-sm:mx-auto max-md:w-40 max-sm:w-60 mx-auto" /></span>
          </h2>
          <p className="mt-6 font-chalk text-3xl leading-[0.9] text-white/80 sm:text-4xl">
            More than a store
            <span className="block text-mustard">it&apos;s an experience.</span>
          </p>
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
              className={`group px-4 py-5 sm:px-6 lg:px-5 max-md:border-none! ${index > 0 ? "border-dashed borderbgimageleft  sm:border-l" : ""}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
                
              <div className="relative -rotate-1 border-4 borderbgimage bg-board p-1 shadow-[0_0_0_1px_rgb(243_239_226/0.2)] transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.02]">
                <span className="absolute -top-4 left-1/2 z-10 h-8 w-16 -translate-x-1/2 rotate-2 bg-mustard/70" aria-hidden="true" />
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
              <div className="mt-6 flex items-start justify-center gap-1 text-center">
                <img
                  src={experience.icon}
                  alt={experience.title}
                  className="mt-1 h-auto w-24 shrink-0 object-contain"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-chalk text-2xl uppercase leading-[0.9] text-mustard sm:text-[1.65rem]">
                    {experience.title}
                  </h3>
                  <p className="mt-3 font-mono text-xl text-white/80">
                    for <span className="font-chalk text-sky-300">{experience.client}</span>
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.p
          className="mt-12 text-center font-mono text-xl text-white/80 sm:mt-16 sm:text-sm"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          About experiences.
          <span className="mx-5 text-mustard">|</span>
          Creating memories that last.
        </motion.p>
      </div>
    </motion.section>
  );
}