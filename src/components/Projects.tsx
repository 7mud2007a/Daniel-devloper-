"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, FolderGit2, LineChart, ShoppingBag, ArrowUpRight } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Edge AI Trader",
      category: "FinTech & Artificial Intelligence",
      description:
        "An advanced algorithmic trading and analytics platform driven by multi-strategy AI models analyzing global asset classes in real time.",
      url: "https://edge-ai-trader.onrender.com/",
      tags: ["AI Engine", "Predictive Analytics", "Real-Time Systems", "Full-Stack"],
      icon: LineChart,
      accentColor: "from-cyan-500/20 via-blue-500/20 to-indigo-500/20",
      badgeGradient: "from-cyan-500 to-blue-600",
      stats: [
        { label: "Latency", value: "<15ms" },
        { label: "AI Models", value: "Multi-Agent" },
        { label: "Execution", value: "Real-Time" },
      ],
    },
    {
      title: "Garaue Chocolate",
      category: "Luxury Brand Experience",
      description:
        "An ultra-premium, sensory e-commerce showcase built for Ghraoui Chocolate, fusing rich artisanal heritage with high-converting modern aesthetics.",
      url: "https://garaue-chocolate.onrender.com/#hero",
      tags: ["Luxury UI/UX", "High Conversion", "Brand Architecture"],
      icon: ShoppingBag,
      accentColor: "from-amber-500/20 via-orange-500/20 to-rose-500/20",
      badgeGradient: "from-amber-500 to-orange-600",
      stats: [
        { label: "Design", value: "Bespoke Glass" },
        { label: "Conversion", value: "+140%" },
        { label: "Performance", value: "99/100" },
      ],
    },
  ];

  return (
    <section id="works" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-sky-500/30 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-widest mb-4"
        >
          <FolderGit2 className="w-3.5 h-3.5 text-sky-500" />
          <span>Selected Portfolio</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          Featured Live Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-400"
        >
          Explore live production applications built with precision, scalability, and Apple-grade UI design.
        </motion.p>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group relative rounded-3xl glass-card overflow-hidden border border-slate-200/80 dark:border-white/15 flex flex-col justify-between"
            >
              {/* Visual Header / Mock Interface Screen */}
              <div className={`relative h-56 sm:h-64 w-full bg-gradient-to-br ${project.accentColor} p-6 flex flex-col justify-between overflow-hidden border-b border-slate-200/60 dark:border-white/10`}>
                {/* Glass window control dots */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
                    <span className="ml-2 text-[11px] font-mono text-slate-600 dark:text-zinc-400 opacity-70">
                      {project.title.toLowerCase().replace(/\s+/g, "")}.app
                    </span>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/70 dark:bg-black/40 text-slate-900 dark:text-white backdrop-blur-md border border-slate-200/50 dark:border-white/15">
                    {project.category}
                  </span>
                </div>

                {/* Center Graphic */}
                <div className="relative z-10 my-auto flex items-center justify-center gap-4">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.badgeGradient} shadow-2xl text-white transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {project.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-medium">
                      Live Production Application
                    </p>
                  </div>
                </div>

                {/* Metrics ribbon */}
                <div className="grid grid-cols-3 gap-2 pt-3 z-10 border-t border-slate-300/40 dark:border-white/10 bg-white/30 dark:bg-black/20 backdrop-blur-md rounded-xl px-3 py-2">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-semibold">
                        {stat.label}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Details */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow space-y-6">
                <div>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-zinc-300 border border-slate-200/80 dark:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Link Button */}
                <div className="pt-4 border-t border-slate-200/60 dark:border-white/10">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center justify-between w-full px-5 py-3.5 rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-semibold text-sm hover:opacity-90 active:scale-[0.99] transition-all shadow-md"
                  >
                    <span className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 text-sky-400 dark:text-sky-600" />
                      <span>Launch Live Application</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
