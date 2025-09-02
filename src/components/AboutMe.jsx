import { motion } from "framer-motion";

export default function AboutMe({ darkMode }) {
  return (
    <>
      {/* Fancy Divider */}
      <div
        className={`
          w-full h-1.5 mx-auto rounded-full
          bg-gradient-to-r from-transparent via-purple-600 to-transparent
          dark:via-purple-400
          shadow-lg
          ${darkMode ? 'shadow-purple-700/50' : 'shadow-purple-500/50'}
          filter blur-[0.7px] brightness-150 saturate-150
          transition-all duration-500
        `}
      />
      <section
        className={`flex flex-col md:flex-row items-center justify-center p-8 transition-colors duration-500 ${
          darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-800"
        }`}
      >
        
        <div className="flex-1 flex flex-col items-start text-left ml-12 transition-colors duration-500 md:translate-x-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="max-w-lg md:max-w-2xl text-lg md:text-xl mb-6">
            Driven by a strong passion for quantum computing and grounded in a comprehensive physics background, my focus lies in photonic and superconducting quantum computing, quantum algorithms, and quantum machine learning. I am eager to leverage my skills to tackle cutting-edge challenges and drive innovation within these dynamic quantum domains.
          </p>
          <p className="max-w-lg md:max-w-2xl text-lg md:text-xl mb-6">
            In my free time, I enjoy working on projects or implementing concepts I come across. I also love to share my knowledge through teaching and mentoring others in STEM. Apart from those, I love gaming and outdoor activities like hiking and skiing.
          </p>
        </div>

        <motion.img
          src="me.JPG"
          alt="About Me"
          className="flex-1 max-w-3xs md:max-w-sm w-full h-auto rounded-lg transition-transform duration-500 mb-8 md:mb-0 md:-translate-x-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </section>

    </>
  );
}
