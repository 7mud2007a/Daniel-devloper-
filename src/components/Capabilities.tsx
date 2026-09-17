"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Palette, BrainCircuit, CheckCircle2, Zap } from "lucide-react";

export const Capabilities = () => {
  const capabilities = [
    {
      title: "Modern Architecture",
      icon: Layers,
      accent: "from-sky-500 to-blue-600",
      glowColor: "group-hover:border-sky-500/50",
      description:
        "High-performance full-stack web applications built for extreme speed, rock-solid security, and effortless enterprise scalability.",
      tech: ["Next.js 14 / React 19", "Node.js & TypeScript", "Enterprise Scalability", "Serverless Architecture"],
    },
    {
      title: "Apple-Grade Aesthetics",
      icon: Palette,
      accent: "from-indigo-500 to-purple-600",
      glowColor: "group-hover:border-indigo-500/50",
      description:
        "Bespoke glassmorphic user interfaces crafted with precision typography, depth effects, and fluid micro-interactions.",
      tech: ["Fluid Glassmorphism", "Apple Physics Motion", "Pixel-Perfect Layouts", "Responsive Precision"],
    },
    {
      title: "AI Integration",
      icon: BrainCircuit,
      accent: "from-purple-500 to-pink-600",
      glowColor: "group-hover:border-purple-500/50",
      description:
        "Autonomous AI systems, intelligent agentic workflows, and customized LLM capabilities seamlessly embedded into web applications.",
      tech: ["Autonomous Workflows", "LLM & Vector Pipelines", "Predictive Analytics", "Real-Time AI Engines"],
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4"
        >
          <Zap className="w-3.5 h-3.5 text-indigo-500" />
          <span>Core Capabilities</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          Engineering Meets Design Supremacy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-400"
        >
          Combining bleeding-edge software architecture with fluid visual art to create unforgettable digital experiences.
        </motion.p>
      </div>

      {/* Capabilities 3 Glass Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {capabilities.map((cap, index) => {
          const Icon = cap.icon;
          return (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`group relative p-8 rounded-3xl glass-card transition-all duration-300 border border-slate-200/80 dark:border-white/15 ${cap.glowColor} flex flex-col justify-between`}
            >
              {/* Subtle top gradient accent bar */}
              <div
                className={`absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r ${cap.accent} opacity-40 group-hover:opacity-100 transition-opacity rounded-full`}
              />

              <div>
                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cap.accent} p-0.5 shadow-lg mb-6 flex items-center justify-center`}>
                  <div className="w-full h-full bg-white dark:bg-zinc-950 rounded-[14px] flex items-center justify-center">
                    <Icon className="w-7 h-7 text-slate-900 dark:text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {cap.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {cap.description}
                </p>
              </div>

              {/* Competency bullet points */}
              <div className="pt-6 border-t border-slate-200/60 dark:border-white/10 space-y-2.5">
                {cap.tech.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
