"use client";

import { motion } from "framer-motion";
import { ActionLink, ChalkHeading, SectionLabel } from "@/components/editorial";
import { ServiceRow } from "@/components/services/ServiceRow";
import { ServicesHero } from "@/components/services/ServicesHero";
import { FestivalExperience } from "@/components/services/FestivalExperience";
import { StageExperience } from "@/components/services/StageExperience";
import { services } from "@/lib/content";
import { MediaServices } from "@/components/homepage/MediaServices";
import { MediaServicesTwo } from "@/components/homepage/MediaServicesTwo";

export default function ServicesPage() {
  return (
    <div className="bg-black">
      <MediaServices />
      <MediaServicesTwo />
      <ServicesHero />
      <FestivalExperience />
      <StageExperience />

      <section className="site-rail pb-20 sm:pb-28">
        <div className="flex flex-col justify-between gap-4 border-y border-line py-5 sm:flex-row sm:items-center">
          <p className="font-mono text-md uppercase tracking-[0.2em] text-white max-sm:text-center">
            Our capabilities
          </p>
          <p className="font-chalk text-sm uppercase tracking-[0.2em] text-mustard max-sm:text-center">
            Think beyond the brief · 05 ways
          </p>
        </div>
        <div>
          {services.map((service) => (
            <ServiceRow key={service.id} service={service} />
          ))}
        </div>
      </section>

      <motion.section
        className="border-y border-line paper-grain bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="site-rail grid gap-10 py-20 sm:py-24 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* <SectionLabel>One thought. Many ways forward.</SectionLabel> */}
            <ChalkHeading size="section" className="mt-7 max-w-xl max-sm:text-center">
              Ideas are only the{" "}
              <span className="text-mustard">beginning.<span className="inline-flex text-mustard "><img src="/homepage/rightsidethreeline.png" alt="rightsidethreeline" className=" w-10 max-sm:w-10 max-sm:hidden mt-2" /></span></span>
            </ChalkHeading>
          </motion.div>
          <motion.div
            className="flex flex-col items-start gap-7 lg:items-end max-sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="max-w-sm text-sm leading-relaxed text-white/80 lg:text-right font-mono max-sm:text-center ">
              Tell us what you are thinking about. We&apos;ll bring the right
              mix of media, content and experiences to make what&apos;s next.
            </p>
            <ActionLink href="/contact" variant="plain" className="max-sm:text-center">
              Start a conversation
            </ActionLink>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
