"use client";

import { User, Briefcase, GraduationCap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-24 scroll-mt-24 bg-[#070010]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-purple-400 text-sm font-semibold">
              About Me
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
              Building Modern &
              <span className="text-purple-400"> Scalable Web Applications</span>
            </h2>

            <p className="mt-5 max-w-3xl mx-auto text-white/60 leading-8">
              I'm a Full Stack Developer passionate about creating secure,
              scalable, and high-performance web applications using modern
              JavaScript technologies. I enjoy solving real-world problems,
              building intuitive user experiences, and continuously learning
              new technologies.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Experience */}
            <div className="rounded-2xl border border-purple-900/40 bg-[#12071f] p-8">
              <Briefcase className="text-purple-400 mb-5" size={28} />

              <h3 className="text-xl font-semibold text-white mb-4">
                Experience
              </h3>

              <p className="text-white/70 leading-7">
                1.5+ years of professional experience developing MERN Stack
                applications with React.js, Next.js, Node.js, Express.js,
                MongoDB, and MySQL.
              </p>
            </div>

            {/* Summary */}
            <div className="rounded-2xl border border-purple-900/40 bg-[#12071f] p-8">
              <User className="text-purple-400 mb-5" size={28} />

              <h3 className="text-xl font-semibold text-white mb-4">
                Professional Summary
              </h3>

              <p className="text-white/70 leading-7">
                Experienced in building REST APIs, implementing authentication,
                optimizing database performance, creating responsive user
                interfaces, and deploying production-ready web applications
                following modern development practices.
              </p>
            </div>

            {/* Education */}
<div className="rounded-2xl border border-purple-900/40 bg-[#12071f] p-8">
  <GraduationCap className="text-purple-400 mb-5" size={28} />

  <h3 className="text-xl font-semibold text-white mb-6">
    Education
  </h3>

  <div className="space-y-6">
    <div>
      <h4 className="text-lg font-semibold text-white">
        M.Sc. Computer Science
      </h4>

      <p className="text-purple-400">
        Business Intelligence & Big Data Analytics
      </p>

      <p className="text-white/70 mt-1">
        Mumbai University
      </p>

      <p className="text-white/50 text-sm">
        2022 – 2024 • CGPA: <span className="text-purple-400">8.31</span>
      </p>
    </div>

    <div className="border-t border-white/10 pt-6">
      <h4 className="text-lg font-semibold text-white">
        B.Sc. Computer Science
      </h4>

      <p className="text-purple-400">
        Ismail Yusuf College
      </p>

      <p className="text-white/70 mt-1">
        Mumbai University
      </p>

      <p className="text-white/50 text-sm">
        2019 – 2022 • CGPA: <span className="text-purple-400">8.76</span>
      </p>
    </div>
  </div>
</div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;