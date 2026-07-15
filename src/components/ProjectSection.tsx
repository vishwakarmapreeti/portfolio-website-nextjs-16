import Image from "next/image";
import React from "react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "New Hope Platform",
    subtitle: "Healthcare Management System",
    image: "/images/project1.png",
    liveUrl: "https://newhope.ixorainnovation.com/",
    description:
      "A comprehensive healthcare and clinic management platform built with Next.js and Node.js. Developed modules for patient management, appointment scheduling, billing, doctor availability, secure authentication, and role-based access control while optimizing backend APIs for performance and scalability.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
    ],
  },
  {
    title: "Doctor Management Dashboard",
    subtitle: "Healthcare Admin Dashboard",
    image: "/images/image1.png",
    liveUrl: "https://doc-frnt.ixorainnovation.com/dashboard",
    description:
      "A full-stack doctor management dashboard designed for healthcare organizations. Features include doctor scheduling, patient records, appointment management, secure authentication, REST API integration, and an intuitive admin interface for managing daily operations.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "REST API",
      "Tailwind CSS",
    ],
  },
  {
    title: "Viya Films",
    subtitle: "Corporate Portfolio Website",
    image: "/images/image2.png",
    liveUrl: "https://www.viyafilms.com/",
    description:
      "A modern and responsive corporate website for a film production company showcasing services, portfolio, projects, and company information. Built with a focus on engaging UI, smooth navigation, and excellent user experience across all devices.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Responsive Design",
    ],
  },
  {
    title: "Brightus Lighting",
    subtitle: "Business Website",
    image: "/images/image3.png",
    liveUrl: "https://brightuslighting.com/",
    description:
      "A professional business website for a lighting solutions company featuring product showcases, company information, service offerings, and contact functionality with a clean, responsive, and SEO-friendly design.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "SEO",
    ],
  },
  {
  title: "Kids Toys E-Commerce",
  subtitle: "E-Commerce Website",
    image: "/images/image4.png",
  liveUrl: "https://kids-toys-frontend.vercel.app/",
  description:
    "A modern and responsive e-commerce platform for kids' toys featuring product browsing, category filtering, shopping cart, product details, and a clean user interface designed to provide a smooth online shopping experience.",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "REST API",
  ],
},
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative space-y-28 p-10" style={{ maxWidth: "1400px", margin: "0 auto" }}>
      {projects.map((project, index) => (
        <div key={index} className="project-items">
          {/* glow */}
          <div
            className="pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[420px] opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(60% 60% at 60% 40%, rgba(125, 58, 242, 0.65) 0%, rgba(18, 8, 36, 0) 70%)",
            }}
          />

          <ScrollReveal
            stagger={0.12}
            className={`grid grid-cols-1 md:grid-cols-2 items-center gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* TEXT SIDE */}
            <div className={`relative z-10 ${index % 2 ? "md:order-2" : ""}`}>
              <div className="mb-10">
                <p className="text-xs text-[#a48cc9]">
                  {project.subtitle}
                </p>
                <h3 className="text-2xl mt-4 md:text-3xl font-semibold text-white/90">
                  {project.title}
                </h3>
              </div>

              {/* description */}
              <div className="relative z-20 max-w-2xl rounded-2xl p-5 bg-white/5 backdrop-blur-sm border border-white/10">
                <p className="text-sm text-white/75">
                  {project.description}
                </p>
              </div>

              {/* tech stack */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-[#1b0d31] border border-purple-600 text-xs text-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* Live Demo Button */}
<div className="mt-6">
  <a
    href={project.liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-purple-500"
  >
    Live Demo

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  </a>
</div>
            </div>

            {/* IMAGE SIDE */}
            <div className="relative">
              <div className="group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c] border border-[#2f1c55] shadow-[0_0_90px_rgba(168,85,247,0.28)]">
                <div className="overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={582}
                    height={640}
                    className="w-full h-auto transition-transform duration-3000 group-hover:-translate-y-[55%]"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      ))}
    </section>
  );
};

export default ProjectsSection;