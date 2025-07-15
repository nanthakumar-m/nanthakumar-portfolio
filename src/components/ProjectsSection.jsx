import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects, personalInfo } from "../data/mockData";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [filter] = useState("all");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.1 },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const filteredProjects = projects.filter((p) => true);

  const ProjectCard = ({ project }) => (
    <motion.div
      layout
      variants={projectVariants}
      className="group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500 transition duration-500 w-full">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 bg-gray-900">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="text-gray-300 mt-2">{project.description}</p>
      </div>
    </motion.div>
  );

  return (
    <section
      ref={ref}
      className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center text-3xl sm:text-4xl font-bold text-white mb-4">
          My <span className="text-purple-400">Projects</span>
        </motion.h2>
        <p className="text-center text-xl text-gray-400 max-w-2xl mx-auto pb-6">
          A showcase of my work, from small experiments to large-scale
          applications.
        </p>

        <AnimatePresence>
          <motion.div
            layout
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-8">
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer">
            <button className="px-6 py-3 bg-purple-600 text-white rounded-full">
              View All Projects
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
