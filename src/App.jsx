import { useState, useEffect, useRef } from 'react';
import './App.css';
import Hero from './components/Hero';
import RotatingSphere from './components/Sphere';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import { Button } from './components/ui/button'; // Import Button component
import LaserConceptModal from './components/LaserConceptModal'; // Import the new modal component

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const laserRef = useRef(null);
  const plateRef = useRef(null);
  const [laserHeight, setLaserHeight] = useState(0);
  const [laserBottom, setLaserBottom] = useState(0);
  const [showLaserModal, setShowLaserModal] = useState(false); // New state for modal visibility
  const isMobile = window.innerWidth < 768;
  const plateHeight = isMobile ? '17.75rem' : '10rem';
  const plateOffsetPx = isMobile ? 285 : 160;


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    let animationFrameId;

    const updateLaserHeight = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight; // Max window scroll height
      const maxHeight = height/16 - 37*0.25; // Adjusted for the plate height (37px converted to rem)
      const scrollY = window.scrollY/16;
      const progress = Math.min(scrollY, maxHeight);
      setLaserHeight(progress);
      // console.log(progress);

      if (laserRef.current) {
        const rect = laserRef.current.getBoundingClientRect();
        setLaserBottom(rect.bottom);
      }

      animationFrameId = requestAnimationFrame(updateLaserHeight);
    };

    updateLaserHeight();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className={`relative h-full w-full transition-colors duration-500 ${darkMode ? 'dark bg-black text-white' : 'bg-white text-black'}`}>
      {/* <div className="relative"> */}
        <Hero darkMode={darkMode} setDarkMode={setDarkMode} />


      <div className='relative'>
        {/* Laser Beam */}
        <div
          ref={laserRef}
          className="absolute -top-10 left-5 md:left-16 w-1 pointer-events-none z-10 transition-colors duration-500"
          style={{
            height: `${laserHeight}rem`,
            backgroundColor: laserHeight > 0 ? "#7e22ce" : 'transparent',
            borderRadius: '9999px',
            boxShadow: laserHeight > 0 ? '0 0 25px 8px #7e22ce, 0 0 50px 15px #7e22ce' : 'none',
            filter: laserHeight > 0 ? 'blur(0.5px) brightness(1.8) saturate(1.5)' : 'none',
            transition: 'box-shadow 0.1s, filter 0.1s, background-color 0.1s',
          }}
        />

       
      </div>

      

      

        <div className="fixed bottom-0 right-0 transform translate-y-10 translate-x-10 z-10 w-32 h-32 md:w-48 md:h-48 transition-colors duration-500 z-9999"> {/* Smaller on mobile */}
          <RotatingSphere darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

      
      <AboutMe darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Portfolio darkMode={darkMode} laserBottom={laserBottom} />
      
      {/* Laser Plate */}
      {/* <div
      ref={plateRef}
      className="relative bottom-71 md:bottom-40 left-2 md:left-11.5 w-7 md:w-10 h-2 bg-yellow-700 rounded-lg shadow-lg transition-colors duration-500" 
      /> */}
      <div
      ref={plateRef}
      className="relative left-2 md:left-11.5 w-7 md:w-10 h-2 bg-yellow-700 rounded-lg shadow-lg transition-colors duration-500"
      style={{
        bottom: `${plateOffsetPx}px`, 
      }}
      />

      {/* Info Button for Laser Concept */}
      <div className="relative bottom-4 left-4 bg-gray-50 dark:bg-gray-950 z-50 transition-colors duration-500"> {/* Positioned at bottom-left */}
        <Button
          variant="outline" 
          className="shadow-md shadow-purple-500/50 dark:shadow-purple-700/50 transition-colors duration-500" // Adding a subtle glow
          onClick={() => setShowLaserModal(true)}
        >
          What's this laser?
        </Button>
      </div>

      <LaserConceptModal 
        isOpen={showLaserModal} 
        onClose={() => setShowLaserModal(false)} 
        darkMode={darkMode} 
      />
    </div>
  );
}

export default App;