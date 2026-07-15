"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
{
    label: "Skills",
    href: "#skills",
  },
    { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
        isScrolled || isOpen
          ? "bg-[#070010]/85 backdrop-blur-xl border-b border-purple-900/25 shadow-xl shadow-purple-950/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-8xl mx-auto px-5 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-purple-800 flex items-center justify-center shadow-lg shadow-purple-900/50 group-hover:shadow-purple-500/40 transition-all duration-300 group-hover:scale-105">
            <span className="text-white font-black text-lg leading-none select-none">P</span>
            <div className="absolute inset-0 rounded-xl ring-1 ring-white/10" />
          </div>
          <span className="hidden sm:block text-white font-bold text-lg tracking-tight">
            Preeti<span className="text-purple-400">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map(({ href, label }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-white/55 hover:text-white/90"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-lg bg-purple-500/12 border border-purple-500/25 shadow-inner" />
                )}
                <span className="relative">{label}</span>
              </Link>
            );
          })}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-500 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-600/35 active:scale-95"
          >
            Let&apos;s Talk
          </a>

          <button
            onClick={() => setIsOpen((p) => !p)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl text-white/70 hover:text-white hover:bg-purple-500/12 border border-transparent hover:border-purple-500/25 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-[#0b0018]/96 backdrop-blur-xl border-t border-purple-900/30 px-5 py-4 flex flex-col gap-0.5">
          {navLinks.map(({ href, label }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  isActive
                    ? "text-white bg-purple-500/12 border border-purple-500/20"
                    : "text-white/60 hover:text-white hover:bg-purple-500/8"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-3 flex justify-center rounded-xl bg-purple-600 hover:bg-purple-500 px-5 py-3 text-base font-semibold text-white transition-colors duration-200"
          >
            Let&apos;s Talk
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
