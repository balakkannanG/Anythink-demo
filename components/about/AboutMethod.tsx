"use client";

import { motion } from "framer-motion";
import { ChalkHeading, SectionLabel } from "@/components/editorial";
import { methodItems } from "@/lib/content";

export function AboutMethod() {
  return (
    <motion.section
      className="site-rail grid gap-14 py-20 sm:py-28 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20"
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
        {/* <SectionLabel>The way we work</SectionLabel> */}
        <ChalkHeading size="section" className="mt-7 max-w-md max-sm:text-center text-[clamp(4rem,6vw,5rem)] uppercase leading-[0.88] text-chalk">
          A team for <span className="text-mustard">what&apos;s next.</span>
        </ChalkHeading>
        <motion.p
          className="mt-8 max-w-sm text-sm  text-white/80 font-mono"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Ideas are only the beginning. We find the sharpest path from a spark to something people can see, hear, feel and remember.
        </motion.p>
        <motion.p
          className="mt-12 font-chalk text-2xl text-white/80"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          strategy → story → experience
        </motion.p>
      </motion.div>
      <motion.div
        className="border-t border-line"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        {methodItems.map((item, index) => (
          <motion.div
            key={item.number}
            className="grid gap-4 border-b border-dashed border-line py-6 sm:grid-cols-[70px_180px_1fr_auto] sm:items-center sm:gap-8 max-sm:text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-marker text-3xl text-mustard">{item.number}</span>
            <h2 className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-chalk">{item.title}</h2>
            <p className="max-w-xl text-sm leading-relaxed font-mono text-white/80">{item.description}</p>
            <span className="font-chalk text-2xl text-chalk-faint" aria-hidden="true">{item.number === "01" ? "↗" : item.number === "02" ? "✦" : item.number === "03" ? "○" : "☼"}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}