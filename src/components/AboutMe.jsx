import { motion } from "framer-motion";

export default function AboutMe({ darkMode }) {
  return (
    <>
      <section
        className={`flex flex-col md:flex-row items-center justify-center p-8 transition-colors duration-500 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
        }`}
      >
        <div className="flex-1 flex flex-col items-start text-left transition-colors duration-500 translate-x-50 xs:translate-x-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="max-w-2xl text-lg md:text-xl mb-6">
            I am a passionate quantum computing enthusiast with a background in physics. My goal is to explore the frontiers of quantum algorithms and photonic quantum computing.
          </p>
          <p className="max-w-2xl text-lg md:text-xl mb-6">
            In my free time, I enjoy working on projects that push the boundaries of modern computing and contribute to the open-source community.
          </p>
        </div>
        <motion.img
          src="me.JPG"
          alt="About Me"
          className="flex-1 max-w-xs md:max-w-sm w-full h-auto rounded-lg transition-transform duration-500 mb-8 md:mb-0 -translate-x-50 xs:translate-x-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      {/* Divider */}
      {/* <div className="w-full h-1 bg-gray-300 dark:bg-gray-700 " /> */}


    </>
  );
}
