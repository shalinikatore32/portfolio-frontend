import React from "react";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2022",
    event: "Started Web Development Journey",
    detail: "Learned HTML, CSS, JavaScript and began building small projects.",
  },
  {
    year: "2023",
    event: "Mastered MERN Stack",
    detail:
      "Built full-stack applications using MongoDB, Express, React, and Node.js.",
  },
  {
    year: "2024",
    event: "Contributed to Hackathons",
    detail:
      "Collaborated on team projects and earned recognition in tech events.",
  },
  {
    year: "2025",
    event: "Actively Seeking Opportunities",
    detail:
      "Eager to join dynamic teams and work on impactful real-world solutions.",
  },
];

const skills = [
  { name: "React", level: "90%" },
  { name: "Node.js", level: "85%" },
  { name: "MongoDB", level: "80%" },
  { name: "Express.js", level: "85%" },
  { name: "Tailwind CSS", level: "80%" },
  { name: "Git & GitHub", level: "90%" },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white py-20 px-6 overflow-hidden"
    >
      {/* Subtle Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-800/10 via-sky-900/30 to-[#0f172a] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent tracking-widest"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Timeline Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-12 relative"
          >
            {/* Decorative vertical glowing line */}
            <div className="absolute left-4 top-0 w-1 h-full bg-gradient-to-b from-sky-400 to-blue-500 rounded-full"></div>

            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="relative pl-12"
              >
                <span className="absolute left-0 top-1.5 w-5 h-5 bg-sky-400 rounded-full border-2 border-white animate-pulse"></span>
                <h4 className="text-2xl font-bold mb-1">
                  {item.year} -{" "}
                  <span className="text-sky-300">{item.event}</span>
                </h4>
                <p className="text-gray-300 text-base leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold mb-6 text-sky-300 tracking-wider">
              Skills
            </h3>
            <div className="space-y-8">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.15 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                    <motion.div
                      className="h-4 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
