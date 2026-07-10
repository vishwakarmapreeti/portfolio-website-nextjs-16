"use client";

import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowRight } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import "./styles.css";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative hero-section overflow-hidden pt-16 md:pt-36 pb-16 md:pb-28" style={{ maxWidth: "1500px", margin: "0 auto" }}
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 h-[650px] w-[650px] rounded-full blur-[150px] opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,.8), transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">


          <ScrollReveal stagger={0.1}>

            {/* Badge */}

            <div className="inline-flex w-fit items-center rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-xs sm:text-sm text-purple-300 mb-6">
              🚀 Full Stack Developer • MERN Stack
            </div>

            {/* Name */}

            <p className="uppercase tracking-[0.2em] text-sm text-purple-400 mb-4">
              PREETI VISHWAKARMA
            </p>

            {/* Heading */}

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-[1-1] text-white">

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
                className="group hero-btn inline-flex items-center gap-3 rounded-xl bg-[#A855F7] px-7 py-4 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-purple-600"
              >
                <span style={{ margin: "0 auto", display: "flex", alignItems: "center", gap: "0.5rem"}}>
                  Download Resume

                  <FaArrowRight className="transition group-hover:translate-x-1" />
                </span>
              </a>

              <a
                href="#projects"
                className="rounded-xl hero-btn border border-purple-600 px-7 py-4 text-white transition hover:bg-purple-500/10"
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
            <div className="relative flex justify-center items-center mt-10 lg:mt-0">

              {/* Rotating Ring */}
              <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-[430px] lg:h-[430px] rounded-full border border-purple-500/30 animate-[spin_20s_linear_infinite]" />

              {/* Glow */}
              <div className="absolute w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full bg-purple-600/20 blur-[80px] lg:blur-[120px]" />

              <Image
                src="/images/avatar11.png"
                alt="Preeti Vishwakarma"
                width={420}
                height={420}
                priority
                className="
        relative z-10
        w-56
        sm:w-72
        md:w-80
        lg:w-[420px]
        h-auto
        object-contain
      "
              />

            </div>
          </ScrollReveal>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;