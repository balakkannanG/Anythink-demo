"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ClipboardCheck,
  Handshake,
  Megaphone,
  Store,
  type LucideIcon,
} from "lucide-react";

interface FestivalCapability {
  title: string;
  description: string;
  icon: LucideIcon | string;
}

const festivalCapabilities: readonly FestivalCapability[] = [
  { title: "Sponsorship", description: "We identify opportunities, build partnerships and get the right brands on board.", icon: "/services/section 4/Rectangle 1.png" },
  { title: "Decor & Experience", description: "From the first visual impression to the smallest detail, we create spaces people want to explore.", icon: "/services/section 4/Rectangle 2.png" },
  { title: "Marketing & Promotion", description: "We build buzz before the festival and drive footfalls through the right media, digital and promotional channels.", icon: "/services/section 4/Rectangle 3.png" },
  { title: "End-to-End Execution", description: "Concept to closure planning, vendors, production, on-ground execution and everything in between.", icon: "/services/section 4/Rectangle 4.png" },
];

export function FestivalExperience() {
  return (
    <motion.section
      aria-labelledby="festival-title"
      className="chalkboard border-b border-line bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
        <span className="absolute right-50 md:right-10 line-flex max-md:hidden">
                <img src="/homepage/section 7/Client 4.png" alt="underline" className="w-40 mt-10 max-sm:hidden max-md:w-8" />
              </span>
      <div className="site-rail grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20 ">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="flex justify-center lg:justify-start  "
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            
            <Image src="/homepage/anythinkmedialogobl.svg" alt="Anythink Media and Events" width={397} height={144} className="h-auto w-32 sm:w-40" />
          </motion.div>
         
          <div className="mt-10 max-w-2xl lg:mt-16 ">
            <h1 id="festival-title" className="font-head text-[clamp(2.6rem,6vw,5.8rem)] uppercase leading-[0.86] text-mustard max-md:text-center max-sm:text-center text-left">Festivals <span className="inline-flex text-mustard "><img src="/homepage/rightsidethreeline.png" alt="underline" className=" w-16 max-sm:hidden mt-2 max-md:w-14 " /></span></h1>
            <div className="mb-5 h-full w-full  max-md:text-center  max-sm:w-full " aria-hidden="true">
               <span className="block text-mustard mx-auto "><img src="/homepage/underline.png" alt="underline" className=" w-70 max-md:w-40 max-sm:w-60 max-md:mx-auto max-sm:mx-auto" /></span>
            </div>
            <p className="mt-8 text-center font-head text-[clamp(1.15rem,2.5vw,2rem)] uppercase leading-tight text-chalk sm:text-left">
              We work with<br /><span className="text-mustard">festivals &amp; large-crowd</span><br />experiential events.
            </p>
            <p className="mt-7 max-w-xl font-chalk text-xl leading-tight text-white/80 sm:text-2xl">
              From small activations to large-scale festivals, we plug in where you need us &ndash; or take it <span className="text-mustard">end to end.</span>
            </p>
          </div>

          <motion.div
            className="mt-10 grid border-y border-line sm:grid-cols-2 lg:mt-14 lg:grid-cols-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {festivalCapabilities.map(({ title, description, icon }, index) => {
              const Icon = typeof icon === "string" ? null : icon;

              return (
              <motion.article
                key={title}
                className="border-b border-line px-4 py-7 text-center borderbgimagetop last:border-b-0 sm:nth-[2n]:border-b-0 lg:border-b-0  lg:border-r lg:last:border-r-0"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                {typeof icon === "string" ? (
                  <Image
                    src={icon}
                    alt=""
                    width={50}
                    height={48}
                    className={`mx-auto object-contain text-white/80 h-20  ${title === "End-to-End Execution" ? "h-16 w-20" : "h-12 w-[120px]"}`}
                    aria-hidden="true"
                  />
                ) : Icon ? (
                  <Icon size={42} strokeWidth={1.2} className="mx-auto text-chalk" aria-hidden="true" />
                ) : null}
                <h2 className="mt-5 h-10 font-mono text-md font-medium uppercase leading-tight tracking-[0.1em] text-mustard ">{title}</h2>
                <p className="mx-auto mt-4 max-w-full font-mono text-[14px] leading-tight text-white/80">{description}</p>
              </motion.article>
            );
          })}
          </motion.div>

          <motion.div
            className="mt-8 flex items-center justify-center gap-4 borderbgimageyellow px-2 py-2 text-center sm:mt-10 sm:gap-8 "
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-chalk text-3xl text-mustard" aria-hidden="true"><img src="/homepage/section 6/Rectangle 2.png" alt="star" className="h-full w-20 object-contain rotate-180 " /></span>
            <p className="font-head text-[clamp(0.9rem,2vw,1.5rem)]  uppercase leading-tight text-chalk">One festival. <span className="text-mustard">Multiple possibilities.</span><br />One partner to make it happen.</p>
            <span className="font-chalk text-3xl text-mustard" aria-hidden="true"><img src="/homepage/section 6/Rectangle 2.png" alt="star" className="h-full w-20 object-contain" /></span>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 self-center sm:gap-6 lg:pt-12"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image src="/memories/memory-04.jpg" alt="A festival experience by Anythink" width={800} height={1000} className="mt-8 h-64 w-full rotate-[-2deg] border-4 borderbgimage object-cover sm:h-80" />
          <Image src="/memories/memory-09.jpg" alt="Guests enjoying an Anythink event" width={800} height={1000} className="h-64 w-full rotate-[2deg] border-4 borderbgimage object-cover sm:h-80" />
          <Image src="/memories/memory-14.jpg" alt="A live event moment created by Anythink" width={1000} height={700} className="col-span-2 mx-auto h-48 w-[85%] rotate-[-1deg] border-4 borderbgimage object-cover sm:h-60" />
        </motion.div>
      </div>
    </motion.section>
  );
}