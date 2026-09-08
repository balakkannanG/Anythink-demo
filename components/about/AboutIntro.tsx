"use client";

import { motion } from "framer-motion";
import { ActionLink, ChalkHeading, SectionLabel, StoryMap } from "@/components/editorial";

export function AboutIntro() {
  return (
    <motion.section
      className="site-rail grid gap-16 py-20 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      
      >
        {/* <SectionLabel>anyTHINK / 01</SectionLabel> */}
        <ChalkHeading as="h1" size="display" className="mt-10 lg:max-w-sm max-sm:text-center text-[clamp(4rem,6vw,5rem)] uppercase leading-[0.88]  text-chalk  max-md:w-md max-sm:w-full">
          Who
          <span className="block max-sm:inline text-mustard"> we<span className="inline-flex text-mustard text-center"><img src="/homepage/rightsidethreeline.png" alt="underline" className=" w-12 max-sm:hidden mt-2 max-md:w-14 " /></span> </span>
           <span className="block text-mustard  "><img src="/homepage/underline.png" alt="underline" className=" w-60 max-md:mx-auto  max-md:w-40 max-sm:w-60" /></span>
          are
        </ChalkHeading>
        <motion.div
          className="mt-10 border-l border-mustard pl-5 max-md:mx-auto max-md:text-center"
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm leading-relaxed text-white/80 font-mono">
            We are <span className="text-mustard">Anythink Media &amp; Events.</span>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/80 font-mono">A creative media and experiences company built on one simple belief:</p>
          <p className="mt-4 font-chalk text-3xl text-chalk">Anythink is possible.</p>
        </motion.div>
        <motion.p
          className="mt-10 max-w-lg text-sm leading-relaxed text-white/80 font-mono max-md:text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          We bring together strategy, creativity, media, content and experiences to help brands connect with people in meaningful ways.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          className=" w-full flex max-md:justify-center"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <ActionLink href="/services" variant="plain" className="mt-10">
            See what we bring
          </ActionLink>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex flex-col justify-center gap-10"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <StoryMap />
        <motion.p
          className="self-end font-chalk text-2xl text-mustard"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          from what if? to what&apos;s next.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}