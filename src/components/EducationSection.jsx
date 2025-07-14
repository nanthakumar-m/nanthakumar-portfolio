import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { education } from "../data/mockData";

const EducationSection = () => {
  const [activeTab, setActiveTab] = useState("ug");

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

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

  const activeEducation = education.find((edu) => edu.id === activeTab);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My academic journey and continuous learning path in technology and
              computer science.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {education.map((edu) => (
                <motion.button
                  key={edu.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(edu.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden ${
                    activeTab === edu.id
                      ? "text-white bg-gradient-to-r from-green-500 to-blue-600 shadow-lg shadow-green-500/25"
                      : "text-gray-400 bg-gray-800/50 hover:bg-gray-800 hover:text-white border border-gray-700 hover:border-green-500"
                  }`}>
                  {edu.id.toUpperCase()}
                  {activeTab === edu.id && (
                    <motion.div
                      layoutId="activeEducationTab"
                      className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-600 -z-10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Education Content */}
          <AnimatePresence mode="wait">
            {activeEducation && (
              <motion.div
                key={activeTab}
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                      {activeEducation.title}
                    </motion.h3>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-400 font-semibold">
                          {activeEducation.institution}
                        </span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-blue-400 font-semibold">
                          {activeEducation.period}
                        </span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-purple-400 font-semibold">
                          {activeEducation.grade}
                        </span>
                      </div>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-300 leading-relaxed text-lg">
                      {activeEducation.description}
                    </motion.p>
                  </div>

                  {/* Visual Element */}
                  <div className="flex justify-center lg:justify-end">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="relative">
                      <div className="w-64 h-64 bg-gradient-to-br from-green-500/20 to-blue-600/20 rounded-full backdrop-blur-sm border border-green-500/30 flex items-center justify-center">
                        <motion.div
                          animate={{
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-4 border-2 border-gradient-to-r from-green-500 to-blue-600 rounded-full opacity-30"></motion.div>

                        <div className="text-center z-10">
                          <div className="text-6xl mb-4">
                            {activeTab === "ug" && "🎓"}
                            {activeTab === "add-on" && "💻"}
                            {activeTab === "hsc" && "📚"}
                            {activeTab === "sslc" && "🏫"}
                          </div>
                          <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                            {activeEducation.id.toUpperCase()}
                          </div>
                        </div>
                      </div>

                      {/* Floating particles */}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default EducationSection;
