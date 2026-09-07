"use client";

import { motion } from "framer-motion";
import { ActionLink, ChalkHeading, SectionLabel } from "@/components/editorial";

export function NextMove() {
  return (
    <motion.section
      className="site-rail grid gap-12 py-20 sm:py-28 lg:grid-cols-[1fr_0.9fr] lg:items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -24 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* <SectionLabel>05 / your next move</SectionLabel> */}
        <ChalkHeading size="section" className="mt-7 max-w-xl max-sm:text-center text-[clamp(4rem,6vw,5rem)]">
          Have a <span className="text-mustard">&ldquo;What If?&rdquo;</span>
        </ChalkHeading>
        <p className="mt-8 max-w-md font-chalk text-2xl leading-tight text-chalk-dim">
          Tell us what you&apos;re thinking. We&apos;ll help you turn it into
          what&apos;s next.
        </p>
      </motion.div>
      <motion.div
        className="flex flex-col items-start gap-10 lg:items-end"
        variants={{
          hidden: { opacity: 0, x: 24 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="h-px w-full borderbgimagetop lg:w-72"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 1 }}
          aria-hidden="true"
        />
        <ActionLink href="/contact" variant="solid">
          Start a conversation
        </ActionLink>
      </motion.div>
    </motion.section>
  );
}
