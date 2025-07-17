import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { forwardRef } from "react";
import QuantumParticles from "./QuantumParticles";

const Hero = forwardRef(function Hero({ darkMode, setDarkMode }, ref) {
  return (
    <section
      ref={ref}
      className={`relative h-screen flex flex-col items-center justify-center overflow-hidden transition-colors duration-500 z-999 ${
        darkMode ? "dark bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Theme Toggle Button */}
      <Button
        variant="ghost"
        className={`absolute top-6 right-6 z-50 transition-colors duration-500 ${
          darkMode ? "text-black bg-white" : "text-white bg-black"
        }`}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <Sun className="fill-white" /> : <Moon className="fill-black" />}
      </Button>

       {/* Background Particles */}
       <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
      <div
  className={`min-w-[200vw] min-h-[200vh] rounded-full [background-size:20px_20px] opacity-30 animate-[spin_300s_linear_infinite] ${
    darkMode
      ? "bg-[radial-gradient(circle,#7e22ce_1px,transparent_1px)]" 
      : "bg-[radial-gradient(circle,#e9b3ff_1px,transparent_1px)]" 
  }`}
/>
       </div>

      {/* Glowing Quantum Ring */}
      <motion.div
        className="absolute z-0 w-[500px] h-[500px] rounded-full bg-purple-300 dark:bg-purple-800 blur-3xl opacity-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1.5 }}
        transition={{ duration: 2 }}
      />

      {/* Quantum Particles Animation */}
      {/* Quantum Particles Animation */}
      {/* <QuantumParticles darkMode={darkMode} className="absolute inset-0 z-0" /> */}



      {/* Profile Image */}
      <motion.img
        src="/profile.jpg"
        alt="Pratham Gujar"
        className="w-40 z-999 h-40 mt-6 mb-12 md:w-52 md:h-52 rounded-full border-4 border-purple-500 shadow-xl transition-colors duration-500"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      />

      {/* Name and Degree */}
      <motion.div
        className="text-center mt-6 z-999 transition-colors duration-500"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">Pratham Gujar</h1>
        <p className="text-lg md:text-2xl text-purple-300 dark:text-purple-300 text-purple-700 mt-2">
          M.Sc. Quantum Computing — University of Maryland (<span className="italic">In Progress</span>)
        </p>
        <p className="text-lg dark:text-purple-300 text-purple-700 mt-2">
          B.Sc. Physics — University of Texas at Austin (2025)
        </p>
        <p className="dark:text-gray-400 text-gray-700 mt-4 max-w-md mx-auto">
          I want to push the boundaries of modern day computing by exploring photonic quantum computing and quantum algorithms.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6 mb-6 text-2xl">
          <a
            href="https://github.com/Psonu2003"
            target="_blank"
            rel="noreferrer"
            className={`transition-colors duration-500 hover:text-purple-400 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/pratham-gujar/"
            target="_blank"
            rel="noreferrer"
            className={`transition-colors duration-500 hover:text-purple-400 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:pratham.gujar30@gmail.com"
            className={`transition-colors duration-500 hover:text-purple-400 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  );
});

export default Hero;
