"use client";

import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowRight } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-28"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 h-[650px] w-[650px] rounded-full blur-[150px] opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,.8), transparent 70%)",
        }}
      />

     <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

   <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="max-w-7xl mx-auto px-6"></div>
          {/* LEFT */}<div className="max-w-7xl mx-auto px-6"></div>

          <ScrollReveal stagger={0.1}>

            {/* Badge */}

            <div className="inline-flex items-center rounded-full border border-purple-500/40 bg-purple-500/10 px-5 py-2 text-sm text-purple-300 mb-8">
              🚀 Full Stack Developer • MERN Stack
            </div>

            {/* Name */}

            <p className="uppercase tracking-[0.35em] text-sm text-purple-400 mb-4">
              PREETI VISHWAKARMA
            </p>

            {/* Heading */}

           <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white">

              Building

              <span className="block text-[#A855F7]">
                Modern Web
              </span>

              Applications

            </h1>

            {/* Typewriter */}

          <div className="mt-6 text-xl sm:text-2xl lg:text-3xl">

              <Typewriter
                words={[
                  "Full Stack Developer",
                  "React & Next.js Developer",
                  "Node.js Backend Developer",
                  "Building Scalable Web Applications",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={35}
                delaySpeed={1800}
              />

            </div>

            {/* About */}

            <p className="mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-white/70">

              Passionate Full Stack Developer specializing in

              <span className="text-white font-medium">
                {" "}
                React.js, Next.js, Node.js, Express.js,
                MongoDB, MySQL and TypeScript.
              </span>

              {" "}I enjoy creating secure, scalable and responsive web
              applications that deliver exceptional user experiences.

            </p>

            {/* Buttons */}

          <div className="mt-8 flex flex-col sm:flex-row gap-4">

              <a
                href="/resume.pdf"
                target="_blank"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#A855F7] px-7 py-4 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-purple-600"
              >
                Download Resume

                <FaArrowRight className="transition group-hover:translate-x-1" />

              </a>

              <a
                href="#projects"
                className="rounded-xl border border-purple-600 px-7 py-4 text-white transition hover:bg-purple-500/10"
              >
                View Projects
              </a>

            </div>

            {/* Stats */}

            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">

              <div>

                <h3 className="text-4xl font-bold text-[#A855F7]">
                  1.5+
                </h3>

                <p className="mt-2 text-white/60 text-sm">
                  Years Experience
                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold text-[#A855F7]">
                  4+
                </h3>

                <p className="mt-2 text-white/60 text-sm">
                  Major Projects
                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold text-[#A855F7]">
                  15+
                </h3>

                <p className="mt-2 text-white/60 text-sm">
                  Technologies
                </p>

              </div>

            </div>

          </ScrollReveal>

          {/* RIGHT */}

          <ScrollReveal delay={0.25}>

            <div className="relative flex justify-center">

              {/* Rotating Ring */}

              <div className="absolute h-[430px] w-[430px] rounded-full border border-purple-500/30 animate-[spin_20s_linear_infinite]" />

              <div className="absolute h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[120px]" />

              <div className="relative">

                <Image
                  src="/images/avatar11.png"
                  alt="Preeti Vishwakarma"
                  width={420}
                  height={420}
                  priority
                  className="relative z-10"
                />

              </div>

            </div>

          </ScrollReveal>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;