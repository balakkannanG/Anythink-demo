"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import type { Service } from "@/lib/types";

const iconMap: Record<Service["icon"], string> = {
  radio: "/icon/tv.png",
  mic: "/icon/mic.png",
  clapperboard: "/icon/video.png",
  share: "/icon/procast.png",
  party: "/icon/parters.png",
};

interface ServiceRowProps {
  service: Service;
  compact?: boolean;
}

export function ServiceRow({ service, compact = false }: ServiceRowProps) {
  const icon = iconMap[service.icon];

  return (
    <motion.article
      id={service.id}
      className={`group border-t border-dashed border-line py-6 transition-colors last:border-b hover:border-mustard/70 ${
        compact ? "lg:py-5" : "lg:py-7"
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid items-center gap-6 lg:grid-cols-[minmax(280px,1fr)_minmax(280px,1.3fr)_130px] lg:gap-8">
        {/* <span className="font-marker text-2xl max-xs:hidden max-sm:hidden max-md:hidden  text-mustard " aria-hidden="true">
          {service.number}
        </span> */}
        <div className="flex  items-center gap-10 max-sm:justify-center ">
          <span className="flex size-12 shrink-0 items-center justify-center  border-line text-mustard transition-colors group-hover:border-mustard">
            <Image src={icon} alt="" width={150} height={40} aria-hidden="true"  />
          </span>
          <h3 className="font-head text-[clamp(1.65rem,3vw,2.65rem)] uppercase leading-none text-chalk  ">
            {service.title}
          </h3>
        </div>
        <p className="max-w-xl text-[16px] font-mono leading-relaxed text-white/80 max-sm:text-center">{service.description}</p>
        <Link
          href={`/contact?service=${service.id}`}
          className="flex items-center justify-between gap-3 font-chalk text-xl leading-none text-mustard transition-colors hover:text-chalk max-sm:justify-center"
        >
          <span>{service.note}</span>
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
        </Link>
      </div>
    </motion.article>
  );
}

export function ServicePreview({ services }: { services: readonly Service[] }) {
  return (
    <div className="border-b border-line">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
          
        >
          <ServiceRow service={service} compact />
        </motion.div>
      ))}
    </div>
  );
}
