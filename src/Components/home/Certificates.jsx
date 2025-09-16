"use client"
import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt, FaAward } from "react-icons/fa";

const certificates = [
  {
    title: "Introduction to Back-End Development",
    issuer: "Meta",
    issueDate: "May 2023",
    credentialLink: "#",
    skills: ["Node.js", "Express", "API Development"]
  },
  {
    title: "Node.js: Backend Development Fundamentals",
    issuer: "Coursera",
    issueDate: "April 2023",
    credentialLink: "#",
    skills: ["JavaScript", "REST APIs", "Authentication"]
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    issueDate: "March 2023",
    credentialLink: "#",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
  },
  {
    title: "React.js Specialization",
    issuer: "Coursera",
    issueDate: "February 2023",
    credentialLink: "#",
    skills: ["React", "Redux", "Hooks", "Context API"]
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    issueDate: "January 2023",
    credentialLink: "#",
    skills: ["Cloud Computing", "AWS Services", "Infrastructure"]
  },
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Google",
    issueDate: "December 2022",
    credentialLink: "#",
    skills: ["Figma", "Wireframing", "User Research"]
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Certifications & Credentials
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Industry-recognized certifications that validate my skills and expertise in various technologies and methodologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative h-full bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md border border-slate-200 dark:border-slate-700 group-hover:shadow-xl transition-all duration-300 flex flex-col">
                {/* Certificate Icon */}
                <div className="mb-4 flex justify-between items-start">
                  <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <FaCertificate className="text-2xl" />
                  </div>
                  <motion.a 
                    href={cert.credentialLink}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label="View credential"
                  >
                    <FaExternalLinkAlt />
                  </motion.a>
                </div>

                {/* Certificate Title */}
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2 line-clamp-2">
                  {cert.title}
                </h3>

                {/* Issuer Information */}
                <div className="mt-2 flex items-center text-slate-600 dark:text-slate-400 mb-4">
                  <span className="text-sm font-medium">Issued by {cert.issuer}</span>
                </div>

                {/* Issue Date */}
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-5">
                  <FaCalendarAlt className="text-blue-500" />
                  <span>Issued {cert.issueDate}</span>
                </div>

                {/* Skills */}
                <div className="mt-auto pt-4">
                  <div className="flex items-center gap-2 mb-2 text-sm text-slate-600 dark:text-slate-400">
                    <FaAward className="text-amber-500" />
                    <span>Skills validated:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 dark:bg-slate-700 text-white rounded-full font-medium hover:bg-slate-900 dark:hover:bg-slate-600 transition-colors"
          >
            View all credentials
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}