import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "🚀 Expense Management Application",
    description:
      "A web-based tool that helps users track and manage their expenses effectively.",
    link: "#",
  },
  {
    title: "🌐 3D Portfolio Website",
    description:
      "A fully interactive 3D portfolio built using React, Three.js, and Bootstrap.",
    link: "#",
  },
  {
    title: "📊 Data Visualization Dashboard",
    description:
      "A dashboard for visualizing large datasets using D3.js and React.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <motion.div
      className="projects-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
