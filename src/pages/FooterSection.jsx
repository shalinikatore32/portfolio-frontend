import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white py-16 px-6 relative border-t border-sky-800">
      {/* Glowing gradient top border */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-500 blur-sm rounded-full"></div>

      <div className="max-w-6xl mx-auto text-center space-y-8 z-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-sky-400 drop-shadow-lg"
        >
          Let's Connect!
        </motion.h2>

        <div className="flex justify-center space-x-10">
          {[
            {
              icon: <FaGithub />,
              link: "https://github.com/shalinikatore32",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/shalinikatore/",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/katores32/",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
              className="text-3xl text-gray-300 hover:text-sky-400 transition-colors duration-300 bg-white/20 p-4 rounded-full backdrop-blur-md shadow-lg hover:shadow-xl hover:shadow-sky-500/50"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-sm text-gray-400"
        >
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-sky-400 font-medium">Shalini Katore</span>. All
          Rights Reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default FooterSection;
