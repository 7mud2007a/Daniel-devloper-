"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { InstagramIcon } from "./Icons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full mt-20 border-t border-slate-200/60 dark:border-white/10 glass-panel py-12 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <a href="#" className="text-xl font-extrabold text-slate-900 dark:text-white">
            Daniel<span className="text-sky-500">.</span>
          </a>
          <p className="text-xs text-slate-500 dark:text-zinc-400">
            © {currentYear} Daniel. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 text-slate-600 dark:text-zinc-400">
          <a
            href="https://instagram.com/danielxdev_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2.5 rounded-full glass-pill hover:text-pink-500 dark:hover:text-pink-400 hover:scale-110 transition-all"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:scale-105 active:scale-95 transition-all"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
};
