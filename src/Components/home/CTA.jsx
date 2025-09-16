"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          Let’s build something amazing together!
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="#contact"
            className="px-8 py-3 bg-white text-blue-600 rounded-lg shadow-lg hover:bg-slate-100 transition-colors font-medium"
          >
            Contact Me
          </Link>
          <Link
            href="/services"
            className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
          >
            View My Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}