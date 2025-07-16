import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

// You will define your actual role data here or fetch it
const experiences = [
  {
    id: 1,
    title: "Online STEM Tutor",
    company: "GoPeer",
    date: "Jan 2022 - Present",
    description: "Tutor high school students in physics, mathematics, computer science, and chemistry through online sessions, focusing on personalized learning and problem-solving skills. Tailored lessons to meet individual student needs. Provided sessions for AP STEM courses as well."
  },
  {
    id: 2,
    title: "Engineer Intern",
    company: "MetOx International",
    date: "May 2024 - Aug 2024",
    description: "Implemented Python based tools and algorithms to assist process engineers in automatically generating run reports with completed analysis. Provided code for analyzing X-ray diffraction data such as rocking \
    curves, theta-2theta scans, and 2theta scans. Also created the first ever implementation that automated the Bruker D8 ADVANCE XRD tool to periodically take measurements for 1km+ length of high temperature superconducting tape.\
    Also created tools to convert Bruker XRD data to a format usable by Python libraries such as Matplotlib and NumPy. Furthermore, created an interactive\
    plotting webpage using FastAPI and Plotly to visualize process engineering data after it was dumped into the data lake."
  },
  {
    id: 3,
    title: "Undergraduate Researcher",
    company: "University of Texas at Austin",
    date: "Jan 2022 - Dec 2022",
    description: "As part of the Freshman Research Initiative (FRI) program, I learned about the fundamentals of quantum computing and photonics. I worked on a project that involved designing and simulating quantum circuits using Qiskit, a Python-based quantum computing framework. Such circuits included implementing Grover's algorithm and the Deutsch-Josza algorithm. I also explored the use of photonic qubits for quantum information processing."
  },
];

export default function Experience({ darkMode }) {
  return (
    <section
      className={`flex flex-col items-center justify-center p-8 min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-800" // Adjusted background for contrast
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-white">
        Experience
      </h2>

      <div className="w-full max-w-4xl space-y-16">
        {experiences.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} darkMode={darkMode} />
        ))}
      </div>
    </section>
  );
}

function ExperienceItem({ experience, darkMode }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          controls.start({
            filter: 'blur(0px)', // Remove blur
            opacity: 1, // Full opacity
            transition: { duration: 0.8, ease: "easeOut" }
          });
          // Optional: Add a subtle measurement effect animation here
          // For example, a quick scale or brightness pulse
        } else {
          // Optional: Reset to initial state when out of view (for re-triggering)
          setInView(false);
          controls.start({
            filter: 'blur(5px)', // Re-apply blur
            opacity: 0.3, // Lower opacity
            transition: { duration: 0.5, ease: "easeIn" }
          });
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.3 // Trigger when 30% of the item is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      className={`relative p-6 rounded-lg shadow-xl border ${
        darkMode
          ? 'bg-gray-800 border-purple-800'
          : 'bg-gray-100 border-purple-300'
      } transition-colors duration-500`}
      initial={{ filter: 'blur(5px)', opacity: 0.3 }} // Initial unobserved state
      animate={controls}
    >
      <h3 className="text-2xl font-semibold mb-2 text-purple-600 dark:text-purple-400">
        {experience.title}
      </h3>
      <p className={`text-lg mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {experience.company} <span className="font-light">| {experience.date}</span>
      </p>
      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        {experience.description}
      </p>
      {/* Optional: Add a subtle particle/glow effect around the text when observed */}
    </motion.div>
  );
}