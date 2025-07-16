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
  const maxLaserHeightPct = 0.8;

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
      const height = document.body.scrollHeight;
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / height, maxLaserHeightPct);
      const targetHeight = progress * height;
      setLaserHeight(targetHeight);
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
      <div className="relative">
        <Hero darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Laser Beam */}
        <div
          ref={laserRef}
          className="absolute left-10 w-1 pointer-events-none z-10"
          style={{
            top: '95%',
            left: 'calc(40px + 1.3rem)',
            height: `${laserHeight}px`,
            backgroundColor: laserHeight > 0 ? '#7e22ce' : 'transparent',
            borderRadius: '9999px',
            boxShadow: laserHeight > 0 ? '0 0 25px 8px #7e22ce, 0 0 50px 15px #7e22ce' : 'none',
            filter: laserHeight > 0 ? 'blur(0.5px) brightness(1.8) saturate(1.5)' : 'none',
            transition: 'box-shadow 0.1s, filter 0.1s, background-color 0.1s',
          }}
        />

        {/* Plate at the end of the laser */}
        <div
          ref={plateRef}
          className="absolute w-10 h-2 bg-yellow-700 rounded-lg shadow-lg"
          style={{
            top: `calc(95% + ${document.body.scrollHeight * maxLaserHeightPct}px)`,
            left: '42px',
          }}
        />
      </div>

      

      <div className="fixed bottom-0 right-0 transform translate-y-10 translate-x-10 z-10 w-48 h-48 transition-colors duration-500 z-9999">
        <RotatingSphere darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      
      <AboutMe darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Portfolio darkMode={darkMode} laserBottom={laserBottom} />

      {/* Info Button for Laser Concept */}
      <div className="bottom-4 left-4 z-50"> {/* Positioned at bottom-left */}
        <Button
          variant="outline" // Using your existing outline button style
          className="shadow-md shadow-purple-500/30 dark:shadow-purple-700/30" // Adding a subtle glow
          onClick={() => setShowLaserModal(true)}
        >
          What's this laser?
        </Button>
      </div>

      {/* Laser Concept Modal */}
      <LaserConceptModal 
        isOpen={showLaserModal} 
        onClose={() => setShowLaserModal(false)} 
        darkMode={darkMode} 
      />
    </div>
  );
}

export default App;