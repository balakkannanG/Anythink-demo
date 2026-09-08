"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function HeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      <Image
        src="/homepage/person.png"
        alt="Hand-drawn people crossing platforms toward an idea"
        width={600}
        height={400}
        className="block w-full "
      />
    </motion.div>
  );
}

export function HeroCover() {
  return (
    <section aria-labelledby="home-hero-title" className="chalkboard relative overflow-hidden border-b border-line">

      <div className="absolute right-5 bottom-30 hidden  lg:grid z-20 grid grid-cols-3 gap-3 opacity-80 sm:right-40 sm:bottom-8 md:right-10" aria-hidden="true">
        
        {Array.from({ length: 18 }, (_, index) => (
            <motion.span
              key={index}
              className="size-1.5 rounded-full bg-mustard"
              initial={{ opacity: 0, y: 18, scale: 0.6 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            />
        ))}
      </div>

      <div className="site-rail relative flex min-h-155 flex-col items-center pb-8 pt-10 sm:min-h-180 sm:pt-14">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/homepage/anythinkmedialogo.svg"
            alt="Hero Image"
            width={400}
            height={100}
            className="w-full sm:w-50 md:w-full lg:w-100"
          />
        </motion.div>

        <motion.p
          className="mt-5 text-center text-[0.88rem] uppercase tracking-[0.55em] text-white sm:text-xs lg:text-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Media &amp; events
        </motion.p>

        <HeroIllustration />

        <motion.div
          className="z-10 mt-10 flex w-full flex-col items-center gap-6 text-center md:mt-20 lg:mt-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h1
            id="home-hero-title"
            className="max-w-4xl font-sans text-[clamp(1.5rem,2vw,3.5rem)] font-medium tracking-wide text-chalk xs:text-[clamp(1rem,2vw,1rem)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Turning <span className="text-mustard">&ldquo;What If?&rdquo;</span> Into <span className="text-mustard">&ldquo;What&apos;s Next.&rdquo;</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0.6 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src="/homepage/yellowline.svg" alt="Hero Image" width={250} height={100} />
          </motion.div>
        </motion.div>

        <div className="absolute left-0 top-3 grid grid-cols-3 gap-3 hidden lg:grid opacity-80" aria-hidden="true">
          {Array.from({ length: 18 }, (_, index) => (
            <motion.span
              key={index}
              className="size-1.5 rounded-full bg-mustard"
              initial={{ opacity: 0, y: 18, scale: 0.6 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
 