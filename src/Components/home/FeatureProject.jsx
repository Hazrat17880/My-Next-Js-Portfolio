"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "Tabligh Markaz App",
    desc: "A full-stack app for managing registrations, roles, email verification, authentication, and real-time tracking.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    img: "/images/projects/tabligh.png",
    github: "https://github.com/yourusername/tabligh",
    live: "#",
    featured: true
  },
  {
    title: "Scan and Eat – Smart Dining Solution",
    desc: "Final year project — web + Android app for QR-based menus, orders, payments, and admin panel.",
    tech: ["Flutter", "Firebase", "MERN Stack"],
    img: "/images/projects/scanandeat.png",
    github: "https://github.com/yourusername/scan-and-eat",
    live: "#",
    featured: true
  },
  {
    title: "Quick Note – Note-Taking Web App",
    desc: "Secure note app with JWT auth, password recovery, search, and public/private note sharing.",
    tech: ["React.js", "Node.js", "MongoDB", "JWT"],
    img: "/images/projects/quicknote.png",
    github: "https://github.com/yourusername/quick-note",
    live: "#"
  },
  {
    title: "Abasyn Quora – Q&A Platform",
    desc: "Community-driven knowledge sharing platform with Q&A, answers, and discussions.",
    tech: ["React.js", "Express.js", "MongoDB"],
    img: "/images/projects/quora.png",
    github: "https://github.com/yourusername/abasyn-quora",
    live: "#"
  },
  {
    title: "Appointment Scheduler",
    desc: "App with calendar integration, real-time updates, and automated reminders for booking appointments.",
    tech: ["React.js", "Firebase", "Tailwind CSS"],
    img: "/images/projects/scheduler.png",
    github: "https://github.com/yourusername/scheduler",
    live: "#"
  },
  {
    title: "Bterm Application",
    desc: "Secure login (Google/Facebook), real-time search, detailed definitions, and clean responsive UI.",
    tech: ["React.js", "Node.js", "MongoDB"],
    img: "/images/projects/bterm.png",
    github: "https://github.com/yourusername/bterm",
    live: "#"
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio showcasing skills, projects, and experience with animations and responsiveness.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    img: "/images/projects/portfolio.png",
    github: "https://github.com/yourusername/portfolio",
    live: "https://your-portfolio-demo.com"
  }
];

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800 dark:text-white">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A showcase of my recent work, from full-stack applications to innovative solutions
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700 flex flex-col lg:flex-row ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image */}
              <div className="lg:w-1/2 relative">
                <div className="relative w-full h-64 lg:h-full">
                  <Image src={project.img} alt={project.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-3">
                      {project.live !== "#" && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white text-slate-800 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors">
                          Live Demo
                        </a>
                      )}
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-slate-800 text-white rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors">
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium rounded-full mb-4">
                  Featured Project
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800 dark:text-white">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
            Other <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Additional projects that showcase my diverse skills and experience
          </p>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700 flex flex-col group"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image src={project.img} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-slate-800 rounded-full hover:scale-110 transition-transform">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-slate-800 rounded-full hover:scale-110 transition-transform">
                    <FaGithub />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-center mt-16">
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">Interested in working together?</p>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all">
            Get In Touch <FaArrowRight />
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #80808015 1px, transparent 1px),
                            linear-gradient(to bottom, #80808015 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </section>
  );
}
