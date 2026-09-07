"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

const testimonials: readonly Testimonial[] = [
  {
    name: "Lisa Mukhedkar",
    role: "Founder and CEO",
    company: "Aukera",
    image: "/homepage/Testimonial/04.png",
    quote: "Rubina Patel has been a true partner to Aukera from our launch and has continued to support us till date. Her team brings thoughtful ideas, strong monitoring and real value to the brand.",
  },
  {
    name: "Dattatri Salagame",
    role: "CEO",
    company: "Bosch Global Software Tech",
    image: "/homepage/Testimonial/05.png",
    quote: "At BGSW, expression through voice matters. Rubina hosted meaningful conversations with warmth, clarity and brilliant preparation. She was friendly, thoughtful and brought real power to the endeavour.",
  },
  {
    name: "Uzma Irfan",
    role: "Director",
    company: "Prestige Group",
    image: "/homepage/Testimonial/07.png",
    quote: "Working with Anythink Media has been an exceptional experience. Their professionalism, attention to detail and collaborative approach made our podcast journey authentic, creative and truly memorable.",
  },
  {
    name: "Kajal Sharma",
    role: "Digital Marketing & Creative Design",
    company: "SPRL | The Organic World",
    image: "/homepage/Testimonial/06.png",
    quote: "Your expertise and professionalism have been key to the success of our campaigns. The team brings incredible patience, flexibility and a genuine commitment to delivering impactful results.",
  },
  {
    name: "C. K. Venkataraman",
    role: "Managing Director",
    company: "Titan",
    image: "/homepage/Testimonial/02.png",
    quote: "The voice of Titan came together beautifully. Anythink brought the right energy, care and execution to create an event that felt exceptional for our customers and our team.",
  },
  {
    name: "Fareed",
    role: "Head of CRM & Unified Loyalty Program",
    company: "Titan",
    image: "/homepage/Testimonial/01.png",
    quote: "From the first conversation to the final event, the team made every step easy. They understood what we stood for, worked with us patiently and delivered an awesome experience.",
  },
  {
    name: "Shruti Kejriwal",
    role: "Head - Loyalty",
    company: "Titan Company Limited",
    image: "/homepage/Testimonial/03.png",
    quote: "Anythink has worked on multiple customer events for Titan with creative thinking and dependable delivery. They understand the brand, work within budgets and bring great attention to detail.",
  },
];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(testimonials.length);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 },
    );

    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  const moveTo = (index: number, smooth = true) => {
    const track = trackRef.current;
    if (!track) return;

    const nextIndex = (index + testimonials.length) % testimonials.length;
    const currentPosition = positionRef.current;
    const currentIndex = currentPosition % testimonials.length;
    let difference = nextIndex - currentIndex;

    if (difference > testimonials.length / 2) difference -= testimonials.length;
    if (difference < -testimonials.length / 2) difference += testimonials.length;

    let nextPosition = currentPosition + difference;

    if (nextPosition < testimonials.length) nextPosition += testimonials.length;
    if (nextPosition >= testimonials.length * 2) nextPosition -= testimonials.length;

    positionRef.current = nextPosition;
    const card = track.children[nextPosition] as HTMLElement | undefined;
    if (card) {
      track.scrollTo({
        left: card.offsetLeft,
        behavior: smooth ? "smooth" : "auto",
      });
    }
    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    const track = trackRef.current;
    const firstMiddleCard = track?.children[testimonials.length] as HTMLElement | undefined;
    if (track && firstMiddleCard) {
      track.scrollLeft = firstMiddleCard.offsetLeft;
    }
  }, []);

  useEffect(() => {
    if (isPaused || !isInView) return;

    const interval = window.setInterval(() => {
      if (!document.hidden) moveTo(activeIndex + 1, false);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [activeIndex, isInView, isPaused]);

  return (
    <motion.section
      aria-labelledby="testimonials-title"
      className="border-y border-line bg-board"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      <div className="site-rail py-20 sm:py-28 ">
           <motion.div
             className="relative h-20 w-full hidden sm:block"
             initial={{ opacity: 0, x: 60 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: false, amount: 0.3 }}
             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
           >
             <span className="absolute right-10 top-5 inline-flex max-md:hidden">
               <img src="/homepage/section 6/Media Services 4.png" alt="underline" className="w-100 max-sm:hidden max-md:w-8" />
             </span>
           </motion.div>
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 id="testimonials-title" className="mt-7 max-w-3xl font-head text-[clamp(2.8rem,5vw,5.2rem)] uppercase  leading-[0.88] text-chalk max-sm:text-center">
              What people <span className="text-mustard">say.<span className="inline-flex text-mustard max-md:hidden "><img src="/homepage/section 6/Rectangle 7.png" alt="underline" className=" w-14 max-sm:hidden  max-md:w-8 rotate-340 " /></span></span>
            </h2>
          </motion.div>
          <motion.p
            className="max-w-xs font-chalk text-2xl leading-tight text-chalk-dim max-sm:text-center"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Good work leaves a conversation behind.
          </motion.p>
        </div>

        <motion.div
          ref={trackRef}
          className="mt-14 flex snap-x snap-mandatory scroll-smooth gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-live="polite"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {Array.from({ length: 3 }, (_, setIndex) => testimonials.map((testimonial) => (
            <article key={`${setIndex}-${testimonial.name}`} className="borderbgimage relative flex min-h-[27rem] w-[calc(100vw-3rem)] shrink-0 snap-start flex-col p-5 sm:w-[calc(50%-0.625rem)] sm:p-7 lg:w-[calc(33.333%-0.834rem)]">
              <span className="absolute left-[50%] top-0 h-7 w-20 -translate-y-1/2 rotate-[-4deg] bg-mustard/80 opacity-90" aria-hidden="true" />
              <div className="flex items-start gap-4 ">
                <div className="relative size-16 shrink-0 overflow-hidden borderbgimage bg-panel" aria-hidden="true">
                  <Image
                    src={testimonial.image}
                    alt=""
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 pt-1">
                  <h3 className="font-head text-xl uppercase leading-none text-mustard">{testimonial.name}</h3>
                  <p className="mt-2 text-xs italic leading-tight text-chalk-dim">{testimonial.role}</p>
                  <p className="text-xs italic leading-tight text-chalk-dim">{testimonial.company}</p>
                </div>
              </div>

              <div className="relative mt-8 flex flex-1 flex-col justify-between">
                <div>
                  <Quote size={27} fill="currentColor" className="mb-3 text-mustard" aria-hidden="true" />
                  <p className="text-sm leading-relaxed font-sans text-white">{testimonial.quote}</p>
                </div>
                <div className="mt-8 flex items-center justify-center border-t-5 borderbgimagetop  pt-4">
                  {/* <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-chalk-faint">Client note {String(index + 1).padStart(2, "0")}</span> */}
                  <span className="text-lg tracking-[0.12em] text-mustard" aria-label="5 out of 5 stars ">★★★★★</span>
                </div>
              </div>
            </article>
          )))}
        </motion.div>

        <motion.div
          className="mt-6 flex items-center justify-between gap-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex gap-2" aria-label="Select testimonial">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                aria-current={activeIndex === index}
                className={`h-1.5 transition-all ${activeIndex === index ? "w-8 bg-mustard" : "w-3 bg-line-strong hover:bg-chalk-dim"}`}
                onClick={() => moveTo(index)}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button type="button" className="flex size-11 items-center justify-center border border-line-strong text-chalk transition-colors hover:border-mustard hover:text-mustard" aria-label="Previous testimonial" onClick={() => moveTo(activeIndex - 1)}>
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button type="button" className="flex size-11 items-center justify-center border border-line-strong text-chalk transition-colors hover:border-mustard hover:text-mustard" aria-label="Next testimonial" onClick={() => moveTo(activeIndex + 1)}>
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}