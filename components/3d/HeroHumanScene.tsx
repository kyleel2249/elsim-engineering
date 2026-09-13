'use client';

import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { HumanFigure, ElectricalPanel } from '@/components/3d/humans/HumanFigure';
import { detectQualityTier, type QualitySettings } from '@/lib/3d/quality';
import { BRAND_3D } from '@/lib/3d/config';
import { useWebGLSupport, useReducedMotion } from '@/hooks/useWebGLSupport';

function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#f0f0f0" roughness={0.9} metalness={0.05} />
    </mesh>
  );
}

function GridHelper() {
  return (
    <gridHelper
      args={[12, 24, BRAND_3D.metal, '#e8e8e8']}
      position={[0, 0.01, 0]}
    />
  );
}

function CableRun() {
  const points = [
    new THREE.Vector3(-1.5, 0.05, -0.5),
    new THREE.Vector3(-0.5, 0.05, 0.2),
    new THREE.Vector3(0.5, 0.05, 0.3),
    new THREE.Vector3(1.2, 0.8, 0.2),
  ];
  const curve = new THREE.CatmullRomCurve3(points);
  const tube = new THREE.TubeGeometry(curve, 32, 0.02, 6, false);
  return (
    <mesh geometry={tube}>
      <meshStandardMaterial color="#333" roughness={0.7} />
    </mesh>
  );
}

function SceneContent({ quality }: { quality: QualitySettings }) {
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
    // Documentary-style subtle camera parallax
    camera.position.x += (mouse.current.x * 0.5 - camera.position.x) * 0.02;
    camera.position.y += (1.4 + mouse.current.y * 0.2 - camera.position.y) * 0.02;
    camera.lookAt(0.3, 1.1, 0);
  });

  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight
        position={[4, 6, 3]}
        intensity={0.9}
        color="#ffffff"
        castShadow={quality.shadows}
      />
      <pointLight position={[-2, 3, 2]} intensity={0.35} color={BRAND_3D.burgundy} />
      <pointLight position={[2, 2.5, 1]} intensity={0.25} color={BRAND_3D.engblue} />

      <Floor />
      {quality.tier !== 'LOW' && <GridHelper />}
      {quality.tier !== 'LOW' && <CableRun />}

      {/* Primary: engineer inspecting electrical panel */}
      <HumanFigure
        position={[-0.15, 0, 0.15]}
        rotation={[0, 0.35, 0]}
        pose="inspect"
        skinTone="dark"
        hardHat
        highVis={false}
        scale={1}
      />
      <ElectricalPanel position={[0.85, 0, 0]} />

      {/* Secondary technician on HIGH quality only */}
      {quality.maxCharacters >= 2 && (
        <HumanFigure
          position={[-1.4, 0, -0.8]}
          rotation={[0, 0.9, 0]}
          pose="idle"
          skinTone="medium"
          hardHat
          highVis
          scale={0.95}
        />
      )}
    </>
  );
}

function StaticFallback() {
  return (
    <div
      className="absolute inset-0 bg-gradient-to-br from-white via-metal-50 to-metal-100 eng-grid flex items-center justify-center"
      aria-hidden="true"
    >
      <div className="text-center px-6">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-burgundy/10 border border-burgundy/20">
          <span className="text-2xl text-burgundy">⚡</span>
        </div>
        <p className="text-sm font-medium text-charcoal-600 max-w-xs">
          Engineers at work — electrical installation, testing and commissioning across West Africa.
        </p>
      </div>
    </div>
  );
}

/**
 * Hero scene: people-first engineering documentary composition.
 * Engineer + electrical panel is the focal point.
 * Adaptive quality for desktop / tablet / mobile.
 * Semantic content remains on the page regardless of 3D.
 */
export function HeroHumanScene() {
  const webgl = useWebGLSupport();
  const reducedMotion = useReducedMotion();
  const [quality, setQuality] = useState<QualitySettings | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setQuality(detectQualityTier());
  }, []);

  if (!mounted || !quality) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-white via-metal-50 to-metal-100" aria-hidden="true" />
    );
  }

  if (!webgl || reducedMotion) {
    return <StaticFallback />;
  }

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [2.2, 1.5, 3.2], fov: 40 }}
        dpr={quality.dpr}
        gl={{
          antialias: quality.antialias,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <SceneContent quality={quality} />
        </Suspense>
      </Canvas>
    </div>
  );
}
