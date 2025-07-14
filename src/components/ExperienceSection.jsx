import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "../data/mockData";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
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

  const timelineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  const ExperienceCard = ({ exp, index, isLast }) => {
    return (
      <motion.div
        variants={itemVariants}
        className="relative flex items-start group">
        {/* Timeline */}
        <div className="flex flex-col items-center mr-8">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-950 relative z-10 shadow-lg shadow-blue-500/25">
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.5,
              }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            />
          </motion.div>
          {!isLast && (
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              className="w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 mt-2 min-h-24 opacity-50"
            />
          )}
        </div>

        {/* Content Card */}
        <motion.div
          whileHover={{
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
          }}
          className="flex-1 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 group-hover:border-blue-500/30 transition-all duration-500 mb-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {exp.title}
              </h3>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-lg font-semibold text-blue-400">
                  {exp.company}
                </span>
                <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                <span className="text-gray-400">{exp.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-purple-400">
                  {exp.period}
                </span>
                <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                <span className="text-sm text-gray-400">{exp.type}</span>
              </div>
            </div>
          </div>

          {/* Responsibilities */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-300 mb-3">
              Key Responsibilities:
            </h4>
            <ul className="space-y-2">
              {exp.responsibilities.map((responsibility, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                  }
                  transition={{ delay: index * 0.2 + idx * 0.1 }}
                  className="flex items-start space-x-3 text-gray-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{responsibility}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold text-gray-300 mb-3">
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, techIdx) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ delay: index * 0.2 + techIdx * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 hover:border-blue-400 transition-all duration-300">
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}>
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My professional journey in the world of web development.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {experience.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
                index={index}
                isLast={index === experience.length - 1}
              />
            ))}
          </div>

          {/* Summary Stats */}
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceSection;
