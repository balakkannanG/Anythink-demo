import Link from "next/link";

import type { CaseStudy } from "@/lib/types";

interface WorkPreviewProps {
  caseStudies: readonly CaseStudy[];
}

export function WorkPreview({ caseStudies }: WorkPreviewProps) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {caseStudies.map((caseStudy) => (
        <Link
          key={caseStudy.id}
          href={`/work#${caseStudy.id}`}
          className="group chalk-frame flex min-h-60 flex-col justify-between p-5 transition-colors borderbgimageyellow sm:p-7"
        >
          {/* <div className="flex items-center justify-between gap-4 font-mono text-[0.57rem] uppercase tracking-[0.2em] text-mustard">
            <span>Work done for</span>
            <span>{caseStudy.number} / 03</span>
          </div> */}
          <div>
            {/* <h3 className="mt-10 font-chalk text-4xl leading-none text-chalk transition-colors group-hover:text-mustard">
              {caseStudy.title}
            </h3> */}
            <img src={caseStudy.image} alt={caseStudy.title} className="mt-4 w-50 max-sm:mx-auto borderbgimage" />
            <p className="mt-4 font-mono text-[16px] leading-tight text-white/80 max-sm:text-center max-md:text-center">
              {caseStudy.services
                .slice(0, 2)
                .map((service) => (typeof service === "string" ? service : service.label))
                .join(" · ")}
            </p>
          </div>
          <span className="mt-8 flex items-center justify-between borderbgimagetop pt-4 font-chalk text-[0.70rem] uppercase tracking-[0.15em] text-white/80 transition-colors group-hover:text-mustard">
            Explore story
            <span className="text-mustard text-[20px] transition-transform group-hover:translate-x-1" aria-hidden="true">
              ↗
            </span>
          </span>
        </Link>
      ))}
    </div>
    
  );
}
