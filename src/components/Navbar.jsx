import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="hidden md:flex space-x-8 font-medium">
          {["About", "Skills", "Portfolio", "Blog", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-teal-600 transition"
            >
              {item}
            </a>
          ))}
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
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4 space-y-3">
          {["About", "Skills", "Portfolio", "Blog", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block hover:text-teal-600 transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;
