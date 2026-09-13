'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { BRAND_3D } from '@/lib/3d/config';

export type WorkPose = 'idle' | 'inspect' | 'reach';

interface HumanFigureProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  pose?: WorkPose;
  /** Skin tone variation for diversity */
  skinTone?: 'medium' | 'dark' | 'light';
  /** Show high-vis vest */
  highVis?: boolean;
  /** Show hard hat */
  hardHat?: boolean;
}

/**
 * Industrial-proportion procedural human figure.
 * Placeholder until photorealistic GLB characters are supplied.
 * Proportions are realistic (not cartoon / not game avatar).
 * Subtle idle + inspect animation communicates "engineer at work".
 */
export function HumanFigure({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  pose = 'inspect',
  skinTone = 'dark',
  highVis = false,
  hardHat = true,
}: HumanFigureProps) {
  const groupRef = useRef<THREE.Group>(null);
  const armRef = useRef<THREE.Group>(null);

  const skin =
    skinTone === 'dark'
      ? BRAND_3D.skinDark
      : skinTone === 'light'
        ? '#c68642'
        : BRAND_3D.skin;

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      // Subtle breathing / weight shift
      groupRef.current.position.y = position[1] + Math.sin(t * 1.2) * 0.012;
    }
    if (armRef.current && pose === 'inspect') {
      armRef.current.rotation.x = -0.4 + Math.sin(t * 0.8) * 0.08;
    }
    if (armRef.current && pose === 'reach') {
      armRef.current.rotation.x = -0.9 + Math.sin(t * 1.1) * 0.06;
    }
  });

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      {/* Legs */}
      <mesh position={[-0.12, 0.45, 0]}>
        <capsuleGeometry args={[0.08, 0.5, 4, 8]} />
        <meshStandardMaterial color={BRAND_3D.workShirt} roughness={0.85} />
      </mesh>
      <mesh position={[0.12, 0.45, 0]}>
        <capsuleGeometry args={[0.08, 0.5, 4, 8]} />
        <meshStandardMaterial color={BRAND_3D.workShirt} roughness={0.85} />
      </mesh>

      {/* Boots */}
      <mesh position={[-0.12, 0.08, 0.04]}>
        <boxGeometry args={[0.14, 0.12, 0.22]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.6} metalness={0.1} />
      </mesh>
      <mesh position={[0.12, 0.08, 0.04]}>
        <boxGeometry args={[0.14, 0.12, 0.22]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.6} metalness={0.1} />
      </mesh>

      {/* Torso */}
      <mesh position={[0, 1.05, 0]}>
        <capsuleGeometry args={[0.22, 0.45, 4, 10]} />
        <meshStandardMaterial
          color={highVis ? BRAND_3D.vest : BRAND_3D.workShirt}
          roughness={0.8}
        />
      </mesh>

      {/* High-vis stripes */}
      {highVis && (
        <>
          <mesh position={[0, 1.15, 0.2]}>
            <boxGeometry args={[0.42, 0.04, 0.02]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
          <mesh position={[0, 0.95, 0.2]}>
            <boxGeometry args={[0.42, 0.04, 0.02]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
        </>
      )}

      {/* Neck */}
      <mesh position={[0, 1.42, 0]}>
        <cylinderGeometry args={[0.06, 0.07, 0.12, 8]} />
        <meshStandardMaterial color={skin} roughness={0.7} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.62, 0]}>
        <sphereGeometry args={[0.14, 16, 16]} />
        <meshStandardMaterial color={skin} roughness={0.65} />
      </mesh>

      {/* Hard hat */}
      {hardHat && (
        <group position={[0, 1.76, 0]}>
          <mesh>
            <sphereGeometry args={[0.155, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
            <meshStandardMaterial color={BRAND_3D.burgundy} roughness={0.4} metalness={0.15} />
          </mesh>
          <mesh position={[0, -0.02, 0.08]} rotation={[0.3, 0, 0]}>
            <boxGeometry args={[0.28, 0.02, 0.12]} />
            <meshStandardMaterial color={BRAND_3D.burgundy} roughness={0.4} />
          </mesh>
        </group>
      )}

      {/* Arms */}
      <group ref={armRef} position={[0.28, 1.25, 0]}>
        <mesh position={[0, -0.2, 0.1]} rotation={[0.5, 0, 0.2]}>
          <capsuleGeometry args={[0.055, 0.35, 4, 8]} />
          <meshStandardMaterial color={skin} roughness={0.7} />
        </mesh>
        {/* Gloved hand near panel */}
        <mesh position={[0.02, -0.45, 0.25]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#333" roughness={0.9} />
        </mesh>
      </group>
      <mesh position={[-0.28, 1.05, 0]} rotation={[0.2, 0, -0.15]}>
        <capsuleGeometry args={[0.055, 0.35, 4, 8]} />
        <meshStandardMaterial color={skin} roughness={0.7} />
      </mesh>
    </group>
  );
}

/** Electrical control panel the engineer works with */
export function ElectricalPanel({
  position = [0.7, 0, 0] as [number, number, number],
}) {
  return (
    <group position={position}>
      {/* Cabinet body */}
      <mesh position={[0, 1.0, 0]}>
        <boxGeometry args={[0.7, 1.8, 0.35]} />
        <meshStandardMaterial
          color={BRAND_3D.metal}
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
      {/* Door frame / open panel face */}
      <mesh position={[0, 1.0, 0.18]}>
        <boxGeometry args={[0.6, 1.6, 0.04]} />
        <meshStandardMaterial color={BRAND_3D.charcoal} metalness={0.5} roughness={0.4} />
      </mesh>
      {/* Indicator lights */}
      <mesh position={[-0.15, 1.5, 0.22]}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshStandardMaterial color={BRAND_3D.engblue} emissive={BRAND_3D.engblue} emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[0, 1.5, 0.22]}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshStandardMaterial color={BRAND_3D.burgundy} emissive={BRAND_3D.burgundy} emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.15, 1.5, 0.22]}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
      {/* Switch row */}
      {[-0.15, 0, 0.15].map((x, i) => (
        <mesh key={i} position={[x, 1.2, 0.22]}>
          <boxGeometry args={[0.08, 0.12, 0.04]} />
          <meshStandardMaterial color={BRAND_3D.metal} metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
      {/* Warning label area */}
      <mesh position={[0, 0.7, 0.22]}>
        <boxGeometry args={[0.35, 0.15, 0.02]} />
        <meshStandardMaterial color={BRAND_3D.safety} roughness={0.5} />
      </mesh>
    </group>
  );
}
