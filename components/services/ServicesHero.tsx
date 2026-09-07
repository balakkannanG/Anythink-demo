"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  BriefcaseBusiness,
  Gem,
  Guitar,
  Handshake,
  Presentation,
  Store,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

interface Capability {
  title: string;
  description: string;
  icon: LucideIcon | string;
}

const capabilities: readonly Capability[] = [
  {
    title: "Corporate Events",
    description: "Conferences, seminars, launches & more.",
    icon: "/about/section 3/Rectangle 9.png",
  },
  {
    title: "Experiential Events",
    description: "Immersive brand experiences & activations.",
    icon: "/about/section 3/Rectangle 10.png",
  },
  {
    title: "Employee Engagement Events",
    description: "Build culture, boost morale & inspire teams.",
    icon: "/about/section 3/Rectangle 11.png",
  },
  {
    title: "Social & Lifestyle Events",
    description: "Curated events that create memories.",
    icon: "/about/section 3/Rectangle 12.png",
  },
  {
    title: "Luxury & Private Events",
    description: "Bespoke, high-end experiences with attention to detail.",
    icon: "/about/section 3/Rectangle 13.png",
  },
  {
    title: "Customer Engagement Events",
    description:
      "Stronger connections. Stronger loyalty. Better relationships.",
    icon: "/about/section 3/Rectangle 14.png",
  },
  {
    title: "Workshops & A Lot More",
    description: "Learning, ideation & experiences that add value.",
    icon: "/about/section 3/Rectangle 15.png",
  },
];

export function ServicesHero() {
  return (
    <motion.section
      aria-labelledby="services-hero-title"
      className="chalkboard border-b border-line bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="site-rail py-10 sm:py-14 lg:py-16 ">
        <motion.div
          className="flex justify-center lg:justify-start"
          initial={{ opacity: 0, scale: 0.95, y: -12 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/homepage/anythinkmedialogobl.svg"
            alt="Anythink Media and Events"
            width={397}
            height={144}
            priority
            className="h-auto w-36 sm:w-44"
          />
        </motion.div>
        <div className="relative ">
          <span className="font-chalk text-2xl left-0 top-10 absolute text-chalk ">
            <img src="/about/section 3/Rectangle 4.png" alt="" className="w-70 h-full max-md:w-40 max-sm:hidden" />
           
             
            </span>
          <span className="font-chalk text-2xl -right-10 top-12 absolute text-chalk ">
            <img src="/about/section 3/Rectangle 5.png" alt="" className="w-70 h-full max-md:w-40 max-sm:hidden" />
             
            </span>
        </div>

        <motion.div
          className="mx-auto mt-8 max-w-3xl text-center sm:mt-10 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            id="services-hero-title"
            className="font-head text-[clamp(2.2rem,5.5vw,5rem)] uppercase leading-[0.9] text-chalk"
          >
            Events,<br></br>
            <span className="inline-flex text-mustard text-center">
              <img
                src="/homepage/leftsidethreeline.png"
                alt="leftsidethreeline"
                className=" w-10 max-sm:w-5 mt-2"
              />
            </span>{" "}
            Activations
            <span className="inline-flex text-mustard text-center">
              <img
                src="/homepage/rightsidethreeline.png"
                alt="rightsidethreeline"
                className=" w-10 max-sm:w-5 mt-2"
              />
            </span>
            <span className="block mt-2 text-mustard">&amp; Experiences</span>
          </h1>
          <div
            className="mx-auto mt-6 h-px max-w-lg borderbgimagetop"
            aria-hidden="true"
          />
          <p className="mx-auto mt-5 max-w-xl font-chalk text-xl leading-tight text-chalk-dim sm:text-2xl">
            We design experiences that{" "}
            <span className="text-mustard">connect, engage</span> and leave a{" "}
            <span className="text-mustard">lasting impact.</span>
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid border-y border-line sm:mt-16 sm:grid-cols-2 lg:grid-cols-7"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {capabilities.map(({ title, description, icon }, index) => {
            const Icon = typeof icon === "string" ? null : icon;

            return (
            <motion.article
              key={title}
              className="flex min-h-64 flex-col items-center border-r borderbgimagetop  gap-2 px-4 py-8 text-center last:border-b-0 sm:min-h-72 sm:nth-[2n]:border-b-0 lg:min-h-80 lg:border-b-0 lg:border-r lg:last:border-r-0"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex h-20 w-full items-center justify-center ">
                {typeof icon === "string" ? (
                  <Image src={icon} alt="" width={80} height={48} className="h-12 w-20 object-contain" aria-hidden="true" />
                ) : Icon ? (
                  <Icon
                    size={48}
                    strokeWidth={1.2}
                    className="text-chalk"
                    aria-hidden="true"
                  />
                ) : null}
              </div>
              <h2 className="mt-6 flex h-8 max-w-32 items-start justify-center font-mono text-[0.68rem] font-medium uppercase leading-tight tracking-[0.12em] text-mustard">
                {title}
              </h2>
              <div
                className="my-5 h-px w-16 borderbgimagetop"
                aria-hidden="true"
              />
              <p className="max-w-36 font-mono text-[12px] leading-tight text-white/80">
                {description}
              </p>
            </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          className="mx-auto mt-8 flex max-w-5xl items-center justify-between gap-4 borderbgimageyellow px-5 py-5 sm:mt-10 sm:px-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-chalk text-3xl text-mustard" aria-hidden="true">
             <img src="/about/section 3/Rectangle 6.png" alt="heart" width={80} height={48} />
          </span>
          <p className="text-center font-head text-[clamp(1rem,2.4vw,2rem)] uppercase leading-none text-chalk">
            Ideate. Plan. Execute.{" "}
            <span className="text-mustard">Deliver impact.</span>
          </p>
          <span className="font-chalk text-3xl text-mustard" aria-hidden="true">
            <img src="/about/section 3/Rectangle 7.png" alt="heart" width={80} height={48} />
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
}
