"use client";

import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative contact-section  overflow-hidden py-24 sm:py-28"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[450px] w-[450px] rounded-full blur-[150px] opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,.7), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <ScrollReveal stagger={0.12}>
          {/* Heading */}
          <div className="text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-purple-400">
              Get In Touch
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Let's Work Together
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              I'm currently open to Full Stack Developer opportunities,
              freelance work, and exciting collaborations. If you have a project
              or opportunity in mind, let's connect.
            </p>
          </div>

          {/* Contact Card */}
          <div className="mt-16 rounded-[32px] border border-[#2f1c55] bg-[#140a26]/90 p-6 shadow-[0_20px_80px_rgba(124,58,237,.25)] backdrop-blur-xl sm:p-10 lg:p-12">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Left */}
              <div>
                <h3 className="mb-8 text-2xl font-semibold text-white">
                  Contact Information
                </h3>

                <div className="space-y-7">
                  {/* Email */}
                  <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-500/30 bg-purple-500/10">
                      <FaEnvelope className="text-xl text-purple-400" />
                    </div>

                    <div>
                      <p className="text-sm text-white/50">Email</p>

                      <Link
                        href="mailto:preetivishwakarma900@gmail.com"
                        className="break-all text-base text-white transition hover:text-purple-400"
                      >
                        preetivishwakarma900@gmail.com
                      </Link>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-500/30 bg-purple-500/10">
                      <FaMapMarkerAlt className="text-xl text-purple-400" />
                    </div>

                    <div>
                      <p className="text-sm text-white/50">Location</p>

                      <p className="text-base text-white">
                        Mumbai, Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div>
                <h3 className="mb-8 text-2xl font-semibold text-white">
                  Connect With Me
                </h3>

                <div className="flex gap-5">
                  {/* GitHub */}
                  <Link
                    href="https://github.com/vishwakarmapreeti"
                    target="_blank"
                    className="group"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#2f1c55] bg-[#1b0d31] text-white transition-all duration-300 group-hover:-translate-y-2 group-hover:border-purple-500 group-hover:text-purple-400 group-hover:shadow-[0_0_30px_rgba(168,85,247,.4)]">
                      <FaGithub size={28} />
                    </div>
                  </Link>

                  {/* LinkedIn */}
                  <Link
                    href="https://www.linkedin.com/in/preeti-vishwakarma-251611258/"
                    target="_blank"
                    className="group"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#2f1c55] bg-[#1b0d31] text-white transition-all duration-300 group-hover:-translate-y-2 group-hover:border-purple-500 group-hover:text-purple-400 group-hover:shadow-[0_0_30px_rgba(168,85,247,.4)]">
                      <FaLinkedin size={28} />
                    </div>
                  </Link>
                  <Link
                    href="mailto:preetivishwakarma900@gmail.com"
                    className="rounded-xl bg-[#A855F7] px-7 py-4 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-purple-600"
                  >
                    Say Hello 👋
                  </Link>
                </div>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap gap-4">
                  

                  {/* <Link
                    href="/resume.pdf"
                    target="_blank"
                    className="rounded-xl border border-purple-500 px-7 py-4 font-medium text-white transition hover:bg-purple-500/10"
                  >
                    Download Resume
                  </Link> */}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center">
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} Preeti Vishwakarma • Designed &
              Developed with ❤️ using Next.js, React & Tailwind CSS.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;