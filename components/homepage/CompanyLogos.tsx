"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const logoRows = [
  ["/company/Asset 1.png", "/company/Asset 2.png", "/company/Asset 3.png", "/company/Asset 4.png", "/company/Asset 5.png"],
  [ "/company/Asset 6.png","/company/Asset 7.png", "/company/Asset 8.png", "/company/Asset 9.png", "/company/Asset 10.png"],
  [ "/company/Asset 11.png", "/company/Asset 12.png","/company/Asset 13.png", "/company/Asset 14.png", "/company/Asset 15.png"],
  ["/company/Asset 16.png", "/company/Asset 17.png", "/company/Asset 18.png","/company/Asset 19.png", "/company/Asset 20.png", "/company/Asset 21.png"],
] as const;

function LogoRow({ logos, rowIndex }: { logos: readonly string[]; rowIndex: number }) {
  const [isPaused, setIsPaused] = useState(false);
  const repeatedLogos = [...logos, ...logos];
  const direction = rowIndex % 2 === 0 ? "logo-marquee-forward" : "logo-marquee-reverse";

  return (
    <motion.div
      className="overflow-hidden border-2 border-dashed border-mustard py-3 first:border-t-2 border-r-0 border-l-0 sm:py-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.7, delay: rowIndex * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      <div
        className={`flex w-max gap-3 ${direction} ${isPaused ? "[animation-play-state:paused]" : ""}`}
        style={{ animationDuration: `${28 + rowIndex * 4}s` }}
      >
        {repeatedLogos.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="relative flex h-20  min-w-36 items-center justify-center borderbgimage bg-panel px-5 transition-colors hover:border-mustard sm:h-20 sm:min-w-48"
          >
            <Image
              src={logo}
              alt=""
              fill
              sizes="(min-width: 640px) 12rem, 9rem"
              className="object-contain "
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </div>
        ))} 
      </div>
    </motion.div>
  );
}

export function CompanyLogos() {
  return (
    <motion.section
      aria-labelledby="company-logos-title"
      className="border-b border-line bg-ink paper-grain"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="site-rail py-16 sm:py-24">
            <motion.div
              className="relative h-20 w-full hidden sm:block"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="absolute right-10 top-5 inline-flex max-md:hidden">
                <img src="/homepage/section 7/Client 4.png" alt="underline" className="w-40 max-sm:hidden max-md:w-8" />
              </span>
            </motion.div>
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* <p className="flex items-center gap-4 font-mono text-[0.62rem] font-medium uppercase tracking-[0.28em] text-mustard">
              <span className="h-px w-10 bg-mustard" aria-hidden="true" />
              04 / brands we&apos;ve moved
            </p> */}
            <h2 id="company-logos-title" className="mt-7 max-w-2xl font-head text-[clamp(2.8rem,5vw,5.2rem)] max-sm:text-center uppercase  leading-[0.88] text-chalk">
              Great brands <span className="inline-flex text-mustard max-md:hidden "><img src="/homepage/section 6/Rectangle 7.png" alt="underline" className=" w-14 max-sm:hidden  max-md:w-8 rotate-340 " /></span>
           <span className="text-mustard block"> think alike.</span></h2>
          </motion.div>
      
          <motion.p
            className="max-w-md font-chalk text-2xl leading-tight text-white/80 "
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            A few of the brilliant minds we&apos;ve had the joy of working alongside.
          </motion.p>
        </div>
        

        <div className="borderbgimage p-2 sm:p-3">
          {logoRows.map((logos, rowIndex) => <LogoRow key={rowIndex} logos={logos} rowIndex={rowIndex} />)}
        </div>
      </div>
    </motion.section>
  );
}