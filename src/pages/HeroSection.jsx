import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0f172a] to-[#1e293b] relative px-4 overflow-hidden"
    >
      {/* Background Image with overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://your-image-link.jpg")',
          opacity: 0.15,
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-black opacity-90"></div>

      <div className="relative text-center text-white space-y-6 max-w-3xl z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
            <Typewriter
              words={[
                "Hey, I'm Shalini",
                "I'm a Full Stack Developer",
                "I Build Seamless Web Experiences",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </motion.h1>

        {/* STATIC DESCRIPTION - NO Typewriter here */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300"
        >
          I am a passionate Full Stack Developer skilled in creating scalable
          web applications with a focus on seamless user experiences, clean
          code, and modern design.
        </motion.p>

        {/* Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center gap-6 text-2xl md:text-3xl mt-4"
        >
          <motion.a
            href="https://github.com/shalinikatore32"
            target="_blank"
            rel="noreferrer"
            className="bg-white/10 backdrop-blur-md p-3 rounded-full hover:text-sky-400 transition transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/shalinikatore/"
            target="_blank"
            rel="noreferrer"
            className="bg-white/10 backdrop-blur-md p-3 rounded-full hover:text-sky-400 transition transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:shalinikatore32@gmail.com"
            className="bg-white/10 backdrop-blur-md p-3 rounded-full hover:text-sky-400 transition transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>

        {/* Explore Button */}
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          className="inline-block mt-10 bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 animate-pulse scroll-smooth"
        >
          Explore My Work 🚀
        </motion.a>
      </div>

      {/* Optional bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
