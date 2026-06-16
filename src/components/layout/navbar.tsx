"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navItems } from "@/content/nav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-jade text-white">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5" />
              <path d="M16 12h.01" />
            </svg>
          </span>
          <span className="font-display text-xl font-semibold text-ink">Cashlo</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="font-display text-sm font-semibold text-ink-soft transition-colors hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/become-a-partner" size="sm">Become a Partner</Button>
        </div>

        {/* Mobile toggle */}
        <button type="button" aria-label="Toggle menu" aria-expanded={open} className="text-ink lg:hidden" onClick={() => setOpen((v) => !v)}>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d={open ? "M6 6l12 12M6 18L18 6" : "M4 7h16M4 12h16M4 17h16"} />
          </svg>
        </button>
      </Container>

      {/* Mobile menu */}
      <div className={cn("border-t border-ink/5 lg:hidden", open ? "block" : "hidden")}>
        <Container className="flex flex-col gap-1 py-3">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 text-sm text-ink-soft hover:bg-mint hover:text-ink font-display font-semibold">
              {item.label}
            </Link>
          ))}
          <Button href="/become-a-partner" size="sm" className="mt-2">Become a Partner</Button>
        </Container>
      </div>
    </header>
  );
}