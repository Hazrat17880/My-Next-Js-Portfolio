// app/page.js (or pages/index.js depending on your setup)

import React from "react";
import Hero from "@/Components/home/HeroSection";
import About from "@/Components/home/AboutMe";
import Skills from "@/Components/home/Skills";
import Projects from "@/Components/home/FeatureProject";
import Experience from "@/Components/home/Experience";
import Education from "@/Components/home/Educations";
import Certificates from "@/Components/home/Certificates";
import Languages from "@/Components/home/Languages";
import Stats from "@/Components/home/Stats";
import CTA from "@/Components/home/CTA";

export default function HomePage() {
  return (
    <main className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white">
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="experience"><Experience /></section>
      <section id="education"><Education /></section>
      <section id="certificates"><Certificates /></section>
      <section id="languages"><Languages /></section>
      <section id="stats"><Stats /></section>
      <section id="cta"><CTA /></section>
    </main>
  );
}
