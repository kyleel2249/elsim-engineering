'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Line } from '@react-three/drei';
import * as THREE from 'three';

// Official ELSIM brand colors for 3D
const BURGUNDY = '#941A1D';
const METAL = '#D1D1D1';
const CHARCOAL = '#171717';
const ENGBLUE = '#2F80C5';

function EnergyCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.12;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <group>
      {/* Central structure – industrial metal + burgundy accent */}
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1.15, 0]} />
        <meshStandardMaterial
          color={METAL}
          metalness={0.85}
          roughness={0.25}
          emissive={BURGUNDY}
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Inner core – burgundy signature */}
      <mesh scale={0.55}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={BURGUNDY}
          emissive={BURGUNDY}
          emissiveIntensity={0.35}
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>

      {/* Outer technical ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.15, 0.025, 16, 64]} />
        <meshStandardMaterial color={BURGUNDY} emissive={BURGUNDY} emissiveIntensity={0.5} />
      </mesh>

      {/* Secondary ring – metal */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 3.2, Math.PI / 5, 0]}>
        <torusGeometry args={[1.75, 0.018, 12, 48]} />
        <meshStandardMaterial color={METAL} metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  );
}

function EnergyPaths() {
  const points = useMemo(() => {
    const pts: THREE.Vector3[][] = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const path: THREE.Vector3[] = [];
      for (let t = 0; t <= 1; t += 0.05) {
        const r = 1.4 + t * 3.4;
        const x = Math.cos(angle + t * 0.35) * r;
        const y = Math.sin(t * Math.PI) * 0.7 - 0.35;
        const z = Math.sin(angle + t * 0.35) * r;
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
          color={i % 2 === 0 ? BURGUNDY : ENGBLUE}
          lineWidth={1.4}
          transparent
          opacity={0.45}
        />
      ))}
    </>
  );
}

function FloatingNodes() {
  const nodes = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => {
      const angle = (i / 10) * Math.PI * 2;
      const radius = 2.9 + (i % 3) * 0.55;
      return {
        position: [
          Math.cos(angle) * radius,
          Math.sin(i * 1.6) * 1.1,
          Math.sin(angle) * radius,
        ] as [number, number, number],
        scale: 0.07 + (i % 3) * 0.03,
        isBlue: i % 3 === 0,
      };
    });
  }, []);

  return (
    <>
      {nodes.map((node, i) => (
        <Float key={i} speed={1.2 + i * 0.08} rotationIntensity={0.3} floatIntensity={0.5}>
          <mesh position={node.position}>
            <sphereGeometry args={[node.scale, 12, 12]} />
            <meshStandardMaterial
              color={node.isBlue ? ENGBLUE : BURGUNDY}
              emissive={node.isBlue ? ENGBLUE : BURGUNDY}
              emissiveIntensity={0.7}
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
    camera.position.x += (mouse.current.x * 0.7 - camera.position.x) * 0.025;
    camera.position.y += (mouse.current.y * 0.35 - camera.position.y) * 0.025;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.0} color={BURGUNDY} />
      <pointLight position={[-4, -2, 3]} intensity={0.5} color={ENGBLUE} />
      <pointLight position={[0, 4, -2]} intensity={0.35} color={METAL} />
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
      <div className="absolute inset-0 bg-gradient-to-br from-white via-metal-50 to-metal-100" aria-hidden="true" />
    );
  }

  if (reducedMotion) {
    return (
      <div
        className="absolute inset-0 bg-gradient-to-br from-white via-metal-50 to-metal-100 flex items-center justify-center eng-grid"
        aria-hidden="true"
      >
        <div className="w-44 h-44 rounded-full border-2 border-burgundy/25 bg-burgundy/5 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border border-burgundy/40 bg-burgundy/10" />
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
