"use client";

import { motion } from "framer-motion";
import { ActionLink, ChalkHeading, SectionLabel } from "@/components/editorial";
import { WorkPreview } from "@/components/work/WorkPreview";
import { caseStudies } from "@/lib/content";

export function OurWork() {
  return (
    <section className="border-y border-line paper-grain">
      <div className="site-rail py-20 sm:py-28">
        <motion.div
          className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            {/* <SectionLabel>03 / our work</SectionLabel> */}
            <ChalkHeading size="section" className="mt-7 max-w-xl max-sm:text-center text-[clamp(4rem,6vw,5rem)]  max-sm:text-[clamp(3rem,4vw,4rem)]">
              Ideas that <span className="text-mustard">got some where.</span><span className="inline-flex text-mustard "><img src="/homepage/rightsidethreeline.png" alt="underline" className=" w-16 max-sm:hidden mt-2 max-md:w-14 " /></span>
            </ChalkHeading>
          </div>
          <ActionLink href="/work" variant="plain">
            View all stories
          </ActionLink>
        </motion.div>
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <WorkPreview caseStudies={caseStudies} />
              <div className="relative w-auto h-auto flex sm:block" aria-hidden="true">
                <span className="absolute hidden -top-70 w-full h-auto md:left-40  md:block text-center">
            <img src="/homepage/section 7/Rectangle 4.png" alt="" className="w-150 mx-auto " />
            

                </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
