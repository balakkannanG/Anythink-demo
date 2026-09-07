"use client";

import { motion } from "framer-motion";
import { AboutIntro } from "@/components/about/AboutIntro";
import { ActionLink, SectionLabel } from "@/components/editorial";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutMethod } from "@/components/about/AboutMethod";
import { WhyAnythink } from "@/components/homepage/WhyAnythink";
import { MeetOurTeam } from "@/components/homepage/MeetOurTeam";
import { MemoryGallery } from "@/components/homepage/MemoryGallery";
import { CompanyLogos } from "@/components/homepage/CompanyLogos";
import { Testimonials } from "@/components/homepage/Testimonials";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />

      <div className="border-y border-line bg-board">
        <div className="site-rail grid gap-6 py-7 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-10">
          <p className="font-chalk text-2xl text-chalk">We think beyond it.</p>
          <div className="h-px borderbgimage" aria-hidden="true" />
          <p className="max-w-sm text-right font-mono text-[0.58rem] uppercase leading-relaxed tracking-[0.16em] text-white ">
            Good ideas need room to move. That&apos;s where we come in.
          </p>
        </div>
      </div>

      <AboutMethod />
      <WhyAnythink />
      <MeetOurTeam />
      <MemoryGallery />
      <CompanyLogos />
      <Testimonials />

      <motion.section
        className="border-t border-line bg-board"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="site-rail flex flex-col justify-between gap-8 py-14 sm:flex-row sm:items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* <SectionLabel>Ready when you are</SectionLabel> */}
            <p className="mt-4 font-chalk text-3xl text-chalk">Let&apos;s make what&apos;s next.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <ActionLink href="/contact" variant="plain">
              Start a conversation
            </ActionLink>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
