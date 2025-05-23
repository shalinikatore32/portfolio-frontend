import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import img1 from "../assets/image.png";
import img2 from "../assets/image1.png";
import img3 from "../assets/image2.png";

const projects = [
  {
    title: "Event Management Platform",
    description:
      "A full-stack platform for creating, managing, and booking events, with user authentication and admin dashboards.",
    image: img1,
    github: "https://github.com/your-username/event-management-platform",
    demo: "https://event-management-demo.vercel.app",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat app with group and private messaging, built using MERN stack and Socket.io.",
    image: img2,
    github: "https://github.com/your-username/chat-application",
    demo: "https://chat-app-demo.vercel.app",
    tech: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
  },
  {
    title: "Task Manager App",
    description:
      "Full MERN stack application with task assignment, team collaboration, notifications, and real-time chat.",
    image: img3,
    github: "https://github.com/your-username/task-manager",
    demo: "https://taskmanager-demo.vercel.app",
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
];

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="bg-[#0f172a] text-white py-20 px-4 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14 text-sky-400">
          Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-[#1e293b] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover transform transition-transform duration-300 hover:scale-105"
              />

              <div className="p-6 flex flex-col flex-grow justify-between">
                {/* Title and Description */}
                <div>
                  <h3 className="text-2xl font-semibold text-sky-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mt-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mt-4">
                  <h4 className="text-sm text-sky-400 font-semibold mb-1">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-sky-700 hover:bg-sky-600 text-white text-xs px-3 py-1 rounded-full transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="mt-4 flex items-center gap-6 text-base">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-sky-400 transition"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
