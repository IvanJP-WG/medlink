import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center min-h-screen px-6 pt-32 bg-gradient-to-b from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
    >
      {/* Profile Picture */}
      <motion.img
        src="/profile.jpg"
        alt="Dr. Ivan Christopher"
        className="w-36 h-36 md:w-44 md:h-44 rounded-full shadow-xl object-cover mb-6 border-4 border-white dark:border-gray-800"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-3 text-gray-800 dark:text-gray-100 tracking-tight"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Dr. Ivan Christopher
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Dedicated to patient care, continuous learning, and advancing healthcare globally.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <a
          href="/cv.pdf"
          download
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-lg hover:bg-blue-700 transition"
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-teal-600 text-white font-medium rounded-xl shadow-lg hover:bg-teal-700 transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
