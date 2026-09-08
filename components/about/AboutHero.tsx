"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutHero() {
  return (
    <motion.section
      aria-labelledby="about-hero-title"
      className="chalkboard overflow-hidden border-b border-line"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="site-rail flex flex-col items-center px-0 py-12 text-center sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -12 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/homepage/anythinkmedialogo.svg"
            alt="Anythink Media and Events"
            width={400}
            height={100}
            priority
            className=" w-full lg:w-100 sm:w-50 md:w-full"
          />
        </motion.div>

        <motion.p
          className="mt-10 max-w-4xl font-head text-[clamp(1.25rem,3vw,2.8rem)]  uppercase leading-none tracking-[0.04em] text-mustard  flex  max-sm:inline justify-center items-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex text-mustard text-center"><img src="/homepage/leftsidethreeline.png" alt="underline" className=" w-12 max-sm:hidden mt-2 max-md:w-14 " /></span>
          Ideas <span className="text-chalk md:block max-sm:block">are only the beginning.</span><span className="inline-flex text-mustard "><img src="/homepage/rightsidethreeline.png" alt="underline" className=" w-12 max-sm:hidden mt-2 max-md:w-14 " /></span>
        </motion.p>
        <motion.span
          className="mt-5 font-chalk text-3xl text-mustard flex justify-center items-center gap-2"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
                 <span className="inline-flex text-mustard borderbgimagetop w-80 "></span> ✦ <span className="inline-flex text-mustard borderbgimagetop w-80 "></span>
        </motion.span>
        <motion.h1
          id="about-hero-title"
          className="mt-5 max-w-4xl font-head text-[clamp(2.25rem,6vw,5.5rem)] uppercase leading-[0.9] text-chalk"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Here&apos;s what we
          <span className="block mt-2 text-mustard">turned them into.</span>
        </motion.h1>

        <motion.div
          className="relative mt-12 w-full max-w-6xl px-2 sm:mt-16 sm:px-8"
          aria-hidden="true"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
        <img src="/about/Rectangle 1.png" alt="" />
        </motion.div>

        <motion.p
          className="mt-5 max-w-2xl font-mono text-[0.68rem] uppercase tracking-[0.32em] text-white/80 sm:mt-8 sm:text-xs"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Turning <span className="text-mustard font-mono">&ldquo;what if?&rdquo;</span> into <span className="text-mustard">&ldquo;what&apos;s next.&rdquo;</span>
        </motion.p>
      </div>
    </motion.section>
  );
}