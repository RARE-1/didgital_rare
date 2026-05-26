"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <a
            href="/"
            className="text-white text-2xl md:text-3xl font-black tracking-tight"
          >
            RARE DIGITAL
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-white/70">

            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="hover:text-white transition-colors duration-300"
              >
                {item.title}
              </a>
            ))}

          </nav>

          {/* Desktop CTA */}
          <button className="hidden md:block px-6 py-3 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition-transform duration-300">
            Let’s Talk
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={30} />
          </button>

        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-screen w-[280px] bg-zinc-950 border-l border-white/10 transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">

          <h2 className="text-white text-2xl font-bold">
            Menu
          </h2>

          <button
            onClick={() => setIsOpen(false)}
            className="text-white"
          >
            <X size={30} />
          </button>

        </div>

        {/* Drawer Content */}
        <nav className="flex flex-col px-6 py-10">

          <div className="flex flex-col space-y-8 text-white text-lg">

            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                {item.title}
              </a>
            ))}

          </div>

          {/* CTA */}
          <button className="mt-12 w-full px-6 py-4 rounded-2xl bg-cyan-400 text-black font-semibold">
            Let’s Talk
          </button>

        </nav>

      </div>
    </>
  );
}