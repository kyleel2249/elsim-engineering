'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Line } from '@react-three/drei';
import * as THREE from 'three';

function EnergyCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.25;
    }
  });

  return (
    <group>
      {/* Central geometric structure - stylized transformer / node */}
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#0891b2"
          emissiveIntensity={0.4}
          metalness={0.8}
          roughness={0.2}
          wireframe={false}
        />
      </mesh>

      {/* Outer wireframe ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.2, 0.03, 16, 64]} />
        <meshStandardMaterial color="#22d3ee" emissive="#06b6d4" emissiveIntensity={0.6} />
      </mesh>

      {/* Secondary ring */}
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[1.8, 0.02, 12, 48]} />
        <meshStandardMaterial color="#64748b" emissive="#334155" emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
}

function EnergyPaths() {
  const points = useMemo(() => {
    const pts: THREE.Vector3[][] = [];
    // Create several curved paths radiating outward
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const path: THREE.Vector3[] = [];
      for (let t = 0; t <= 1; t += 0.05) {
        const r = 1.5 + t * 3.5;
        const x = Math.cos(angle + t * 0.4) * r;
        const y = Math.sin(t * Math.PI) * 0.8 - 0.4;
        const z = Math.sin(angle + t * 0.4) * r;
        path.push(new THREE.Vector3(x, y, z));
      }
      pts.push(path);
    }
    return pts;
  }, []);

  return (
    <>
      {points.map((path, i) => (
        <Line
          key={i}
          points={path}
          color="#06b6d4"
          lineWidth={1.5}
          transparent
          opacity={0.5}
        />
      ))}
    </>
  );
}

function FloatingNodes() {
  const nodes = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const angle = (i / 12) * Math.PI * 2;
      const radius = 3 + (i % 3) * 0.6;
      return {
        position: [
          Math.cos(angle) * radius,
          (Math.sin(i * 1.7) * 1.2),
          Math.sin(angle) * radius,
        ] as [number, number, number],
        scale: 0.08 + (i % 3) * 0.04,
      };
    });
  }, []);

  return (
    <>
      {nodes.map((node, i) => (
        <Float key={i} speed={1.5 + i * 0.1} rotationIntensity={0.4} floatIntensity={0.6}>
          <mesh position={node.position}>
            <sphereGeometry args={[node.scale, 12, 12]} />
            <meshStandardMaterial
              color="#22d3ee"
              emissive="#06b6d4"
              emissiveIntensity={0.8}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

function Scene() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  useFrame(() => {
    // Gentle parallax camera
    camera.position.x += (mouse.current.x * 0.8 - camera.position.x) * 0.03;
    camera.position.y += (mouse.current.y * 0.4 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#06b6d4" />
      <pointLight position={[-4, -2, 3]} intensity={0.6} color="#64748b" />
      <EnergyCore />
      <EnergyPaths />
      <FloatingNodes />
    </>
  );
}

export function HeroEnergyField() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  if (!mounted) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-steel-900" aria-hidden="true" />
    );
  }

  if (reducedMotion) {
    return (
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-steel-900 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="w-48 h-48 rounded-full border border-energy-500/30 bg-energy-500/5 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border border-energy-400/40 bg-energy-500/10" />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
