import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Ring, Html } from '@react-three/drei';
import * as THREE from 'three';

function BlochVector({ darkMode }) {
  const { scene } = useThree();
  const arrowRef = useRef();
  const angleRef = useRef(0);
  const targetAngleRef = useRef(0);

  useEffect(() => {
    targetAngleRef.current = darkMode ? 0 : Math.PI;
    console.log(`Bloch sphere now in state ${darkMode ? '|0⟩' : '|1⟩'}`);
  }, [darkMode]);

  useFrame(() => {
    if (arrowRef.current) {
      angleRef.current += (targetAngleRef.current - angleRef.current) * 0.05;

      const direction = new THREE.Vector3(
        0,
        Math.cos(angleRef.current),
        Math.sin(angleRef.current)
      ).normalize();

      arrowRef.current.setDirection(direction);
      arrowRef.current.setLength(1, 0.15, 0.08);
    }
  });

  useEffect(() => {
    const dir = new THREE.Vector3(0, 1, 0);
    const origin = new THREE.Vector3(0, 0, 0);
    const arrow = new THREE.ArrowHelper(dir, origin, 1, 0x7e22ce, 0.15, 0.08);
    scene.add(arrow);
    arrowRef.current = arrow;
    return () => scene.remove(arrow);
  }, [scene]);

  return null;
}

function SphereOutline() {
  const segments = 512;
  const radius = 1;
  const points = [];
  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
  }
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <line geometry={geometry}>
      <lineBasicMaterial color="#7e22ce" />
    </line>
  );
}

function EquatorRing() {
  return (
    <Ring args={[0.96, 1.0, 256]} rotation={[Math.PI / 2.5, 0, 0]}>
      <meshBasicMaterial color="#7e22ce" side={THREE.DoubleSide} />
    </Ring>
  );
}

function BlochSphere({ darkMode, onClick }) {
  return (
    <group onClick={onClick}>
      <SphereOutline />
      <EquatorRing />
      <BlochVector darkMode={darkMode} />

      {/* Subtle Labels */}
      <Html position={[0, 1.3, 0]} center>
        <div className="text-[8px] text-purple-500 opacity-60">|0⟩</div>
      </Html>
      <Html position={[0, -1.3, 0]} center>
        <div className="text-[8px] text-purple-500 opacity-60">|1⟩</div>
      </Html>
    </group>
  );
}

export default function RotatingSphere({ darkMode, setDarkMode }) {
  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ antialias: true }} dpr={[1, 2]}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <BlochSphere darkMode={darkMode} onClick={handleClick} />
    </Canvas>
  );
}
