"use client"
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "NSA Blogger",
    duration: "Nov 2022 – Jul 2023",
    location: "Remote",
    desc: "Worked on platform website and seller dashboard. Implemented email verification, multilingual support (Pashto, English, Persian), monthly report generation, and real-time order tracking.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    type: "Full-time"
  },
  {
    role: "MERN Stack Developer",
    company: "HalaEats - Online Food Ordering",
    duration: "Oct 2024 – Present",
    location: "Remote",
    desc: "Developing food ordering platform with full-stack features: authentication, payments, and seller dashboard.",
    tech: ["MERN Stack", "Payment Integration", "Real-time Updates"],
    type: "Contract"
  },
  {
    role: "Shop Manager & Sales Representative",
    company: "Local Business",
    duration: "2021 – 2022",
    location: "On-site",
    desc: "Managed daily sales, customer service, inventory, and team coordination to ensure smooth operations.",
    tech: ["Sales", "Inventory Management", "Customer Service"],
    type: "Full-time"
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-800 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800 dark:text-white">
            Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My professional journey and the roles that have shaped my career
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 transform -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-12 relative`}
            >
              {/* Timeline dot */}
              <div className="absolute left-7 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-slate-800 shadow-lg transform -translate-x-1/2 -translate-y-1 z-10"></div>

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
                  {/* Badge */}
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium rounded-full mb-4">
                    {exp.type}
                  </span>

                  {/* Role and Company */}
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-4">
                    {exp.company}
                  </p>

                  {/* Duration and Location */}
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-blue-500" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-purple-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {exp.desc}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="md:w-1/2"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 p-8 bg-slate-50 dark:bg-slate-700/30 rounded-2xl border border-slate-200 dark:border-slate-600"
        >
          <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
            Ready to bring your ideas to life?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Let's work together to create something amazing.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all"
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #80808010 1px, transparent 1px),
                            linear-gradient(to bottom, #80808010 1px, transparent 1px);
          background-size: 30px 30px;
        }
        
        @media (max-width: 768px) {
          .relative::before {
            left: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}