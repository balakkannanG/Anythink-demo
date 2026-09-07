import { HeroCover } from "@/components/homepage/HeroCover";
import { AboutPreview } from "@/components/homepage/AboutPreview";
import { WhatWeDo } from "@/components/homepage/WhatWeDo";
import { MediaServices } from "@/components/homepage/MediaServices";
import { MediaServicesTwo } from "@/components/homepage/MediaServicesTwo";
import { MeetOurTeam } from "@/components/homepage/MeetOurTeam";
import { WhyAnythink } from "@/components/homepage/WhyAnythink";
import { OurWork } from "@/components/homepage/OurWork";
import { NextMove } from "@/components/homepage/NextMove";
import { Testimonials } from "@/components/homepage/Testimonials";
import { CompanyLogos } from "@/components/homepage/CompanyLogos";
import { MemoryGallery } from "@/components/homepage/MemoryGallery";

export default function HomePage() {
  return (
    <>
      <HeroCover />
      <AboutPreview />
      <WhatWeDo />
      <MediaServices />
      <MediaServicesTwo />
      <MeetOurTeam />
      <WhyAnythink />
      <OurWork />
      <MemoryGallery />
      <CompanyLogos />
      <Testimonials />
      <NextMove />
    </>
  );
}
