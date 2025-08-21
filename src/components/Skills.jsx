import { motion } from "framer-motion";
import { skills } from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      {/* Section Header */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="relative group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md cursor-pointer overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            {/* Skill Name */}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              {skill.name}
            </h3>

            {/* Hover Description */}
            <p className="text-gray-600 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {skill.description}
            </p>

            {/* Hover Overlay (Optional visual effect) */}
            <span className="absolute inset-0 bg-blue-600/10 dark:bg-teal-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
