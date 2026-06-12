import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Texture } from "three";

import CanvasLoader from "../layout/Loader";

const Ball = (props: any) => {
  const texture = useTexture(props.imgUrl) as Texture;

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[0, 0, 0.5]} intensity={0.5} />
      <mesh scale={2.5}>
        <planeGeometry args={[1.5, 1.5]} />
        <meshStandardMaterial
          map={texture}
          transparent
          alphaTest={0.1}
          side={2}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas: React.FC<{ icon: string }> = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enablePan={false} 
          enableZoom={false}
          autoRotate
          autoRotateSpeed={2}
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
