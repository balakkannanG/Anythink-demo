"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BarChart3,
  CircleUserRound,
  FileText,
  Lightbulb,
  MessageCircle,
  MonitorPlay,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ServiceIcon = LucideIcon | string;

const contentMarketingServices: readonly { label: string; icon: ServiceIcon }[] = [
  { label: "Content strategy", icon: "/homepage/section 4/Layer 13.png" },
  { label: "Social media content", icon: "/homepage/section 4/Layer 14.png" },
  { label: "Reels & short-form video", icon: "/homepage/section 4/Layer 15.png" },
  { label: "Branded content", icon: "/homepage/section 4/Layer 16.png" },
  { label: "Founder & personal branding", icon: "/homepage/section 4/Layer 17.png" },
  { label: "Influencer & creator content", icon: "/homepage/section 4/Layer 18.png" },
];

const growthMarketingServices: readonly { label: string; icon: ServiceIcon }[] = [
  { label: "Growth strategy & planning", icon: "/homepage/section 4/Layer 19.png" },
  { label: "Performance marketing", icon: "/homepage/section 4/Layer 20.png" },
  { label: "Lead generation & demand generation", icon: "/homepage/section 4/Layer 21.png" },
  { label: "AI search / GEO & digital discoverability", icon: "/homepage/section 4/Layer 22.png" },
  { label: "Conversion & customer journey optimisation", icon: "/homepage/section 4/Layer 23.png" },
  { label: "Analytics, CRM & growth intelligence", icon: "/homepage/section 4/Layer 24.png" },
];

