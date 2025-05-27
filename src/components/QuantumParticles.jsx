import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function QuantumParticles() {
  const particlesInit = useCallback(async (engine) => {
    // Correct version for tsparticles v3+
    await loadFull(engine);
  }, []);

  return (
    <Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    fullScreen: { enable: true },
    background: { color: "transparent" },
    interactivity: {
      detectsOn: "canvas", // 🛠️ Ensures hover detection over the particle canvas
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 20, duration: 1 }, // Increase distance for visibility
        push: { quantity: 400 },
      },
    },
    particles: {
      number: { value: 100 },
      color: { value: "#7e22ce" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 3 } },
      move: { enable: true, speed: 0.8, attract: { enable: true, rotateX: 600, rotateY: 1200 } },
      links: { enable: true, distance: 120, color: "#9333ea", opacity: 0.4, width: 1 },
    },
  }}
/>

  );
}
