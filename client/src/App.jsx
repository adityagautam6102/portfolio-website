import { useState } from "react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Menu, X } from "lucide-react"

import profile from "./assets/profile.jpeg"
import hero from "./assets/hero.png"

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-800 sticky top-0 bg-black/80 backdrop-blur z-50">

        <h1 className="text-2xl font-bold">
          Aditya Gautam
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-300">

          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#certifications" className="hover:text-white transition">
            Certifications
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-20 left-0 w-full bg-black border-b border-gray-800 flex flex-col items-center gap-6 py-8 md:hidden">

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>

            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>

            <a href="#certifications" onClick={() => setMenuOpen(false)}>
              Certifications
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

          </div>
        )}

      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative z-10"
      >

        {/* Animated Text */}
        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "React Developer",
            2000,
            "Open Source Contributor",
            2000,
            "AI Enthusiast",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="uppercase tracking-[0.3em] text-gray-500 mb-4 text-sm md:text-base"
        />

        {/* Name */}
        <h1 className="text-6xl md:text-9xl font-extrabold leading-tight bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">
          Aditya
          <br />
          Gautam
        </h1>

        {/* Profile Image */}
        <div className="relative mt-12 group">

          <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full"></div>

          <img
            src={profile}
            alt="Aditya"
            className="
              relative
              w-52 h-52
              md:w-72 md:h-72
              object-cover
              rounded-full
              border-4 border-white/10
              shadow-2xl
              transition duration-500
              group-hover:scale-105
            "
          />

        </div>

        {/* Description */}
        <p className="text-gray-400 max-w-2xl mt-10 text-lg leading-relaxed">
          Computer Science Engineering student passionate about
          AI, modern web development, and open-source projects.
        </p>

        {/* Buttons */}
        <div className="flex gap-5 mt-10 flex-wrap justify-center">

          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl font-semibold hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-4 border border-gray-700 rounded-2xl hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
          >
            Contact Me
          </a>

          <a
            href="/resume.pdf"
            download
            className="px-8 py-4 border border-gray-700 rounded-2xl hover:bg-white/10 transition"
          >
            Download Resume
          </a>

        </div>

        {/* Social Icons */}
        <div className="flex gap-8 mt-10 text-4xl text-gray-400">

          <a
            href="https://github.com/adityagautam6102"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-white hover:scale-125 cursor-pointer transition duration-300" />
          </a>

          <a
            href="https://www.linkedin.com/in/aditya-gautam-48046b325/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-400 hover:scale-125 cursor-pointer transition duration-300" />
          </a>

          <a
            href="https://www.instagram.com/i_aditya_gautam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-pink-400 hover:scale-125 cursor-pointer transition duration-300" />
          </a>

        </div>

      </motion.section>

      {/* About */}
      <section
        id="about"
        className="py-24 px-8 border-t border-gray-800 relative z-10"
      >

        <div className="max-w-5xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-10"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 rounded-3xl border border-gray-800 backdrop-blur"
          >

            <p className="text-gray-300 text-lg leading-relaxed">
              I am a passionate full-stack developer currently pursuing
              Computer Science Engineering. I enjoy building modern,
              responsive applications and exploring artificial intelligence,
              backend systems, and scalable web technologies.
            </p>

          </motion.div>

        </div>

      </section>

      {/* Skills */}
      <section
        id="skills"
        className="py-24 px-8 relative z-10"
      >

        <div className="max-w-6xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-12"
          >
            Skills
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Git & GitHub"
            ].map((skill) => (

              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-gray-800 rounded-2xl p-8 text-center hover:bg-white/10 hover:-translate-y-3 hover:shadow-2xl transition duration-300 backdrop-blur"
              >

                <h3 className="text-xl font-semibold">
                  {skill}
                </h3>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* Projects */}
      <section
        id="projects"
        className="py-24 px-8 border-t border-gray-800 relative z-10"
      >

        <div className="max-w-7xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-12"
          >
            Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {[
              {
                title: "Smart Study Planner",
                desc: "AI-powered study planner with smart scheduling and productivity tools.",
                github: "https://github.com/adityagautam6102/smart-study-planner",
                live: "https://smart-study-planner-mauve.vercel.app/"
              },
              {
                title: "E-Commerce Website",
                desc: "Full MERN stack shopping platform with authentication and Razorpay integration.",
                github: "https://github.com/adityagautam6102",
                live: "#"
              },
              {
                title: "Portfolio Website",
                desc: "Modern responsive portfolio with animations and full-stack integration.",
                github: "https://github.com/adityagautam6102",
                live: "#"
              }
            ].map((project) => (

              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-gray-800 rounded-3xl overflow-hidden hover:bg-white/10 hover:-translate-y-3 hover:shadow-2xl transition duration-300 backdrop-blur"
              >

                <img
                  src={hero}
                  alt={project.title}
                  className="h-52 w-full object-cover"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex gap-4 mt-6">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:scale-105 transition"
                    >
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 border border-gray-700 rounded-xl hover:bg-white/10 transition"
                    >
                      Live Demo
                    </a>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* Certifications */}
      <section
        id="certifications"
        className="py-24 px-8 border-t border-gray-800 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-12"
          >
            Certifications
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Postman API Fundamentals Student Expert",
                issuer: "Postman",
                date: "2024"
              },
              {
                title: "AWS Academy Cloud Foundations",
                issuer: "AWS",
                date: "2024"
              },
              {
                title: "Full Stack Web Development",
                issuer: "Coursera",
                date: "2023"
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-gray-800 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl transition duration-300 backdrop-blur"
              >
                <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                <p className="text-purple-400 font-semibold mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-sm">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 px-8 border-t border-gray-800 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-8"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg mb-12"
          >
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            href="mailto:adityagautam6102@example.com"
            className="inline-block px-10 py-5 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl font-bold text-lg hover:scale-105 transition shadow-[0_0_40px_rgba(168,85,247,0.4)]"
          >
            Say Hello
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500 relative z-10">

        © 2026 Aditya Gautam. All rights reserved.

      </footer>

    </div>
  )
}

export default App