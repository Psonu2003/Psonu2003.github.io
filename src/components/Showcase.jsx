import React, { useRef, useState, useEffect } from 'react';
import BeamSplitter from './BeamSplitter';
import Receiver from './Receiver';
import PortfolioComponents from './PortfolioComponents';

export default function Showcase({ darkMode, laserBottom, refID }) {
  const splitterRef = useRef(null);
  const [receiverActive, setReceiverActive] = useState(false);
  const [beamTriggered, setBeamTriggered] = useState(false);
  const [laserLength, setLaserLength] = useState(0);
  const [absSplitterY, setAbsSplitterY] = useState(0);
  const [absLaserBottom, setAbsLaserBottom] = useState(0);

  // Detect if vertical beam hits the BeamSplitter square
  useEffect(() => {
    if (splitterRef.current) {
      const rect = splitterRef.current.getBoundingClientRect();
      const splitterCenterY = rect.top + rect.height / 2;

    const absoluteSplitterY = window.scrollY + splitterCenterY;
    setAbsSplitterY(absoluteSplitterY);
    const absoluteLaserBottom = laserBottom + window.scrollY;
    setAbsLaserBottom(absoluteLaserBottom);
    // console.log(`BeamSplitter center Y relative to page: ${absoluteSplitterY}px`);
    // console.log(`Absolute Laser Bottom Y: ${laserBottom + window.scrollY}`);

      if (laserBottom >= splitterCenterY && !beamTriggered) {
        console.log('Laser beam is touching the BeamSplitter square!');
        // console.log(`BS Y: ${splitterCenterY}, Laser Bottom Y: ${laserBottom}`);
        setBeamTriggered(true);
        
      }
    }
  }, [laserBottom, beamTriggered]);

  // Grow the horizontal beam if triggered
//   useEffect(() => {
//     if (!beamTriggered) return;

//     let raf;
//     const growBeam = () => {
//       setBeamLength((prev) => Math.min(prev + 4, 300)); // Smooth grow up to 300px
//       raf = requestAnimationFrame(growBeam);
//     };

//     growBeam();
//     return () => cancelAnimationFrame(raf);
//   }, [beamTriggered]);

useEffect(() => {
    let animationFrameId;

    const updateLaserLength = () => {
        const maxLength = 0.035; // Maximum length in percentage
        const distance = Math.max(0, absLaserBottom - absSplitterY);
        const progress = Math.min(distance / (window.innerWidth * maxLength), 1);
        const targetLength = progress * window.innerWidth * maxLength;
        setLaserLength(targetLength);
        if (progress === 1){
            setReceiverActive(true);
        }
        else {
            setReceiverActive(false);
        }
        // console.log(`Progress: ${progress}\nTarget Length: ${targetLength}px\nrelScrollY: ${relScrollY}px\ndenominator: ${window.innerWidth * maxLength}px\nabsLaserBottom: ${absLaserBottom}px\nabsSplitterY: ${absSplitterY}px`);


      animationFrameId = requestAnimationFrame(updateLaserLength);
    };
    if (beamTriggered) {
    updateLaserLength();
    }
    return () => cancelAnimationFrame(animationFrameId);
  }, [beamTriggered, absLaserBottom]);

  return (
    <div className="relative w-full py-40 flex items-center justify-start pl-9.5 transition-colors duration-500">
      {/* Beamsplitter Square */}
      <div ref={splitterRef} className="flex flex-col items-center z-999">
        <BeamSplitter darkMode={darkMode} />
      </div>

      {/* Horizontal Beam */}
      <div
        className="absolute h-1 bg-purple-600 pointer-events-none z-9"
        style={{
          top: 'calc(50% - 0.25rem)',
          left: 'calc(40px + 1.5rem)',
          width: `${laserLength}px`,
          boxShadow: laserLength > 0 ? '0 0 20px 5px #7e22ce, 0 0 50px 15px #7e22ce' : 'none',
          borderRadius: '9999px',
          filter: laserLength > 0 ? 'blur(0.5px) brightness(1.8) saturate(1.5)' : 'none',
        }}
      />


      {/* Receiver + Content */}
      <div className="flex items-center gap-4 ml-[calc(10px+320px)] z-999"
        style={{
          top: 'calc(50% - 0.25rem)',
          left: `calc(40px + 3rem + ${window.innerWidth * 0.035}px)`,
        }}>
        <div className='absolute'
          style={{
            left: `calc(40px + 1.25rem + ${window.innerWidth * 0.035}px)`,
          }}>
            <Receiver activated={receiverActive} />
        </div>
        
        {/* <div
          className={`transition-opacity duration-500 ${
            receiverActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <h2 className="text-2xl font-bold">Quantum Project</h2>
          <p className="text-gray-400 mt-2">Your project details here...</p>
        </div> */}
        {/* <TestItem receiverActive={receiverActive}/> */}
        <PortfolioComponents refID={refID} receiverActive={receiverActive}/>
      </div>
    </div>
  );
}
