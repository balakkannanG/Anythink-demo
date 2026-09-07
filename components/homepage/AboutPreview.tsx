"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function AboutIllustration() {
  const newLocal = "/homepage/whoweare.webp";
  return (
    <Image src={newLocal} alt="About Anythink" width={500} height={400} className="h-auto w-full max-w-140" />
  );
}

export function AboutPreview() {
  return (
    <section aria-labelledby="home-about-title" className="border-y border-line bg-ink">
      <div className="site-rail grid gap-12 py-16 sm:py-24 lg:grid-cols-[0.72fr_1.08fr_1fr] lg:items-center lg:gap-14">
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 id="home-about-title" className="font-head text-center text-[clamp(4rem,8vw,7rem)] font-medium uppercase leading-[0.78] text-chalk lg:text-start">
            Who
            <span className="block md:inline max-sm:inline text-mustard"> we <span className="inline-flex text-mustard "><img src="/homepage/rightsidethreeline.png" alt="underline" className=" w-18 max-sm:hidden mt-2 max-md:w-14 " /></span>
            <span className="block text-mustard "><img src="/homepage/underline.png" alt="underline" className=" w-60  max-md:w-40 max-sm:w-60" /></span>

            </span>
            <span className="block md:inline max-sm:inline"> are</span>
          </h2>
        </motion.div>

        <motion.div
          className="border-l border-mustard pl-6 sm:pl-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-base leading-relaxed text-white/80 font-mono sm:text-lg">
            We are <span className="block text-mustard">Anythink Media &amp; Events.</span>
          </p>
          <p className="mt-5 max-w-md text-[16px] font-mono leading-relaxed text-white/80 sm:text-base">
            A creative media and experiences company built on one simple belief:
          </p>
          <p className="mt-4 font-chalk text-3xl text-mustard sm:text-4xl">Anythink is possible.
            <span className="block pl-14  text-mustard "><img src="/homepage/underline.png" alt="underline" className=" w-32  " /></span>
          </p>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-white/80 font-mono sm:text-base">
            We bring together strategy, creativity, media, content and experiences to help brands connect with people in meaningful ways.
          </p>
          <p className="mt-8 max-w-md text-[16px] leading-relaxed text-white/80 font-mono sm:text-base">
           From media planning & buying to content, events, artist management, brand experiences and IPs, we turn ideas into things people <span className=" text-mustard">see, hear, feel</span> and <span className=" text-mustard">remember.</span>
          </p>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-white/80 font-mono sm:text-base">
            We don&apos;t just execute briefs. <span className="block text-mustard">We think beyond them.
                          <span className="block pl-14  text-mustard "><img src="/homepage/underline.png" alt="underline" className=" w-32  " /></span>
            </span>
          </p>
        </motion.div>

        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <AboutIllustration />
        </motion.div>
      </div>
    </section>
  );
}