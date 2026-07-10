import Image from "next/image";
import React from "react";
import ScrollReveal from "./ScrollReveal";

type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  location: string;
  image: string;
  technologies: string[];
  description: string[];
};

const experienceItems: ExperienceItem[] = [
  {
    company: "Ixora Innovation LLP",
    role: "Full Stack Developer (MERN Stack)",
    duration: "Aug 2024 – Present",
    location: "Mumbai, India",
    image: "/images/ixora.png",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "Tailwind CSS",
      "JWT",
    ],
    description: [
      "Developed 3+ scalable MERN Stack applications using React.js, Next.js, Node.js, Express.js, MongoDB, and MySQL.",
      "Improved backend API response time by 30% through query optimization and efficient API design.",
      "Implemented JWT Authentication and Role-Based Access Control (RBAC).",
      "Built responsive and reusable UI components with React and Tailwind CSS.",
      "Collaborated with designers and developers to deliver production-ready applications.",
    ],
  },
  {
    company: "MIS Innovate",
    role: "Junior Software Developer Intern",
    duration: "Feb 2024 – Aug 2024",
    location: "Mumbai, India",
    image: "/images/mis.png",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize",
      "REST API",
    ],
    description: [
      "Developed a Clinic Appointment & Patient Management System.",
      "Automated patient management workflows, reducing manual work by 40%.",
      "Integrated REST APIs for appointment scheduling and patient management.",
      "Improved booking efficiency by 70% with optimized workflows.",
      "Worked with MySQL and Sequelize ORM for efficient database operations.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Glow Effect */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[90vw] md:w-[1000px] h-[500px] opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at top, rgba(168,85,247,.45), transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Professional Experience
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-white/60 leading-7">
            Over 2 years of experience building secure, scalable and
            high-performance web applications using the MERN Stack, delivering
            responsive user experiences and robust backend solutions.
          </p>
        </div>

        {/* Cards */}
        <ScrollReveal
          stagger={0.15}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {experienceItems.map((item, index) => (
            <article
              key={index}
              className="group relative rounded-3xl border border-[#2f1c55] bg-[#140a26]/90 p-8 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_25px_60px_rgba(124,58,237,.35)]"
            >
              {/* Gradient */}
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(124,58,237,.25), transparent 60%)",
                }}
              />

              <div className="relative flex gap-6 items-start">
                {/* Logo */}
                <div className="relative w-20 h-20 shrink-0 rounded-xl bg-[#24113d] border border-[#3f2670] p-3">
                  <Image
                    src={item.image}
                    alt={item.company}
                    fill
                    className="object-contain p-3"
                    priority
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <span className="text-sm font-medium text-purple-400">
                    {item.duration}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    {item.role}
                  </h3>

                  <p className="mt-1 font-medium text-purple-300">
                    {item.company}
                  </p>

                  <p className="text-sm text-white/50 mb-6">
                    {item.location}
                  </p>

                  {/* Description */}
                  <ul className="space-y-3">
                    {item.description.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-white/70 text-sm leading-6"
                      >
                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-8">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full border border-purple-600 bg-[#1d0d34] text-purple-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WorkExperience;