import { motion } from "framer-motion";
import { timeline } from "../data/timeline";
import { certifications } from "../data/certifications";

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20">
      {/* Section Header */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      {/* Timeline */}
      <div className="relative border-l-2 border-blue-200 dark:border-blue-600 ml-4 md:ml-12">
        {timeline.map((item, idx) => (
          <motion.div
            key={idx}
            className="mb-8 ml-6 md:ml-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <span className="absolute -left-6 md:-left-8 w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full mt-1"></span>
            <p className="text-sm text-gray-500 dark:text-gray-400">{item.year}</p>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <div className="mt-16">
        <motion.h3
          className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Certifications
        </motion.h3>
        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <img src={cert.icon} alt={cert.name} className="w-16 h-16 mb-2" />
              <p className="text-gray-700 dark:text-gray-200 font-medium text-center">{cert.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
