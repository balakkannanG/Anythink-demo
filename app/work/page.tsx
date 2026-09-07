"use client";

import { motion } from "framer-motion";
import { ChalkHeading, SectionLabel } from "@/components/editorial";
import { CaseStudy } from "@/components/work/CaseStudy";
import { EmployeeEngagementSection } from "@/components/work/EmployeeEngagementSection";
import { InStoreExperiencesSection } from "@/components/work/InStoreExperiencesSection";
import { PodcastsSection } from "@/components/work/PodcastsSection";
import { RetailCustomerExperiencesSection } from "@/components/work/RetailCustomerExperiencesSection";
import { caseStudies } from "@/lib/content";

export default function WorkPage() {
  return (
    <>
      <motion.section
        className="site-rail grid gap-14 py-20 sm:py-28 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-20 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* <SectionLabel>03 / our work</SectionLabel> */}
          </motion.div>
          <ChalkHeading as="h2" size="display" className="mt-10 max-w-md max-md:max-w-full  max-md:text-center max-sm:text-center">
            Stories that <span className="flex text-mustard lg:text-8xl text-center max-sm:justify-center  ">inspire.<span className="inline-flex text-mustard "><img src="/homepage/rightsidethreeline.png" alt="underline" className=" w-10 max-sm:hidden mt-2 max-md:w-10 " /></span></span>
            <span className="block text-mustard  "><img src="/homepage/underline.png" alt="underline" className=" w-full max-sm:mx-auto max-md:w-40 max-sm:w-60" /></span>
          </ChalkHeading>
          <motion.p
            className="mt-10 max-w-md max-md:max-w-full text-base leading-relaxed text-white/80 text-mono sm:text-lg max-md:text-center max-sm:text-center "
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            Connections that last. Impact that matters. A selection of work shaped with our partners from the first idea to what came next.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="flex items-center gap-5 border-b border-line pb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-chalk text-2xl text-mustard">made together</span>
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src="/work/flow.png" alt="Process" className="mt-7 min-h-auto w-full object-contain" />
          </motion.div>
        </motion.div>
      </motion.section>

      <section className="site-rail">
        {caseStudies.map((caseStudy) => (
          <CaseStudy key={caseStudy.id} caseStudy={caseStudy} />
        ))}
      </section>

      <PodcastsSection />

      <InStoreExperiencesSection />

      <RetailCustomerExperiencesSection />

      <EmployeeEngagementSection />

      {/* <section className="border-t border-line paper-grain">
        <div className="site-rail flex flex-col justify-between gap-8 py-20 sm:flex-row sm:items-end sm:py-24">
          <div>
            <SectionLabel>Keep exploring</SectionLabel>
            <ChalkHeading size="card" className="mt-7 max-w-md">
              Your next story <span className="text-mustard">could start here.</span>
            </ChalkHeading>
          </div>
          <ActionLink href="/contact" variant="plain">
            Start a conversation
          </ActionLink>
        </div>
      </section> */}
      
    </>
  );
}
