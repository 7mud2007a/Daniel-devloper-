"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, MessageCircle, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "./Icons";

export const ContactCTA = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl glass-card p-8 sm:p-14 text-center overflow-hidden border border-slate-200/80 dark:border-white/20 shadow-2xl"
      >
        {/* Glow ambient circle */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-sky-500/20 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-pink-500/30 text-pink-600 dark:text-pink-400 text-xs font-semibold uppercase tracking-widest mb-6">
          <MessageCircle className="w-3.5 h-3.5 text-pink-500" />
          <span>Let&apos;s Build Together</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-3xl mx-auto leading-tight">
          Have an Ambitious Project in Mind?
        </h2>

        <p className="mt-4 text-base sm:text-xl text-slate-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Whether you are launching a new startup, revamping an existing platform, or integrating AI, I am ready to craft your vision into perfection.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://instagram.com/danielxdev_"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white font-bold text-base shadow-lg shadow-purple-500/25 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <InstagramIcon className="w-5 h-5" />
            <span>Connect on Instagram (@danielxdev_)</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200/60 dark:border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Average Response Time: &lt; 2 Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>High Priority Availability</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
