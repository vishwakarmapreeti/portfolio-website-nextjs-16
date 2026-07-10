"use client";

import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-white/10 overflow-hidden">
      {/* Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-56 w-56 rounded-full blur-[120px] opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,.8), transparent 70%)",
        }}
      />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 text-center md:flex-row">
        {/* Left */}
        <div>
          <h3 className="text-xl font-bold text-white">
            Preeti Vishwakarma
          </h3>

          <p className="mt-2 text-sm text-white/50">
            Full Stack Developer • MERN Stack
          </p>
        </div>

        {/* Center */}
        <div className="flex items-center gap-6">
          <Link
            href="mailto:preetivishwakarma900@gmail.com"
            className="text-white/60 transition hover:-translate-y-1 hover:text-purple-400"
          >
            <FaEnvelope size={22} />
          </Link>

          <Link
            href="https://github.com/vishwakarmapreeti"
            target="_blank"
            className="text-white/60 transition hover:-translate-y-1 hover:text-purple-400"
          >
            <FaGithub size={22} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/preeti-vishwakarma-251611258/"
            target="_blank"
            className="text-white/60 transition hover:-translate-y-1 hover:text-purple-400"
          >
            <FaLinkedin size={22} />
          </Link>
        </div>

        {/* Right */}
        <div className="text-sm text-white/40">
          © {new Date().getFullYear()} Preeti Vishwakarma.
          <br />
          Built with ❤️ using Next.js & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;