"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import type { NavItem } from "@/lib/types";

interface HeaderProps {
  navItems: readonly NavItem[];
}

function Wordmark() {
  return (
    <Image
      src="/anythink media org.svg"
      alt="anyTHINK Media and Events"
      width={150}
      height={60}
      className="h-auto w-32"
    />
  );
}

export function Header({ navItems }: HeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const isActive = (href: NavItem["href"]) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-black">
      <div className="site-rail flex min-h-[74px] items-center justify-between gap-6">
        <Link
          href="/"
          className="shrink-0 rounded-sm py-2 transition-opacity hover:opacity-80"
          aria-label="anyTHINK Media and Events home"
        >
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative py-3 italic font-bold text-xs font-mono uppercase tracking-[0.18em]  hover:text-mustard ${
                isActive(item.href) ? "text-mustard" : "text-white"
              }`}
            >
              {item.label}
              {isActive(item.href) ? (
                <span className="absolute right-0 bottom-1 left-0 h-px bg-mustard" />
              ) : null}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden min-h-10 items-center gap-3 border border-mustard/70 px-4 font-mono text-[0.62rem] font-medium uppercase tracking-[0.16em] text-mustard transition-colors hover:bg-mustard hover:text-ink md:inline-flex borderbgimageyellow"
        >
          Let&apos;s talk
          <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex size-11 items-center justify-center border border-line text-chalk transition-colors hover:border-mustard hover:text-mustard md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`${isOpen ? "block" : "hidden"} border-t border-line bg-board md:hidden`}
      >
        <nav className="site-rail flex flex-col py-3" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => setIsOpen(false)}
              className={`flex min-h-12 items-center justify-between border-b border-line py-3 font-mono text-xs font-medium uppercase tracking-[0.18em] transition-colors last:border-0 hover:text-mustard  ${
                isActive(item.href) ? "text-mustard" : "text-white"
              }`}
            >
              {item.label}
              {isActive(item.href) ? <span aria-hidden="true">—</span> : null}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
