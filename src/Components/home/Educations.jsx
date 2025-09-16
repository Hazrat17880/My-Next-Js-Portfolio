"use client"
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaAward, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const education = [
  {
    level: "Bachelor's Degree",
    degree: "Bachelor of Science in Software Engineering",
    school: "Abasyn University",
    location: "Peshawar, Pakistan",
    duration: "2020 - 2024",
    grade: "3.8/4.0 CGPA",
    achievements: ["Dean's List 2022", "Best Final Year Project"],
    icon: <FaGraduationCap />
  },
  {
    level: "Intermediate",
    degree: "F.Sc. Pre-Engineering",
    school: "Islamia College Peshawar",
    location: "Peshawar, Pakistan",
    duration: "2018 - 2020",
    grade: "A Grade (85%)",
    achievements: ["Mathematics Excellence Award"],
    icon: <FaSchool />
  },
  {
    level: "Matriculation",
    degree: "Science Group",
    school: "Peshawar Model School",
    location: "Peshawar, Pakistan",
    duration: "2016 - 2018",
    grade: "A+ Grade (92%)",
    achievements: ["Science Fair Winner", "1st in Class"],
    icon: <FaAward />
  },
  {
    level: "Diploma",
    degree: "Diploma in Information Technology (DIT)",
    school: "Govt. College of Management Sciences",
    location: "Jalozai, Pakistan",
    duration: "2017 - 2018",
    grade: "A Grade (88%)",
    achievements: ["Top in Programming Module"],
    icon: <FaGraduationCap />
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4 text-slate-800 dark:text-white"
        >
          Education
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto"
        >
          My academic journey through formal education and specialized training programs
        </motion.p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500 dark:from-purple-600 dark:to-blue-600 transform -translate-x-1/2 rounded-full"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-start gap-6 relative"
              >
                {/* Timeline icon */}
                <div className="flex-shrink-0 relative z-10 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white shadow-lg">
                  {edu.icon}
                </div>
                
                {/* Content card */}
                <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-200 dark:border-slate-700">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 mb-2">
                        {edu.level}
                      </span>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white">{edu.degree}</h3>
                    </div>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 whitespace-nowrap">
                      {edu.grade}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                      <FaSchool className="text-purple-500" />
                      <span className="font-medium">{edu.school}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                      <FaMapMarkerAlt className="text-purple-500" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                      <FaCalendarAlt className="text-purple-500" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                  
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <span className="text-green-500 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}