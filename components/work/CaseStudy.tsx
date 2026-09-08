"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { CaseStudy as CaseStudyData } from "@/lib/types";
import { getServiceIcon } from "@/lib/content";

import { CaseStudyFrame } from "@/components/work/CaseStudyFrame";

interface CaseStudyProps {
  caseStudy: CaseStudyData;
}

export function CaseStudy({ caseStudy }: CaseStudyProps) {
  return (
    <motion.article
      id={caseStudy.id}
      className="border-t border-line py-16 sm:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16"
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
          className=" flex flex-col lg:pt-2   "
        >
          <motion.p
            className="flex -rotate-1 borderbgimageyellow max-w-sm px-5 py-2 lg:w-80 md:w-50 text-mustard lg:text-3xl max-md:text-5xl uppercase leading-none font-head text-center max-md:mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Work done for
          </motion.p>
          {/* <motion.p
            className="mt-8 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-mustard"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {caseStudy.number} / {caseStudy.eyebrow}
          </motion.p> */}
          <motion.img
            className="mt-4 font-head text-[clamp(3rem,6vw,5.8rem)] uppercase leading-[0.82] text-chalk max-sm:text-center max-md:text-center"
            src={caseStudy.image}
            alt={caseStudy.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.p
            className="mt-8 max-w-md max-md:max-w-full  font-mono text-[16px] leading-tight text-white/80  max-sm:text-center max-md:text-center"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            {caseStudy.summary}
          </motion.p>
          <motion.ul
            className="mt-10 border-t border-dashed border-line"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {caseStudy.services.map((service, index) => {
              const isObject = typeof service === 'object';
              const icon = isObject ? service.icon : getServiceIcon(service);
              const label = isObject ? service.label : service;
              
              return (
                <motion.li
                  key={label}
                  className="grid grid-cols-[2.8rem_1fr]  items-center gap-3 border-b border-dashed border-line py-3 text-chalk-dim"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.32 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="flex size-13 items-center justify-center rounded-full text-mustard">
                    <img 
                      src={icon} 
                      alt={label}
                      className="w-full h-full object-cover"
                    />
                  </span>
                  <span className="font-mono text-[16px] text-white/80 leading-none">{label}</span>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8 sm:gap-10 lg:gap-12  my-auto"
        >
          {/* {caseStudy.image && (
            <motion.div
              className="relative mb-8 aspect-[1.35] overflow-hidden border-4 border-chalk bg-board p-1"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={caseStudy.image}
                alt={`${caseStudy.title} project`}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          )} */}
          <motion.div
            className="mb-8 flex items-center justify-between gap-6 border-b border-line pb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-chalk text-2xl text-mustard">made together</span>
            <motion.p
              className="max-w-[16rem] text-right font-chalk text-[0.6rem] uppercase  tracking-[0.28em] text-white/80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              {caseStudy.metadata}
            </motion.p>
          </motion.div>
          <motion.div
            className="grid gap-x-4 gap-y-8 max-md:grid-cols-2 sm:gap-5 lg:grid-cols-6 lg:gap-x-5 lg:gap-y-10 justify-center items-center  "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {caseStudy.frames.map((frame, index) => (
              <motion.div
                key={frame.label}
                className={`sm:col-span-1 lg:col-span-2 ${index === 3 ? "lg:col-start-2" : ""} ${index === 4 ? "md:col-span-2 md:justify-self-center sm:justify-self-center" : ""} ${index === 4 ? "lg:col-start-4" : ""} `}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.25 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <CaseStudyFrame frame={frame} index={index} />
              </motion.div>
            ))}
          </motion.div>
         
        </motion.div>
      </motion.div>
    </motion.article>
  );
}
