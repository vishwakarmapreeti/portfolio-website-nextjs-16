import Image from "next/image";
import { MapPin, Calendar, ChevronRight } from "lucide-react";

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
    role: "Full Stack Developer",
    duration: "Aug 2024 – Present",
    location: "Mumbai, India",
    image: "/images/logo.png",
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
    image: "/images/miss.png",
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
    <section id="experience" className="relative py-20 sm:py-28 overflow-hidden bg-[#060010]">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-4xl h-[500px] opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at top, rgba(168,85,247,.5), transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-14 sm:mb-20">
          <p className="uppercase tracking-[0.3em] text-[11px] font-semibold text-purple-400/70 mb-3">
            Career
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Professional{" "}
            <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-white/45 leading-relaxed">
            Building secure, scalable and high-performance web applications
            using the MERN Stack — delivering responsive UIs and robust backend
            solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — hidden on mobile, shown md+ */}
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-purple-600/60 via-purple-600/20 to-transparent" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {experienceItems.map((item, index) => (
    <article
      key={index}
      className="group relative rounded-2xl border border-purple-900/40 bg-[#0e0520]/80 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-[0_20px_50px_rgba(124,58,237,.25)]"
    >
      {/* Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(124,58,237,.18), transparent 55%)",
        }}
      />

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="relative p-6">
        {/* Company */}
        <div className="flex items-start gap-4 mb-5">
          <div className="relative w-14 h-14 rounded-xl bg-[#1a0b30] border border-purple-800/50 overflow-hidden">
            <Image
              src={item.image}
              alt={item.company}
              fill
              className="object-contain p-2"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-bold text-white">
              {item.role}
            </h3>

            <p className="text-purple-400 font-semibold">
              {item.company}
            </p>

            <div className="flex flex-wrap gap-4 mt-2 text-white/50 text-sm">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {item.duration}
              </span>

              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {item.location}
              </span>
            </div>
          </div>
        </div>

        <div className="h-px bg-purple-900/40 mb-5" />

        <ul className="space-y-3 mb-6">
          {item.description.map((point, i) => (
            <li
              key={i}
              className="flex gap-2 text-white/70 text-sm"
            >
              <ChevronRight className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />
              {point}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs border border-purple-700/40 bg-purple-900/30 text-purple-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  ))}
</div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
