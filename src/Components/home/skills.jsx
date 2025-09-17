// src/Components/home/Skills.jsx
"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiFirebase,
  SiRedux,
  SiVercel,
  SiPostman
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

const skillsData = [
  { name: "React", icon: <FaReact className="text-sky-500" />, level: 90, color: "from-sky-400 to-sky-600" },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" />, level: 85, color: "from-gray-700 to-gray-900 dark:from-white dark:to-gray-300" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, level: 80, color: "from-green-500 to-green-700" },
  { name: "Express.js", icon: <SiExpress className="text-gray-600 dark:text-gray-300" />, level: 75, color: "from-gray-500 to-gray-700" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 70, color: "from-green-400 to-green-600" },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 95, color: "from-yellow-400 to-yellow-600" },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, level: 80, color: "from-blue-500 to-blue-700" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, level: 90, color: "from-cyan-400 to-cyan-600" },
  { name: "Figma", icon: <FaFigma className="text-pink-500" />, level: 75, color: "from-pink-500 to-pink-700" },
  { name: "Git & GitHub", icon: <SiGit className="text-orange-500" />, level: 85, color: "from-orange-500 to-orange-700" },
  { name: "Firebase", icon: <SiFirebase className="text-orange-400" />, level: 70, color: "from-orange-400 to-orange-600" },
  { name: "Redux", icon: <SiRedux className="text-purple-500" />, level: 80, color: "from-purple-500 to-purple-700" },
  { name: "Framer Motion", icon: <TbBrandFramerMotion className="text-pink-500" />, level: 85, color: "from-pink-400 to-pink-600" },
  { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" />, level: 90, color: "from-gray-600 to-gray-800 dark:from-white dark:to-gray-400" },
  { name: "VS Code", icon: <VscVscode className="text-blue-500" />, level: 95, color: "from-blue-500 to-blue-700" },
  { name: "Postman", icon: <SiPostman className="text-orange-500" />, level: 75, color: "from-orange-500 to-orange-700" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800 dark:text-white">
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                {/* Icon */}
                <div className="relative mb-4">
                  <span className="text-4xl">{skill.icon}</span>
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 -z-10`} />
                </div>

                {/* Name */}
                <p className="text-slate-700 dark:text-slate-300 font-medium text-center mb-3">{skill.name}</p>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  />
                </div>

                {/* Percentage */}
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                  className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium"
                >
                  {skill.level}%
                </motion.span>
              </div>
              {/* Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300 -z-10`} />
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700"
        >
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            Always Learning, Always Growing
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            I'm constantly exploring new technologies and improving my skills to stay at the forefront of web development.
          </p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium shadow-md hover:shadow-lg transition-all"
          >
            See My Work
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}