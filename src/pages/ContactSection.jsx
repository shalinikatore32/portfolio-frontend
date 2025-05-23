import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiMessageCircle, FiEdit2 } from "react-icons/fi";
import { useForm } from "react-hook-form";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [status, setStatus] = useState(null);

  const onSubmit = async (data) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (res.ok) {
        setStatus("Message Sent! 🚀");
      } else {
        setStatus("Something went wrong, please try again.");
      }
    } catch (error) {
      setStatus("Something went wrong, please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-sky-400 mb-4 tracking-wide"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-300 mb-10"
        >
          Have a project in mind, want to collaborate, or just chat? Feel free
          to reach out!
        </motion.p>

        {status && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-xl font-semibold text-sky-500"
          >
            {status}
          </motion.div>
        )}

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-2xl space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <FiUser className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full pl-10 p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="relative">
              <FiMail className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full pl-10 p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          <div className="relative">
            <FiEdit2 className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Subject"
              className="w-full pl-10 p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              {...register("subject", { required: "Subject is required" })}
            />
            {errors.subject && (
              <span className="text-red-500 text-sm">
                {errors.subject.message}
              </span>
            )}
          </div>

          <div className="relative">
            <FiMessageCircle className="absolute left-3 top-3.5 text-gray-400" />
            <textarea
              placeholder="Your Message"
              className="w-full pl-10 p-3 rounded-md bg-gray-800 text-white h-32 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <span className="text-red-500 text-sm">
                {errors.message.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 transition-all duration-300 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-sky-500/40 glow"
          >
            Send Message ✉️
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
