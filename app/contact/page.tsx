"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/forms/ContactForm";
import { ActionLink, ChalkHeading, QuestionCallout, SectionLabel } from "@/components/editorial";
import { contactDetails } from "@/lib/content";

export default function ContactPage() {
  return (
    <>
      <motion.section
        className="site-rail grid gap-14 py-20 sm:py-28 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionLabel>Start here / contact</SectionLabel>
          </motion.div> */}
          <motion.p
            className="mt-12 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-white/80"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            A thought, a brief, a possibility
          </motion.p>
          <ChalkHeading as="h1" size="display" className="mt-5 max-w-md">
            Let&apos;s make
            <span className="block text-mustard">what&apos;s next. <span className="inline-flex text-mustard "><img src="/homepage/rightsidethreeline.png" alt="rightsidethreeline" className=" w-10 max-sm:w-10 max-sm:hidden mt-2" /></span></span>
                 <span className="block text-mustard "><img src="/homepage/underline.png" alt="underline" className=" w-60 mb-2 mx-auto" /></span>
          </ChalkHeading>
          <motion.p
            className="mt-10 max-w-md border-l border-mustard pl-5 text-base leading-relaxed text-white/80 font-mono"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            Tell us what you are thinking about. We will bring the strategy, creativity and energy to help it move forward.
          </motion.p>
          <motion.p
            className="mt-5 font-chalk text-2xl text-mustard"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            Anythink is possible.<span className="block text-mustard "><img src="/homepage/underline.png" alt="underline" className=" w-40 mb-2 mx-auto lg:mx-0" /></span>
          </motion.p>
          {/* <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14"
          >
            <QuestionCallout />
          </motion.div> */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="borderbgimage"
        >
          <ContactForm />
        </motion.div>
      </motion.section>

      <motion.section
        className="border-y border-line bg-board"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="site-rail grid gap-6 py-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-16"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-mustard">Let&apos;s keep the idea moving</p>
          <p className="max-w-2xl text-sm leading-relaxed text-white/80 font-mono">Media, content, podcasts, films, digital, social, events and activations — bring us the question and we&apos;ll find what&apos;s next.</p>
        </motion.div>
      </motion.section>

      {/* <motion.section
        className="site-rail grid gap-10 py-16 sm:grid-cols-3 sm:gap-8 sm:py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0 * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <ContactDetail label="Email">
            <a className="hover:text-mustard" href={`mailto:${contactDetails.email}`}>
              {contactDetails.email}
            </a>
          </ContactDetail>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 1 * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <ContactDetail label="Where we work">{contactDetails.locations}</ContactDetail>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 2 * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <ContactDetail label="Find us">
            {contactDetails.socials.map((social, index) => (
              <span key={social}>
                <a
                  className="hover:text-mustard"
                  href={social === "Instagram" ? "https://www.instagram.com/" : "https://www.linkedin.com/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social}
                </a>
                {index < contactDetails.socials.length - 1 ? " · " : ""}
              </span>
            ))}
          </ContactDetail>
        </motion.div>

      </motion.section> */}

      <motion.section
        className="border-t border-line paper-grain"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="site-rail flex flex-col justify-between gap-6 py-12 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionLabel>Ready when you are</SectionLabel>
            <p className="mt-4 font-chalk text-3xl text-chalk">Let&apos;s make what&apos;s next.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <ActionLink href="/" variant="plain">
              Back to the beginning
            </ActionLink>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
}

function ContactDetail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-dashed border-line pb-6 sm:border-b-0 sm:pb-0">
      <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-mustard">{label}</p>
      <p className="mt-4 text-lg text-chalk-dim">{children}</p>
    </div>
  );
}
