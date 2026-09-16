"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageSquare, Terminal, Cpu, Layout } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center pt-32 pb-20 px-4 overflow-hidden">
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-gradient-to-tr from-sky-500/20 via-indigo-500/15 to-purple-500/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-sky-400/10 rounded-full blur-[90px] pointer-events-none -z-10 animate-pulse" />

      {/* Grid pattern backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] -z-10" />

      {/* Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill border border-emerald-500/30 dark:border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-semibold mb-8 shadow-sm backdrop-blur-xl"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span>Available for High-Impact Projects</span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-5xl leading-[1.1] text-slate-900 dark:text-white"
      >
        Crafting Digital Perfection With{" "}
        <span className="bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Code, Design & AI
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-zinc-300 max-w-3xl font-normal leading-relaxed"
      >
        Hi, I&apos;m <span className="font-semibold text-slate-900 dark:text-white">Daniel</span> — an elite web designer and full-stack software engineer building ultra-fast, high-converting digital products for visionaries worldwide.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4"
      >
        {/* Primary CTA */}
        <a
          href="#works"
          className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-semibold text-base shadow-xl shadow-slate-900/10 dark:shadow-white/10 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
        >
          <Sparkles className="w-5 h-5 text-sky-400 dark:text-sky-600 transition-transform group-hover:rotate-12" />
          <span>Explore Selected Work</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>

        {/* Secondary CTA */}
        <a
          href="#contact"
          className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full glass-card hover:bg-slate-200/50 dark:hover:bg-white/10 text-slate-900 dark:text-white font-medium text-base hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
        >
          <MessageSquare className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
          <span>Let&apos;s Connect</span>
        </a>
      </motion.div>

      {/* Quick Spec Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl w-full pt-8 border-t border-slate-200/60 dark:border-white/10 text-slate-600 dark:text-zinc-400 text-xs sm:text-sm font-medium"
      >
        <div className="flex flex-col items-center gap-1.5">
          <Terminal className="w-5 h-5 text-sky-500" />
          <span>Full-Stack Mastery</span>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <Layout className="w-5 h-5 text-indigo-500" />
          <span>Apple-Grade UI/UX</span>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <Cpu className="w-5 h-5 text-purple-500" />
          <span>AI Architecture</span>
        </div>
      </motion.div>
    </section>
  );
};
