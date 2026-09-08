"use client";

import { motion } from "framer-motion";
import { ChalkHeading, SectionLabel } from "@/components/editorial";
import { ServicePreview } from "@/components/services/ServiceRow";
import { services } from "@/lib/content";

export function WhatWeDo() {
  return (
    <section className="site-rail py-20 sm:py-28">
            <motion.div
              className="relative h-20 w-full hidden sm:block"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="absolute right-10 top-5 inline-flex max-md:hidden ">
                <img src="/homepage/section 7/Rectangle 9.png" alt="underline" className="w-100 mx-auto max-sm:hidden max-md:w-8" />
              </span>
            </motion.div>
      <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* <SectionLabel>02 / what we do</SectionLabel> */}
          <ChalkHeading size="section" className="mt-7 max-w-xl md:text-center lg:text-start max-sm:text-center text-[clamp(4rem,6vw,5rem)]">
            Make the idea <span className="text-mustard">matter.</span> <span className="block text-mustard "><img src="/homepage/underline.png" alt="underline" className=" w-60 mx-auto lg:mx-0  max-md:w-40 max-sm:w-60" /></span>
          </ChalkHeading>
        </motion.div>

        <motion.p
          className="justify-self-end max-w-sm font-chalk text-2xl leading-tight text-white/80 max-sm:text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          From the first spark to the room going quiet.
        </motion.p>
      </div>
      <div className="mt-14 font-mono text-white/80">
        <ServicePreview services={services}  />
      </div>
    </section>
  );
}
