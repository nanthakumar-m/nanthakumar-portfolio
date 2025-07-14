import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "../data/mockData";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const skillVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const SkillBar = ({ skill, index }) => {
    return (
      <motion.div variants={skillVariants} custom={index} className="group">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{skill.icon}</span>
            <span className="text-lg font-medium text-white">{skill.name}</span>
          </div>
          <span className="text-sm font-semibold text-blue-400">
            {skill.level}%
          </span>
        </div>

        <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{
              duration: 1.5,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative">
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
          </motion.div>

          {/* Glow effect */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{
              duration: 1.5,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            className="absolute top-0 h-full bg-gradient-to-r from-blue-400/50 to-purple-500/50 rounded-full blur-sm"
          />
        </div>
      </motion.div>
    );
  };

  return (
    <div
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}>
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Technologies and tools I learnt to bring ideas to life. Constantly
              learning and evolving.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 group">
                {/* Category Header */}
                <div className="text-center mb-8">
                  <motion.h3
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {category.category}
                  </motion.h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.items.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      index={categoryIndex * category.items.length + skillIndex}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Summary */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Continuous Learning Journey
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I believe in staying current with technology trends and
                continuously expanding my skill set. Whether it's exploring new
                frameworks, diving deeper into system architecture, or learning
                emerging technologies, I'm always eager to grow and adapt in
                this ever-evolving field.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;
