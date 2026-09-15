'use client';

import { useRef, useState, useEffect, Suspense, useMemo } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { detectQualityTier, type QualitySettings } from '@/lib/3d/quality';
import { media, mediaUrls } from '@/lib/data/media';
import { useWebGLSupport, useReducedMotion } from '@/hooks/useWebGLSupport';

const PHOTO_SET = [
  {
    id: 'engineer-panel',
    url: mediaUrls.photography.engineerPanelInspection,
    position: [-1.5, 0.2, 0.15] as [number, number, number],
    baseWidth: 1.7,
    rotation: [0, 0.22, 0] as [number, number, number],
  },
  {
    id: 'solar-team',
    url: mediaUrls.photography.solarTeamReview,
    position: [1.55, 0.35, -0.25] as [number, number, number],
    baseWidth: 2.1,
    rotation: [0, -0.28, 0] as [number, number, number],
  },
  {
    id: 'technician',
    url: mediaUrls.photography.technicianPanelWork,
    position: [0.05, -0.1, -1.15] as [number, number, number],
    baseWidth: 1.9,
    rotation: [0, 0.04, 0] as [number, number, number],
  },
  {
    id: 'site-engineer',
    url: mediaUrls.photography.siteEngineerLaptop,
    position: [-2.15, 0.45, -0.75] as [number, number, number],
    baseWidth: 1.2,
    rotation: [0, 0.38, 0] as [number, number, number],
  },
  {
    id: 'power-line',
    url: mediaUrls.infrastructure.powerTransmission,
    position: [2.35, 0.75, -1.45] as [number, number, number],
    baseWidth: 2.2,
    rotation: [0, -0.18, 0] as [number, number, number],
  },
  {
    id: 'pole',
    url: mediaUrls.infrastructure.electricalPole,
    position: [-0.75, 0.7, -1.95] as [number, number, number],
    baseWidth: 2.0,
    rotation: [0, 0.12, 0] as [number, number, number],
  },
] as const;

function PhotoPlane({
  url,
  position,
  baseWidth,
  rotation,
  floatPhase = 0,
  animate,
}: {
  url: string;
  position: [number, number, number];
  baseWidth: number;
  rotation: [number, number, number];
  floatPhase?: number;
  animate: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, url);

  const aspect = useMemo(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    const img = texture.image as HTMLImageElement | undefined;
    if (img && img.width && img.height) {
      return img.width / img.height;
    }
    return 1.5;
  }, [texture]);

  const height = baseWidth / aspect;

  useFrame((state) => {
    if (!meshRef.current || !animate) return;
    const t = state.clock.elapsedTime;
    meshRef.current.position.y = position[1] + Math.sin(t * 0.55 + floatPhase) * 0.04;
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={[baseWidth, height, 1]}>
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
    const intensity = quality.tier === 'LOW' ? 0.15 : quality.tier === 'MEDIUM' ? 0.28 : 0.4;
    target.current.x += (mouse.current.x * intensity - target.current.x) * 0.04;
    target.current.y += (mouse.current.y * intensity * 0.5 - target.current.y) * 0.04;

    const baseZ = size.width < 768 ? 4.4 : 3.8;
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

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
        <planeGeometry args={[16, 12]} />
        <meshStandardMaterial color="#f4f4f4" roughness={1} metalness={0} />
      </mesh>

      {photos.map((p, i) => (
        <PhotoPlane
          key={p.id}
          url={p.url}
          position={p.position}
          baseWidth={p.baseWidth}
          rotation={p.rotation}
          floatPhase={i * 0.9}
          animate={animate}
        />
      ))}
    </>
  );
}

function PhotoFallback() {
  const items = [
    media.photography.engineerPanelInspection,
    media.photography.solarTeamReview,
    media.photography.technicianPanelWork,
  ];
  return (
    <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-2 p-3 bg-metal-50">
      {items.map((item) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={item.src}
          src={item.src}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          className="max-h-[40vh] w-auto max-w-[45%] object-contain"
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-transparent pointer-events-none" aria-hidden="true" />
    </div>
  );
}

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
