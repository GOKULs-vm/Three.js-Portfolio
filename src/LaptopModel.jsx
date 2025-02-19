import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

 


const LaptopModel = () => {
  const model = useGLTF('/models/laptop.glb');
  const ref = useRef();

  // Add rotation animation
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
      ref.current.position.y = Math.sin(clock.getElapsedTime()) * 0.1;
    }
  });

  return (
    <primitive
      ref={ref}
      object={model.scene}
      scale={8.5}  // Increase size
      castShadow
      receiveShadow
      position={[0, -1, 0]}  // Adjust position if needed
    />

    
  );
};

export default LaptopModel;
