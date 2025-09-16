"use client"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from 'react';
import { FaRocket, FaUsers, FaCode, FaSmile, FaTrophy, FaStar, FaHeart } from 'react-icons/fa';

function Counter({ from = 0, to, duration = 2, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(from);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const intervalRef = useRef();

  useEffect(() => {
    if (inView) {
      let start = from;
      const increment = (to - from) / (duration * 60);

      intervalRef.current = setInterval(() => {
        start += increment;
        if (start >= to) {
          setCount(to);
          clearInterval(intervalRef.current);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
    }

    return () => clearInterval(intervalRef.current);
  }, [from, to, duration, inView]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

const stats = [
  {
    id: 1,
    value: 5,
    label: "Projects Completed",
    icon: <FaRocket className="text-blue-500" />,
    color: "from-blue-500 to-cyan-500",
    suffix: "+"
  },
  {
    id: 2,
    value: 3,
    label: "Happy Clients",
    icon: <FaUsers className="text-green-500" />,
    color: "from-green-500 to-emerald-500",
    suffix: "+"
  },
  {
    id: 3,
    value: 12,
    label: "Technologies",
    icon: <FaCode className="text-purple-500" />,
    color: "from-purple-500 to-pink-500",
    suffix: "+"
  },
  {
    id: 4,
    value: 100,
    label: "Satisfaction Rate",
    icon: <FaSmile className="text-amber-500" />,
    color: "from-amber-500 to-orange-500",
    suffix: "%"
  }
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 text-8xl">🚀</div>
        <div className="absolute top-20 right-20 text-6xl">💻</div>
        <div className="absolute bottom-10 left-20 text-7xl">⭐</div>
        <div className="absolute bottom-20 right-10 text-8xl">❤️</div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center p-4 bg-white dark:bg-slate-800 rounded-full shadow-lg mb-6"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaTrophy className="text-3xl text-amber-500" />
          </motion.div>
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Achievements & Stats
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
            Numbers that showcase my journey, growth, and dedication to delivering exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur rounded-xl"></div>
              <div className="relative h-full bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-slate-200 dark:border-slate-700 group-hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                <motion.div 
                  className="p-3 rounded-xl bg-gradient-to-r mb-4 text-white text-2xl"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                >
                  {stat.icon}
                </motion.div>
                
                <h3 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r bg-clip-text text-transparent from-slate-800 to-slate-600 dark:from-white dark:to-slate-300">
                  <Counter from={0} to={stat.value} duration={2} suffix={stat.suffix} />
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm font-medium">
                  {stat.label}
                </p>
                
                {/* Animated progress bar for visual interest */}
                <div className="w-full mt-4 bg-slate-200 dark:bg-slate-700 rounded-full h-1">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.3 }}
                    className={`h-1 rounded-full bg-gradient-to-r ${stat.color}`}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional decorative elements */}
        <motion.div 
          className="flex justify-center mt-12 gap-2 text-slate-300 dark:text-slate-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="mx-1" />
          ))}
        </motion.div>
        
        <motion.p 
          className="text-center mt-6 text-slate-500 dark:text-slate-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          And counting... <FaHeart className="inline text-red-500 ml-1" />
        </motion.p>
      </div>
    </section>
  );
}