"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Cog, Lightbulb, Megaphone, Pencil, type LucideIcon } from "lucide-react";

interface StageStep {
  title: string;
  description: string;
  icon: LucideIcon | string;
}

const stageSteps: readonly StageStep[] = [
  { title: "Concept", description: "Theme · Visual Direction", icon: "/services/section 5/Rectangle 4.png" },
  { title: "Design", description: "Backdrops · Installations · Branding", icon: "/services/section 5/Rectangle 5.png" },
  { title: "Execution", description: "Fabrication · Styling · Setup", icon: "/services/section 5/Rectangle 6.png" },
  // { title: "Promotion", description: "Content · Campaigns · Reach", icon: Megaphone },
];

const stageImages = [
  { src: "/memories/memory-18.jpg", alt: "A styled event experience" },
  { src: "/memories/memory-19.jpg", alt: "A branded event installation" },
  { src: "/memories/memory-20.jpg", alt: "A decorated event space" },
  { src: "/memories/memory-21.jpg", alt: "A live event backdrop" },
  { src: "/memories/memory-22.jpg", alt: "An experiential event display" },
  { src: "/memories/memory-23.jpg", alt: "A finished event setup" },
] as const;

export function StageExperience() {
  return (
    <motion.section
      aria-labelledby="stage-title"
      className="chalkboard border-b border-line bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="site-rail grid gap-10 py-12 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:py-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src="/homepage/anythinkmedialogobl.svg" alt="Anythink Media and Events" width={397} height={144} className="h-auto w-32 sm:w-40" />
          </motion.div>
          <motion.div
            className="mt-10 lg:mt-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 id="stage-title" className="font-head text-[clamp(2.0rem,5vw,5.8rem)] uppercase leading-[0.86] text-chalk max-sm:text-center ">
              We set
              <span className="block text-mustard"> <span className="inline-flex text-mustard "><img src="/homepage/leftsidethreeline.png" alt="leftsidethreeline" className=" w-10 max-sm:hidden mt-2" /></span>the stage.<span className="inline-flex text-mustard "><img src="/homepage/rightsidethreeline.png" alt="rightsidethreeline" className=" w-10 max-sm:w-10 max-sm:hidden mt-2" /></span></span>
            </h1>
            <div className="mt-6 h-px w-100 bg-chalk-dim borderbgimagetop max-sm:w-full" aria-hidden="true" />
            <p className="mt-6 font-chalk text-2xl leading-tight text-chalk sm:text-3xl">Spaces that attract.<br />Experiences that stay. <span className="block text-mustard "><img src="/homepage/underline.png" alt="underline" className=" w-60  max-md:w-40 max-sm:w-60" /></span></p>
          </motion.div>

          <motion.div
            className="mt-10 space-y-5 sm:mt-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {stageSteps.map(({ title, description, icon }, index) => {
              const Icon = typeof icon === "string" ? null : icon;

              return (
              <motion.div
                key={title}
                className="flex items-center gap-4 border-b border-dashed border-line pb-5"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="flex size-14 shrink-0 items-center justify-center rounded-full  text-mustard">
                  {typeof icon === "string" ? (
                    <Image
                      src={icon}
                      alt=""
                      width={50}
                      height={50}
                      className="h-20 w-20 object-contain"
                      aria-hidden="true"
                    />
                  ) : Icon ? (
                    <Icon size={27} strokeWidth={1.3} aria-hidden="true" />
                  ) : null}
                </span>
                <div>
                  <h2 className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-mustard">{title}</h2>
                  <p className="mt-1 text-sm text-white/80 font-mono">{description}</p>
                </div>
              </motion.div>
              );
            })}
          </motion.div>

          {/* <motion.div
            className="relative mt-10 flex min-h-20 items-center justify-center overflow-hidden borderbgimageyellow px-5 text-center sm:mt-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-head text-[clamp(0.95rem,2vw,1.45rem)] uppercase leading-tight text-chalk">Spaces that attract.<br /><span className="text-mustard">Experiences that stay.</span></p>
          </motion.div> */}
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-4 self-center sm:gap-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {stageImages.map(({ src, alt }, index) => (
            <motion.div
              key={src}
              className={`relative aspect-[1.08] overflow-hidden border-4 borderbgimage bg-panel shadow-[0_0_0_1px_var(--color-line)] ${index % 3 === 0 ? "rotate-[-1deg]" : index % 3 === 1 ? "rotate-[0deg]" : "rotate-[1deg]"}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 24vw, 45vw" className="object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}