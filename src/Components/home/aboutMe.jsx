"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCode, FaServer, FaPalette, FaCloud, FaArrowRight } from "react-icons/fa";

export default function About() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800 dark:text-white">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl z-10 border-4 border-white dark:border-slate-800">
                <Image
                  src="/images/usman.jpg"
                  alt="Hazrat Usman"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 z-0"></div>
              
              <motion.div 
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-blue-600/10 dark:bg-blue-400/5 z-0"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-purple-600/10 dark:bg-purple-400/5 z-0"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              variants={item}
              className="text-2xl md:text-3xl font-bold mb-6 text-slate-800 dark:text-white"
            >
              Crafting Digital Experiences with Code & Creativity
            </motion.h3>
            
            <motion.p 
              variants={item}
              className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed"
            >
              I'm a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">MERN Stack & Next.js Developer</span> 
              with <span className="font-semibold">2+ years</span> of experience building scalable, 
              user-friendly web applications. I focus on clean code, modern UI/UX, and performance 
              optimization to deliver seamless digital experiences.
            </motion.p>

            {/* Key Highlights with Icons */}
            <motion.div 
              variants={item}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {[
                { icon: <FaCode className="text-blue-600" />, text: "Frontend Development" },
                { icon: <FaServer className="text-purple-600" />, text: "Backend Development" },
                { icon: <FaPalette className="text-blue-600" />, text: "UI/UX Design" },
                { icon: <FaCloud className="text-purple-600" />, text: " Deployment" },
              ].map((skill, index) => (
                <div key={index} className="flex items-center p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <span className="text-xl mr-3">{skill.icon}</span>
                  <span className="text-slate-700 dark:text-slate-300">{skill.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              variants={item}
              className="grid grid-cols-3 gap-6 text-center mb-8"
            >
              {[
                { number: "2+", label: "Years Experience", color: "text-blue-600 dark:text-blue-400" },
                { number: "15+", label: "Projects Done", color: "text-purple-600 dark:text-purple-400" },
                { number: "7+", label: "Happy Clients", color: "text-blue-600 dark:text-blue-400" },
              ].map((stat, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                  <h3 className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.number}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={item}>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all group"
              >
                <span className="mr-2">Let's Connect</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}