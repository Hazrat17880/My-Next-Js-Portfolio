"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaArrowRight, FaEnvelope, FaInstagram, FaYoutube, FaDiscord } from "react-icons/fa";

export default function Hero() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
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

  // Typing effect roles
  const roles = [
    "MERN Stack Developer",
    "Next.js Enthusiast",
    "Problem Solver",
    "Full-Stack Engineer",
  ];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const current = currentRole % roles.length;
    const fullText = roles[current];

    const handleTyping = () => {
      if (isDeleting) {
        // Delete text
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(typingSpeed / 1.5);
      } else {
        // Add text
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }

      if (!isDeleting && displayText === fullText) {
        // Pause at end of typing
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        // Move to next role after deleting
        setIsDeleting(false);
        setCurrentRole((currentRole + 1) % roles.length);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole, roles, typingSpeed]);

  // Social media links data
  const socialLinks = [
    { 
      icon: <FaGithub />, 
      href: "https://github.com/yourusername", 
      color: "hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-800",
      label: "GitHub"
    },
    { 
      icon: <FaLinkedin />, 
      href: "https://linkedin.com/in/yourusername", 
      color: "hover:bg-blue-700 hover:text-white dark:hover:bg-white dark:hover:text-blue-700",
      label: "LinkedIn"
    },
    { 
      icon: <FaTwitter />, 
      href: "https://twitter.com/yourusername", 
      color: "hover:bg-sky-500 hover:text-white dark:hover:bg-white dark:hover:text-sky-500",
      label: "Twitter"
    },
    { 
      icon: <FaEnvelope />, 
      href: "mailto:your.email@example.com", 
      color: "hover:bg-red-500 hover:text-white dark:hover:bg-white dark:hover:text-red-500",
      label: "Email"
    },
    { 
      icon: <FaInstagram />, 
      href: "https://instagram.com/yourusername", 
      color: "hover:bg-pink-600 hover:text-white dark:hover:bg-white dark:hover:text-pink-600",
      label: "Instagram"
    },
    { 
      icon: <FaYoutube />, 
      href: "https://youtube.com/yourchannel", 
      color: "hover:bg-red-600 hover:text-white dark:hover:bg-white dark:hover:text-red-600",
      label: "YouTube"
    },
    { 
      icon: <FaDiscord />, 
      href: "https://discord.gg/yourinvite", 
      color: "hover:bg-indigo-600 hover:text-white dark:hover:bg-white dark:hover:text-indigo-600",
      label: "Discord"
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
        
        {/* Animated gradient blobs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/30 dark:bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto relative z-10"
      >
        {/* Profile Image with elegant frame */}
        <motion.div
          variants={item}
          className="flex justify-center mb-10"
        >
          <div className="relative">
            <div className="w-44 h-44 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1.5 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-800">
                <img
                  src="/images/usman.jpg" // Fixed path - removed "public" prefix
                  alt="Hazrat Usman"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            
            {/* Online status indicator */}
            <div className="absolute bottom-4 right-4 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-slate-800 shadow-md"></div>
            
            {/* Decorative elements around profile */}
            <motion.div 
              className="absolute -top-2 -left-2 w-10 h-10 rounded-full bg-blue-600/20 dark:bg-blue-400/10"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.div 
              className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-purple-600/20 dark:bg-purple-400/10"
              animate={{
                rotate: -360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
                delay: 1
              }}
            />
          </div>
        </motion.div>

        {/* Greeting text */}
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium mb-2"
        >
          Hello, I'm
        </motion.p>

        {/* Name with enhanced gradient */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500"
        >
          Hazrat Usman
        </motion.h1>

        {/* Animated typing roles */}
        <motion.div
          variants={item}
          className="h-10 mb-4 flex items-center justify-center"
        >
          <p className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300">
            I'm a{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold border-r-2 border-blue-600 dark:border-blue-400 animate-pulse">
              {displayText}
            </span>
          </p>
        </motion.div>

        {/* Short tagline */}
        <motion.p
          variants={item}
          className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          I design and build scalable, modern web applications with a focus on performance, 
          accessibility, and exceptional user experiences.
        </motion.p>

        {/* CTA buttons with improved styling */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12"
        >
          <Link
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          
          {/* <Link
            href="/resume.pdf"
            target="_blank"
            className="group px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <FaDownload className="group-hover:animate-bounce" />
            <span>Download CV</span>
          </Link> */}
        </motion.div>

        {/* Social links section with title */}
        <motion.div
          variants={item}
          className="mb-12"
        >
          <h3 className="text-lg font-medium text-slate-600 dark:text-slate-300 mb-6">
            Connect with me
          </h3>
          
          {/* Social icons with improved styling */}
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md text-slate-600 dark:text-slate-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${social.color} flex items-center justify-center group relative`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <span className="text-xl">{social.icon}</span>
                <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-medium bg-slate-800 text-white px-2 py-1 rounded">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #80808012 1px, transparent 1px),
                            linear-gradient(to bottom, #80808012 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .bg-size-200 {
          background-size: 200% auto;
        }
        .bg-pos-0 {
          background-position: 0% center;
        }
        .bg-pos-100 {
          background-position: 100% center;
        }
      `}</style>
    </section>
  );
}