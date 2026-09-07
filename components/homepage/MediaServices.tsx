"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Clapperboard,
  Handshake,
  Lightbulb,
  MessageCircle,
  Mic2,
  Radio,
  TowerControl,
  Users,
  Video,
  Car
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type MediaServiceIcon = LucideIcon | string;

const mediaServices: readonly { label: string; icon: MediaServiceIcon }[] = [
  { label: "Branded content creation", icon: "/icon/video.png" },
  { label: "Media buying", icon: "/icon/tv.png" },
  { label: "Voiceovers and artist management", icon: "/icon/mic.png" },
  { label: "Content & storytelling", icon: "/icon/massage.png" },
  { label: "Corporate radio solutions", icon: "/icon/tower.png" },
  { label: "Podcasts", icon: "/icon/procast.png" },
  { label: "IP creation & campaigns", icon: "/icon/idea.png"   },
  { label: "Media partnerships & barter deals", icon: "/icon/parters.png" },
  { label: "Brand films & corporate AVs", icon: "/icon/camra.png" },
];

const projectImages = [
  { src: "/memories/memory-04.jpg", alt: "Anythink project moment" },
  { src: "/memories/memory-09.jpg", alt: "Anythink event production" },
  { src: "/memories/memory-16.jpg", alt: "Anythink branded experience" },
  { src: "/memories/memory-22.jpg", alt: "Anythink live event" },
] as const;

export function MediaServices() {
  return (
    <section className="overflow-hidden border-y border-line bg-black">
      <div className="site-rail grid gap-14 py-16 sm:py-24 lg:grid-cols-[0.7fr_1.2fr_1fr] lg:gap-12">
        <motion.div
          className="flex flex-col gap-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/homepage/anythinkmedialogobl.svg"
            alt="anyTHINK Media and Events"
            width={220}
            height={95}
            className="h-auto w-52"
          />
          <div className="relative w-full felx justify-center items-center lg:max-w-60 pt-20">
            <h2 className="font-head text-center text-[clamp(4rem,8vw,7rem)] font-medium uppercase leading-[0.78] text-chalk lg:text-start">
              What
              <span className="block max-sm:inline md:inline-flex text-mustard ">
                <span className="inline-flex text-mustard "><img src="/homepage/leftsidethreeline.png" alt="leftsidethreeline" className=" w-10 max-sm:hidden mt-2" /></span> we 
                <span className="inline-flex text-mustard "><img src="/homepage/rightsidethreeline.png" alt="rightsidethreeline" className=" w-10 max-sm:w-10 max-sm:hidden mt-2" /></span></span>
                 <span className="block text-mustard "><img src="/homepage/underline.png" alt="underline" className=" w-60 mb-2 mx-auto" /></span>
              <span className="block max-sm:inline md:inline"> do</span>
              
            </h2>
            <div>
              <img src="/homepage/personmic.png" alt="" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          
          <div className="mb-7 inline-flex -rotate-1  relative  px-0.5 py-3 text-center  w-full md:justify-center md:items-center max-sm:justify-center max-sm:items-center">
            <div className="absolute w-full   h-full">  <span className="float-right text-mustard "><img src="/homepage/rightsidethreeline.png" alt="rightsidethreeline" className=" w-10 max-sm:w-10 max-sm:hidden mt-2" /></span></div>
            <div className="relative w-full flex justify-center items-center">
            <span className="absolute w-full "> <img src="/homepage/Media Services banner.png" alt="Media Services" className=" px-10  max-sm:px-2" /></span>
            <h3 className="font-head text-[clamp(3rem,3vw,5rem)] max-sm:text-4xl uppercase leading-none text-mustard text-center">Media Services</h3>
</div>
            <div className="absolute w-full  h-full">  <span className="float-left text-mustard "><img src="/homepage/leftsidethreeline.png" alt="leftsidethreeline" className=" w-10 max-sm:w-10 max-sm:hidden mt-2" /></span></div>
          </div>
          <div className="border-t border-dashed border-line">
            {mediaServices.map(({ label, icon }, index) => {
              const Icon = typeof icon === "string" ? null : icon;

              return (
              <motion.div
                key={label}
                className="grid grid-cols-[3rem_1fr] items-center gap-4 border-b border-dashed border-line py-4 sm:grid-cols-[4rem_1fr]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center justify-center border-r border-mustard pr-4 text-chalk-dim">
                  {typeof icon === "string" ? (
                    <Image src={icon} alt="" width={35} height={30} aria-hidden="true" />
                  ) : Icon ? (
                    <Icon size={29} strokeWidth={1.2} aria-hidden="true" />
                  ) : null}
                </div>
                <p className="font-mono text-[16px] max-sm:text-[16px] leading-[0.95] text-white/80 max-sm:text-2xl">
                  <span className="mr-3 text-mustard">{String(index + 1).padStart(2, "0")}</span>
                  {label}
                </p>
              </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="relative min-h-104 lg:min-h-full"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {projectImages.map(({ src, alt }, index) => (
            <motion.div
              key={src}
              className={`absolute w-[58%] borderbgimage bg-board p-1 shadow-[0_0_0_1px_rgb(243_239_226/0.2)] ${index === 0
                  ? "top-0 right-[9%] rotate-2"
                  : index === 1
                    ? "top-[24%] right-0 -rotate-3"
                    : index === 2
                      ? "top-[52%] left-[3%] -rotate-2"
                      : "right-[4%] bottom-0 rotate-2"
                }`}
              initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? -8 : 8 }}
              whileInView={{ opacity: 1, scale: 1, rotate: index === 0 ? 2 : index === 1 ? -3 : index === 2 ? -2 : 2 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.6 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[1.35] overflow-hidden">
                <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 25vw, 55vw" className="object-cover" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
