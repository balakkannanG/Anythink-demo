"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Card {
  id: string | number;
}

interface MobileCardStackProps {
  cards: Card[];
  children: React.ReactNode;
}

export default function MobileCardStack({ cards, children }: MobileCardStackProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const contextRef = useRef<gsap.Context | null>(null);
  const isMobileRef = useRef<boolean>(false);

  const initAnimation = () => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const cardElements = cardsRef.current.filter(
      (card): card is HTMLDivElement => card !== null
    );

    if (cardElements.length === 0) return;

    // Kill existing trigger to prevent duplicates
    if (triggerRef.current) {
      triggerRef.current.kill();
      triggerRef.current = null;
    }

    // Initialize card positions
    gsap.set(cardElements, {
      y: (index) => (index === 0 ? 0 : window.innerHeight),
      scale: 1,
      opacity: 1,
      zIndex: (index) => 100 + index,
    });

    // Create timeline
    const tl = gsap.timeline();

    // First card hold
    tl.to({}, { duration: 0.5 });

    // Animate each card entering
    for (let i = 1; i < cardElements.length; i++) {
      const currentCard = cardElements[i];
      const previousCard = cardElements[i - 1];

      // Set current card as topmost
      tl.set(currentCard, { zIndex: 1000 + i }, 0);

      // Current card enters from bottom
      tl.to(
        currentCard,
        {
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      // Previous card moves back
      tl.to(
        previousCard,
        {
          y: -70,
          scale: 0.94,
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      );
    }

    // Final settle
    tl.to({}, { duration: 0.5 });

    // Create ScrollTrigger
    const trigger = ScrollTrigger.create({
      animation: tl,
      trigger: section,
      start: "top top",
      end: () => "+=" + tl.duration() * window.innerHeight,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      fastScrollEnd: false,
    });

    triggerRef.current = trigger;
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sectionElement = sectionRef.current;
    const checkMobileAndInit = () => {
      const mobile = window.innerWidth <= 767;
      isMobileRef.current = mobile;

      if (mobile) {
        initAnimation();
      } else if (triggerRef.current) {
        triggerRef.current.kill();
        triggerRef.current = null;
      }
    };

    // Initial check
    checkMobileAndInit();

    // Setup GSAP context
    contextRef.current = gsap.context(() => {
      checkMobileAndInit();
    }, sectionRef);

    // Handle resize
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const wasMobile = isMobileRef.current;
        const isMobile = window.innerWidth <= 767;

        if (wasMobile !== isMobile) {
          // Crossed breakpoint
          if (triggerRef.current) {
            triggerRef.current.kill();
            triggerRef.current = null;
          }

          if (isMobile) {
            initAnimation();
          }

          ScrollTrigger.refresh();
        } else if (isMobile) {
          // Mobile → mobile: just refresh
          ScrollTrigger.refresh();
        }

        isMobileRef.current = isMobile;
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);

      if (triggerRef.current) {
        triggerRef.current.kill();
        triggerRef.current = null;
      }

      if (contextRef.current) {
        contextRef.current.revert();
        contextRef.current = null;
      }

      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionElement) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="mobile-card-stack-section"
      data-component="mobile-card-stack"
    >
      <div className="mobile-card-stack-container">
        {children}
        <div className="mobile-card-stack-cards">
          {cards.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el as HTMLDivElement;
              }}
              className="mobile-card-stack-item"
              data-card-index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
