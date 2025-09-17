"use client"
import { motion } from "framer-motion";
import { FaLanguage, FaGlobe, FaCheckCircle, FaStar } from "react-icons/fa";

const languages = [
  { 
    name: "English", 
    level: "Proficient",
    proficiency: 90,
    description: "Professional working proficiency",
    certified: true,
    icon: "🇺🇸"
  },
  { 
    name: "Urdu", 
    level: "Fluent",
    proficiency: 100,
    description: "Full professional proficiency",
    certified: false,
    icon: "🇵🇰"
  },
  { 
    name: "Pashto", 
    level: "Native",
    proficiency: 100,
    description: "Native or bilingual proficiency",
    certified: true,
    icon: "🇦🇫"
  }
 
];

// Helper function to determine color based on proficiency
const getProficiencyColor = (proficiency) => {
  if (proficiency >= 90) return "from-green-500 to-emerald-600";
  if (proficiency >= 70) return "from-blue-500 to-cyan-600";
  if (proficiency >= 50) return "from-amber-500 to-orange-500";
  return "from-gray-400 to-gray-500";
};

// Helper function to get proficiency text color
const getProficiencyTextColor = (proficiency) => {
  if (proficiency >= 90) return "text-green-600 dark:text-green-400";
  if (proficiency >= 70) return "text-blue-600 dark:text-blue-400";
  if (proficiency >= 50) return "text-amber-600 dark:text-amber-400";
  return "text-gray-500 dark:text-gray-400";
};

export default function Languages() {
  return (
    <section id="languages" className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center justify-center p-3 bg-white dark:bg-slate-800 rounded-full shadow-md mb-6"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaGlobe className="text-3xl text-blue-600 dark:text-blue-400" />
          </motion.div>
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Language Proficiency
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
            The languages I speak and my level of proficiency in each, enabling effective communication in diverse environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 blur transition-all duration-300 rounded-2xl"></div>
              <div className="relative h-full bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md border border-slate-200 dark:border-slate-700 group-hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute -right-6 -top-6 text-7xl opacity-5 rotate-12">{lang.icon}</div>
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xl">
                      {lang.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                        {lang.name}
                      </h3>
                      <p className={`text-sm font-semibold ${getProficiencyTextColor(lang.proficiency)}`}>
                        {lang.level}
                      </p>
                    </div>
                  </div>
                  {lang.certified && (
                    <motion.div 
                      className="flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1.5 rounded-full"
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      <FaCheckCircle className="text-xs" />
                      <span>Certified</span>
                    </motion.div>
                  )}
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-5 text-sm relative z-10">
                  {lang.description}
                </p>

                {/* Proficiency bar */}
                <div className="mb-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Proficiency
                    </span>
                    <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                      {lang.proficiency}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.2, ease: "easeOut" }}
                      className={`h-3 rounded-full bg-gradient-to-r ${getProficiencyColor(lang.proficiency)} relative`}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                        animate={{ x: ["0%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                      />
                    </motion.div>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-500">
                    Skill level
                  </span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        className={`p-1 ${i < Math.floor(lang.proficiency / 20) ? getProficiencyTextColor(lang.proficiency) : "text-slate-300 dark:text-slate-600"}`}
                      >
                        <FaStar className="text-sm" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700"
        >
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4 text-center flex items-center justify-center gap-2">
            <FaCheckCircle className="text-emerald-500" />
            Proficiency Levels
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-750 rounded-lg">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600"></div>
              <span className="text-sm text-slate-600 dark:text-slate-400">Fluent/Native (90-100%)</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-750 rounded-lg">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600"></div>
              <span className="text-sm text-slate-600 dark:text-slate-400">Proficient (70-89%)</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-750 rounded-lg">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500"></div>
              <span className="text-sm text-slate-600 dark:text-slate-400">Intermediate (50-69%)</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-750 rounded-lg">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-gray-400 to-gray-500"></div>
              <span className="text-sm text-slate-600 dark:text-slate-400">Basic (0-49%)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}