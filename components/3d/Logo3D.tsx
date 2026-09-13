'use client';

import { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { BRAND_3D } from '@/lib/3d/config';
import { useReducedMotion, useWebGLSupport } from '@/hooks/useWebGLSupport';
import { ElsimLogo } from '@/components/brand/ElsimLogo';

/**
 * 3D ELSIM logo mark: gear ring + circuit nodes + burgundy accent.
 * Highly responsive — scales with container; slows / pauses on reduced motion.
 */
function LogoMesh({ animate }: { animate: boolean }) {
  const gearRef = useRef<THREE.Group>(null);
  const arcRef = useRef<THREE.Mesh>(null);
  const pulseRef = useRef(0);

  useFrame((_, delta) => {
    if (!animate) return;
    if (gearRef.current) {
      gearRef.current.rotation.z -= delta * 0.15;
    }
    if (arcRef.current) {
      arcRef.current.rotation.z += delta * 0.22;
    }
    pulseRef.current += delta;
  });

  // Gear teeth positions
  const teeth = Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * Math.PI * 2;
    return {
      x: Math.cos(a) * 1.05,
      y: Math.sin(a) * 1.05,
      rot: a,
    };
  });

  return (
    <group scale={1.1}>
      {/* Outer ring */}
      <mesh>
        <torusGeometry args={[1, 0.06, 12, 48]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.35} />
      </mesh>

      {/* Gear teeth */}
      <group ref={gearRef}>
        {teeth.map((t, i) => (
          <mesh key={i} position={[t.x, t.y, 0]} rotation={[0, 0, t.rot]}>
            <boxGeometry args={[0.14, 0.28, 0.08]} />
            <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.4} />
          </mesh>
        ))}
      </group>

      {/* Burgundy accent arc (partial torus) */}
      <mesh ref={arcRef} rotation={[0, 0, -0.4]}>
        <torusGeometry args={[1.05, 0.1, 8, 32, Math.PI * 0.85]} />
        <meshStandardMaterial
          color={BRAND_3D.burgundy}
          metalness={0.4}
          roughness={0.3}
          emissive={BRAND_3D.burgundy}
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Circuit nodes */}
      {[
        [-0.45, 0.25, 0.05],
        [-0.45, 0, 0.05],
        [-0.45, -0.25, 0.05],
        [0.15, 0.35, 0.05],
        [0.35, 0.1, 0.05],
        [0.25, -0.3, 0.05],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? BRAND_3D.burgundy : '#1a1a1a'}
            emissive={i % 2 === 0 ? BRAND_3D.burgundy : '#000'}
            emissiveIntensity={i % 2 === 0 ? 0.4 : 0}
          />
        </mesh>
      ))}

      {/* Circuit traces */}
      <mesh position={[-0.15, 0.25, 0.04]}>
        <boxGeometry args={[0.55, 0.025, 0.02]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[-0.05, 0, 0.04]}>
        <boxGeometry args={[0.7, 0.025, 0.02]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[-0.1, -0.25, 0.04]}>
        <boxGeometry args={[0.6, 0.025, 0.02]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Centre disc for brand space */}
      <mesh position={[0, 0, -0.02]}>
        <circleGeometry args={[0.55, 32]} />
        <meshStandardMaterial color="#ffffff" roughness={0.9} />
      </mesh>
    </group>
  );
}

interface Logo3DProps {
  className?: string;
  /** Height of the canvas container */
  height?: number;
}

/**
 * Responsive 3D animated ELSIM logo.
 * Falls back to 2D PNG/SVG when WebGL is unavailable or motion is reduced.
 */
export function Logo3D({ className, height = 160 }: Logo3DProps) {
  const webgl = useWebGLSupport();
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className={className} style={{ height }} aria-hidden="true">
        <div className="flex h-full items-center justify-center">
          <ElsimLogo size="lg" />
        </div>
      </div>
    );
  }

  if (!webgl || reduced) {
    return (
      <div className={className} style={{ height }} aria-hidden="true">
        <div className="flex h-full items-center justify-center">
          <ElsimLogo size="xl" animated />
        </div>
      </div>
    );
  }

  return (
    <div className={className} style={{ height, width: '100%' }} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 40 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 4, 5]} intensity={0.9} />
        <pointLight position={[-2, 1, 2]} intensity={0.35} color={BRAND_3D.burgundy} />
        <Suspense fallback={null}>
          <LogoMesh animate={!reduced} />
        </Suspense>
      </Canvas>
    </div>
  );
}
