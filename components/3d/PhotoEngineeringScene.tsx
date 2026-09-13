'use client';

import { useRef, useState, useEffect, Suspense, useMemo } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { detectQualityTier, type QualitySettings } from '@/lib/3d/quality';
import { media } from '@/lib/data/media';
import { useWebGLSupport, useReducedMotion } from '@/hooks/useWebGLSupport';

/**
 * Real ELSIM photography as textured planes in 3D space.
 * People, solar, panels, poles — not abstract geometry.
 */

const PHOTO_SET = [
  {
    id: 'engineer-panel',
    url: media.photography.engineerPanelInspection,
    position: [-1.4, 0.35, 0.2] as [number, number, number],
    scale: [1.6, 2.0, 1] as [number, number, number],
    rotation: [0, 0.25, 0] as [number, number, number],
    label: 'Engineer panel inspection',
  },
  {
    id: 'solar-team',
    url: media.photography.solarTeamReview,
    position: [1.5, 0.45, -0.3] as [number, number, number],
    scale: [2.0, 1.25, 1] as [number, number, number],
    rotation: [0, -0.3, 0] as [number, number, number],
    label: 'Solar team',
  },
  {
    id: 'technician',
    url: media.photography.technicianPanelWork,
    position: [0.1, -0.15, -1.2] as [number, number, number],
    scale: [1.8, 1.15, 1] as [number, number, number],
    rotation: [0, 0.05, 0] as [number, number, number],
    label: 'Technician at panel',
  },
  {
    id: 'site-engineer',
    url: media.photography.siteEngineerLaptop,
    position: [-2.2, 0.6, -0.8] as [number, number, number],
    scale: [1.1, 1.5, 1] as [number, number, number],
    rotation: [0, 0.4, 0] as [number, number, number],
    label: 'Site engineer',
  },
  {
    id: 'power-line',
    url: media.infrastructure.powerTransmission,
    position: [2.4, 0.9, -1.5] as [number, number, number],
    scale: [2.2, 1.0, 1] as [number, number, number],
    rotation: [0, -0.2, 0] as [number, number, number],
    label: 'Power transmission',
  },
  {
    id: 'pole',
    url: media.infrastructure.electricalPole,
    position: [-0.8, 0.85, -2.0] as [number, number, number],
    scale: [2.0, 0.9, 1] as [number, number, number],
    rotation: [0, 0.15, 0] as [number, number, number],
    label: 'Electrical pole',
  },
] as const;

function PhotoPlane({
  url,
  position,
  scale,
  rotation,
  floatPhase = 0,
  animate,
}: {
  url: string;
  position: [number, number, number];
  scale: [number, number, number];
  rotation: [number, number, number];
  floatPhase?: number;
  animate: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, url);

  useMemo(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
  }, [texture]);

  useFrame((state) => {
    if (!meshRef.current || !animate) return;
    const t = state.clock.elapsedTime;
    meshRef.current.position.y = position[1] + Math.sin(t * 0.55 + floatPhase) * 0.04;
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial
        map={texture}
        transparent
        roughness={0.85}
        metalness={0.05}
        side={THREE.FrontSide}
      />
    </mesh>
  );
}

function SceneContent({
  quality,
  animate,
}: {
  quality: QualitySettings;
  animate: boolean;
}) {
  const { camera, size } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  // Mobile / tablet: fewer planes
  const photos = useMemo(() => {
    if (quality.tier === 'LOW') return PHOTO_SET.slice(0, 2);
    if (quality.tier === 'MEDIUM') return PHOTO_SET.slice(0, 4);
    return PHOTO_SET;
  }, [quality.tier]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    const onTouch = (e: TouchEvent) => {
      if (e.touches[0]) {
        mouse.current.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      }
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onTouch);
    };
  }, []);

  useFrame(() => {
    // Documentary camera parallax — responsive intensity by tier
    const intensity = quality.tier === 'LOW' ? 0.15 : quality.tier === 'MEDIUM' ? 0.28 : 0.4;
    target.current.x += (mouse.current.x * intensity - target.current.x) * 0.04;
    target.current.y += (mouse.current.y * intensity * 0.5 - target.current.y) * 0.04;

    const baseZ = size.width < 768 ? 4.2 : 3.6;
    camera.position.x = target.current.x * 0.8;
    camera.position.y = 0.35 + target.current.y * 0.4;
    camera.position.z = baseZ;
    camera.lookAt(0, 0.2, -0.5);
  });

  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 5, 3]} intensity={0.55} color="#ffffff" />
      <pointLight position={[-3, 2, 2]} intensity={0.25} color="#941A1D" />

      {/* Soft ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
        <planeGeometry args={[16, 12]} />
        <meshStandardMaterial color="#f4f4f4" roughness={1} metalness={0} />
      </mesh>

      {photos.map((p, i) => (
        <PhotoPlane
          key={p.id}
          url={p.url}
          position={p.position}
          scale={p.scale}
          rotation={p.rotation}
          floatPhase={i * 0.9}
          animate={animate}
        />
      ))}
    </>
  );
}

function PhotoFallback() {
  return (
    <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 gap-1 p-1" aria-hidden="true">
      {[media.photography.engineerPanelInspection, media.photography.solarTeamReview, media.photography.technicianPanelWork].map(
        (src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={src}
            alt=""
            className="h-full w-full object-cover opacity-90"
          />
        )
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
    </div>
  );
}

/**
 * Highly responsive 3D scene built from real ELSIM photography:
 * engineers, solar teams, panel work, power lines, poles.
 */
export function PhotoEngineeringScene() {
  const webgl = useWebGLSupport();
  const reduced = useReducedMotion();
  const [quality, setQuality] = useState<QualitySettings | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setQuality(detectQualityTier());

    const onResize = () => setQuality(detectQualityTier());
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  if (!mounted || !quality) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-white via-metal-50 to-metal-100" aria-hidden="true" />
    );
  }

  if (!webgl) {
    return <PhotoFallback />;
  }

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0.4, 3.8], fov: 42 }}
        dpr={quality.dpr}
        gl={{
          antialias: quality.antialias,
          alpha: true,
          powerPreference: quality.tier === 'LOW' ? 'low-power' : 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <SceneContent quality={quality} animate={!reduced} />
        </Suspense>
      </Canvas>
    </div>
  );
}
