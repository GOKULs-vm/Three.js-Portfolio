import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, SpotLight } from "@react-three/drei";
import LaptopModel from "./LaptopModel";
import "./Hero.css";

function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Left Side - Text Content */}
      <div className="hero-text">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm a 3D Web Developer 🚀
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          I build immersive web experiences using 3D graphics, animations, and interactivity.
        </motion.p>

        <motion.a href="#projects" className="cta-button" whileHover={{ scale: 1.1 }}>
          View My Work
        </motion.a>
      </div>

      {/* Right Side - 3D Laptop Model */}
      <div className="hero-3d">
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }} shadows>
          {/* Ambient light for a balanced look */}
          <ambientLight intensity={0.5} />

          {/* Directional light for soft shadows */}
          <directionalLight position={[3, 5, 2]} intensity={1} castShadow />

          {/* Spotlight for dramatic effect */}
          <SpotLight position={[0, 5, 5]} angle={0.3} intensity={2} penumbra={1} castShadow />

          {/* Laptop model */}
          <LaptopModel />

          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </motion.section>
  );
}

export default Hero;
