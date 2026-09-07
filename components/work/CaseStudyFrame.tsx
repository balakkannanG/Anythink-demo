import type { CaseStudyFrame as CaseStudyFrameData } from "@/lib/types";

interface CaseStudyFrameProps {
  frame: CaseStudyFrameData;
  index: number;
}

export function CaseStudyFrame({ frame, index }: CaseStudyFrameProps) {
  const rotations = ["rotate-1", "-rotate-1", "rotate-1", "-rotate-1", "rotate-1"];
  const tone = frame.tone === "mustard" ? "border-mustard/60" : "border-line-strong";

  return (
    <div
      className={`relative h-full min-h-44 border-4 ${tone} hatch p-1 transition-transform duration-300 group-hover:scale-[1.015] ${rotations[index % rotations.length]}`}
    >
      <span className="absolute -top-4 left-1/2 z-10 h-8 w-16 -translate-x-1/2 rotate-2 bg-mustard/70" aria-hidden="true" />
      <div className="flex h-full min-h-40 items-end border border-line bg-board/60 p-4">
        <span className="font-chalk text-xl leading-none text-chalk ">{frame.label}</span>
      </div>
    
    </div>
  );
}
