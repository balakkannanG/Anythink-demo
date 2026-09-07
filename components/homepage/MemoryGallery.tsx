"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const memories = [
  { file: "/memories/memory-01.jpg", label: "the people" },
  { file: "/memories/memory-02.jpg", label: "the moments" },
  { file: "/memories/memory-03.jpg", label: "the stories" },
  { file: "/memories/memory-04.jpg", label: "the celebrations" },
  { file: "/memories/memory-05.jpg", label: "the journey" },
  { file: "/memories/memory-06.jpg", label: "the room" },
  { file: "/memories/memory-07.jpg", label: "the magic" },
  { file: "/memories/memory-08.jpg", label: "the laughter" },
  { file: "/memories/memory-09.jpg", label: "the milestones" },
  { file: "/memories/memory-10.jpg", label: "the next chapter" },
  { file: "/memories/memory-11.jpg", label: "the connections" },
  { file: "/memories/memory-12.jpg", label: "the memories" },
  { file: "/memories/memory-13.jpg", label: "the good times" },
  { file: "/memories/memory-14.jpg", label: "the details" },
  { file: "/memories/memory-15.jpg", label: "the unforgettable" },
  { file: "/memories/memory-16.jpg", label: "the unforgettable" },
  { file: "/memories/memory-17.jpg", label: "the unforgettable" },
  { file: "/memories/memory-18.jpg", label: "the unforgettable" },
  { file: "/memories/memory-19.jpg", label: "the unforgettable" },
  { file: "/memories/memory-20.jpg", label: "the unforgettable" },
  { file: "/memories/memory-21.jpg", label: "the unforgettable" },
  { file: "/memories/memory-22.jpg", label: "the unforgettable" },
  { file: "/memories/memory-23.jpg", label: "the unforgettable" },
  { file: "/memories/memory-24.jpg", label: "the unforgettable" },
  { file: "/memories/memory-25.jpg", label: "the unforgettable" },
];

export function MemoryGallery() {
  return (
    <section aria-labelledby="memories-title" className="border-b border-line bg-ink site-rail ">
      <div className="grid">
        <motion.div
          className="relative mb-10 flex flex-col justify-between overflow-hidden border-b border-line lg:border-b-0"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative -right-292 top-6 size-16 rotate-12 borderbgimageyellow  " aria-hidden="true" />
          <div className="relative z-10 flex flex-col gap-2 borderbgimageyellow p-4 sm:p-6 lg:p-8">
            {/* <motion.span
              className="w-full font-mono text-[0.62rem] uppercase tracking-[0.28em] text-mustard"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              ANYTHINK / 2005 - 2025
            </motion.span> */}
            <motion.h2
              id="memories-title"
              className="mt-14 max-w-xl font-head flex items-center text-[clamp(3.6rem,7vw,7.5rem)] uppercase leading-[0.8]  text-chalk max-sm:text-center lg:text-start"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex text-mustard "><img src="/homepage/section 6/Rectangle 6.png" alt="underline" className=" w-18 max-sm:hidden mt-2 max-md:w-14 " /></span><span className="text-mustard">20</span>
              years!<span className="inline-flex text-mustard "><img src="/homepage/section 6/Rectangle 7.png" alt="underline" className=" w-18 max-sm:hidden mt-2 max-md:w-14 " /></span>
            </motion.h2>
            <motion.p
              className="mt-8 w-full font-head text-[clamp(2.3rem,4vw,4.8rem)] uppercase leading-[0.82] text-chalk max-sm:text-center"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              Countless <span className="text-mustard">memories.</span>
            </motion.p>
          </div>

          <motion.div
            className="relative z-10 mt-10 borderbgimageyellow p-6 sm:p-8"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="absolute top-0 left-5 font-head text-5xl leading-none text-mustard">“</span>
            <p className="font-chalk text-2xl leading-tight text-chalk-dim">Two decades of partnerships, performances, people and unforgettable moments.</p>
            <p className="mt-5 font-chalk text-2xl leading-tight text-mustard">Here&apos;s to the journey we&apos;ve shared together.</p>
            <span className="absolute right-4 -bottom-7 font-head text-5xl leading-none text-mustard">”</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative borderbgimage p-4 sm:p-8 lg:p-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute right-8 top-3 hidden rotate-[14deg] font-chalk text-3xl text-chalk-dim sm:block">a little look back</div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 xl:grid-cols-5">
            {memories.map((memory, index) => (
              <motion.figure
                key={memory.file}
                className={`group relative aspect-square overflow-visible border border-line-strong bg-panel p-2 transition-transform duration-300 hover:z-10 hover:scale-[1.04] ${index % 3 === 0 ? "rotate-[-1.5deg]" : index % 3 === 1 ? "rotate-[1deg]" : "rotate-[-0.5deg]"}`}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="absolute left-1/2 top-0 z-10 h-5 w-16 -translate-x-1/2 -translate-y-1/2 rotate-[-3deg] bg-mustard/75" aria-hidden="true" />
                <Image
                  src={memory.file}
                  alt={`${memory.label} from Anythink's journey`}
                  fill
                  sizes="(min-width: 1280px) 14vw, (min-width: 640px) 22vw, 43vw"
                  className="object-cover grayscale transition-[filter] duration-300 group-hover:grayscale-0 max-sm:grayscale-0 borderbgimage"
                  onError={(event) => {
                    event.currentTarget.src = "/images/anythink-cover-slide.jpeg";
                  }}
                />
                <figcaption className="absolute right-2 bottom-2 left-2 bg-ink/75 px-2 py-1 font-mono text-[0.52rem] uppercase tracking-[0.15em] text-chalk opacity-0 transition-opacity group-hover:opacity-100">
                  {memory.label}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="my-5 flex items-center justify-center gap-5 text-mustard"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <span className="text-5xl">☆</span>
          <span className="h-px w-24 bg-line-strong" />
          <span className="font-chalk text-3xl">since 2005</span>
        </motion.div>
      </div>
    </section>
  );
}