"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, DollarSign, ArrowRight } from "lucide-react";
import { InstagramIcon } from "./Icons";

export const Investment = () => {
  const benefits = [
    "Apple-Grade Bespoke Glassmorphism Design",
    "Custom Full Control Admin Dashboard",
    "Scalable Secure Backend & Database Architecture",
    "AI Integration & Automated Workflows",
    "95+ Google PageSpeed / Core Web Vitals Guaranteed",
    "Clean, documented code and priority support",
  ];

  return (
    <section id="investment" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-purple-500/15 via-indigo-500/15 to-sky-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4"
        >
          <DollarSign className="w-3.5 h-3.5 text-emerald-500" />
          <span>Investment & Value</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          Predictable Pricing for Elite Digital Engineering
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto"
        >
          Transform your digital vision into a market-leading product with transparent pricing, zero compromise on quality, and guaranteed performance.
        </motion.p>
      </div>

      {/* Featured Pricing Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl glass-card p-8 sm:p-12 border border-slate-200/80 dark:border-white/20 shadow-2xl overflow-hidden max-w-3xl mx-auto"
      >
        {/* Top Glow Ribbon */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-200/60 dark:border-white/10">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Complete Full-Stack Package
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Turnkey Web Perfection
            </h3>
            <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
              End-to-end design, backend architecture, and AI deployment.
            </p>
          </div>

          <div className="text-left md:text-right shrink-0">
            <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-medium block">
              Starting From
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                $500
              </span>
              <span className="text-sm text-slate-500 dark:text-zinc-400 font-medium">
                USD
              </span>
            </div>
          </div>
        </div>

        {/* Benefits Checklist */}
        <div className="py-8 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-2">
            What&apos;s Included In Your Project:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-500 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm sm:text-base font-medium text-slate-800 dark:text-zinc-200 leading-snug">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-6 border-t border-slate-200/60 dark:border-white/10">
          <a
            href="https://instagram.com/danielxdev_"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 w-full py-4 px-8 rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 text-white font-bold text-base sm:text-lg shadow-xl shadow-indigo-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <InstagramIcon className="w-5 h-5" />
            <span>Claim Your Development Slot</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="text-center text-xs text-slate-500 dark:text-zinc-400 mt-3">
            Directly message <span className="font-semibold text-slate-700 dark:text-zinc-300">@danielxdev_</span> on Instagram for instant project scoping and turnaround timeline.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
