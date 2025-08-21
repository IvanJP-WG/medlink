import { useState } from "react";
import { motion } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["About", "Skills", "Portfolio", "Blog", "Contact"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md fixed w-full z-50 shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 tracking-tight">
          MedLink
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-teal-600 transition"
            >
              {item}
            </a>
          ))}

          {/* Dark Mode Toggle */}
          <DarkModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-gray-900 dark:bg-gray-100"></span>
          <span className="w-6 h-0.5 bg-gray-900 dark:bg-gray-100"></span>
          <span className="w-6 h-0.5 bg-gray-900 dark:bg-gray-100"></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4 space-y-3 flex flex-col">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block hover:text-teal-600 transition"
              onClick={() => setIsOpen(false)} // close menu on click
            >
              {item}
            </a>
          ))}

          {/* Dark Mode Toggle in Mobile Menu */}
          <div className="mt-2">
            <DarkModeToggle />
          </div>
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;
