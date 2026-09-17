"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "./Icons";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Selected Works", href: "#works" },
    { name: "Investment", href: "#investment" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Floating Glass Container */}
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full flex items-center justify-between px-4 sm:px-6 py-3 rounded-full backdrop-blur-2xl transition-all duration-300 ${
            scrolled
              ? "bg-white/80 dark:bg-black/60 border border-slate-200/80 dark:border-white/15 shadow-lg shadow-black/5 dark:shadow-black/40"
              : "bg-white/50 dark:bg-black/30 border border-slate-200/50 dark:border-white/15"
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-900 dark:text-white group"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            <span className="font-sans font-extrabold tracking-tight group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
              Daniel<span className="text-sky-500 dark:text-sky-400">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-zinc-300 dark:hover:text-white rounded-full transition-all duration-200 hover:bg-slate-100/80 dark:hover:bg-white/10"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Instagram Pill */}
            <a
              href="https://instagram.com/danielxdev_"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 dark:from-pink-500/20 dark:via-purple-500/20 dark:to-indigo-500/20 border border-purple-500/30 text-slate-800 dark:text-purple-200 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-pink-500 dark:text-pink-400" />
              <span>@danielxdev_</span>
              <ArrowUpRight className="w-3 h-3 text-purple-400 opacity-70" />
            </a>

            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full bg-slate-100/80 dark:bg-white/10 text-slate-700 dark:text-zinc-200 hover:text-slate-900 dark:hover:text-white border border-slate-200/60 dark:border-white/10 hover:scale-110 active:scale-90 transition-all duration-200"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-slate-100/80 dark:bg-white/10 text-slate-700 dark:text-zinc-200 border border-slate-200/60 dark:border-white/10"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </motion.nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 p-4 rounded-3xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-2xl border border-slate-200/80 dark:border-white/15 shadow-2xl space-y-3"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-zinc-200 hover:text-slate-900 dark:hover:text-white rounded-2xl hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-200/60 dark:border-white/10 flex justify-between items-center">
                <a
                  href="https://instagram.com/danielxdev_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-semibold text-purple-700 dark:text-purple-300"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-500" />
                  <span>@danielxdev_</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