function ServiceColumn({
  title,
  services,
  delay = 0,
}: {
  title: string;
  services: readonly { label: string; icon: ServiceIcon }[];
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className=" px-6 py-6 sm:px-10 "
    >
      

      <h3 className="mb-6 inline-flex -rotate-1  justify-center items-center py-3 font-head w-full uppercase leading-none text-mustard sm:text-3xl ">
      <span className="absolute w-full "> <img src="/homepage/section 4/Layer 7.png" alt="Media Services" className=" px-10  max-sm:px-2" /></span>  {title}
      </h3>
      <div className="border-t border-dashed border-line">
        {services.map(({ label, icon }, index) => {
          const Icon = typeof icon === "string" ? null : icon;

          return (
          <motion.div
            key={label}
            className="grid grid-cols-[3.5rem_1fr] items-center justify-center gap-4 border-b border-dashed border-line py-3 sm:grid-cols-[4.25rem_1fr] sm:py-4 "
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: delay + 0.1 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex size-11 items-center justify-center  text-white/80 sm:size-12 ">
              {typeof icon === "string" ? (
                <Image src={icon} alt="" width={50} height={50} aria-hidden="true" />
              ) : Icon ? (
                <Icon size={34} strokeWidth={1.3} aria-hidden="true" />
              ) : null}
            </div>
            <p className=" text-lg  leading-[0.95] text-white/80 font-mono text-[16px]">
              {label}
            </p>
           
          </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export function MediaServicesTwo() {
  return (
    <section className="overflow-hidden border-y border-line bg-black">
      <div className="site-rail py-12 sm:py-20">
        <motion.header
          className="relative text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute top-0 left-0 hidden sm:block">
            <Image
              src="/homepage/anythinkmedialogobl.svg"
              alt="anyTHINK Media and Events"
              width={220}
              height={95}
              className="h-auto w-44"
            />
          </div>
          
          <h2 className="font-head text-[clamp(4rem,6vw,5rem)] uppercase leading-[0.8] text-chalk ">  
                <span className="inline-flex text-mustard "><img src="/homepage/leftsidethreeline.png" alt="leftsidethreeline" className=" w-10 max-sm:hidden mt-2" /></span>
            What <span className=" text-mustard">we</span> do<span className="inline-flex text-mustard "><img src="/homepage/rightsidethreeline.png" alt="rightsidethreeline" className=" w-10 max-sm:w-10 max-sm:hidden mt-2" /></span>
            <span className="block text-mustard "><img src="/homepage/section 4/Layer 2.png" alt="underline" className=" w-100  mx-auto" /></span>
          </h2>
          
     
          <motion.div
            className="mx-auto mt-5 h-1 w-72 max-w-full -rotate-2"
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0.5 }}
          />
          <motion.p
            className="mt-5 font-chalk text-2xl uppercase text-chalk-dim sm:text-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Our services
          </motion.p>
          <div className="mt-4 flex justify-center gap-5 text-mustard" aria-hidden="true">
            <span>--</span>
            <span>✦</span>
            <span>--</span>
          </div>
         
        </motion.header>
         <motion.div
           className="mt-5 text-center text-lg leading-[1.3] text-white/80 sm:text-xl"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: false, amount: 0.35 }}
           variants={{
             hidden: {},
             visible: {
               transition: { staggerChildren: 0.15 },
             },
           }}
         >
           <motion.span
             className="inline-flex text-mustard"
             variants={{
               hidden: { opacity: 0, y: -40 },
               visible: { opacity: 1, y: 0 },
             }}
             transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
           >
             <img src="/homepage/section 4/Layer 4.png" alt="leftsidethreeline" className="w-80 max-sm:hidden mt-2" />
           <img src="/homepage/section 4/Layer 5.png" alt="rightsidethreeline" className="w-80 max-sm:w-10 max-sm:hidden mt-2" />
           </motion.span>
         </motion.div>

        <div className="relative mt-12 grid items-stretch gap-6 lg:px-20  lg:grid-cols-[minmax(0,1fr)_10px_minmax(0,1fr)] lg:gap-0 ">
         <motion.span
           className="pointer-events-none absolute left-0 top-0 h-full w-full"
           aria-hidden="true"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: false, amount: 0.25 }}
           variants={{
             hidden: {},
             visible: { transition: { staggerChildren: 0.15 } },
           }}
         >
           <motion.img
             src="/homepage/section 4/Layer 8.png"
             alt=""
             className="absolute bottom-40 -left-20 hidden h-auto w-40 lg:block"
             variants={{
               hidden: { opacity: 0, x: -70 },
               visible: { opacity: 1, x: 0 },
             }}
             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
           />
           <motion.img
             src="/homepage/section 4/Layer 6.png"
             alt=""
             className="absolute -top-50 right-0 hidden h-auto w-40 lg:block"
             variants={{
               hidden: { opacity: 0, y: -70 },
               visible: { opacity: 1, y: 0 },
             }}
             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
           />
         </motion.span>
          <ServiceColumn title="Content marketing" services={contentMarketingServices} delay={0.3} />
         
          <motion.div
            className="hidden h-full w-[10px] lg:flex lg:justify-center"
            initial={{ opacity: 0, scaleY: 0.3 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "center top" }}
          >
            <div className="h-full w-px bg-gradient-to-b from-transparent via-[#f3efe2]/60 to-transparent" />
          </motion.div>
          <ServiceColumn title="Growth marketing" services={growthMarketingServices} delay={0.5} />
        </div>

        <motion.div
          className="mt-12 borderbgimageyellow relative  rounded-4xl px-6 py-6 sm:mt-14 sm:px-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
         
          <div className="flex flex-col items-center justify-center gap-5 text-center sm:flex-row max-sm:gap-3">
            {/* <Lightbulb size={50} strokeWidth={1.1} className="shrink-0 text-mustard" aria-hidden="true" /> */}
            <img src="/homepage/section 4/Layer 10.png" alt="light" width={70} height={50} />
            <p className="font-chalk text-2xl max-sm:text-[18px] uppercase leading-tight text-chalk sm:text-3xl">
              Content creates the <span className="text-mustard">attention.</span>
              <br className="hidden sm:block" />
              Growth marketing turns it into <span className="text-mustard">business.</span>
            </p>
            <img src="/homepage/section 4/Layer 11.png" alt="target" width={70} height={50} />
            <img src="/homepage/section 4/Layer 12.png" alt="target" width={70} height={50} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
