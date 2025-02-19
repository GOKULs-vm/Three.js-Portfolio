// src/Scene.js
import { Canvas } from "@react-three/fiber"; 
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

function Scene() {
  return (
    <Canvas>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      
      {/* 3D Object */}
      <Suspense fallback={null}>
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="royalblue" />
        </mesh>
      </Suspense>

      {/* Orbit controls for moving around the scene */}
      <OrbitControls />
    </Canvas>
  );
}

export default Scene;
