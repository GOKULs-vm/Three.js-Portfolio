import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

const SkillCard = ({ title, skills }) => (
  <motion.div
    style={{
      background: "rgba(0, 0, 0, 0.7)",
      padding: "20px",
      borderRadius: "10px",
      color: "white",
      textAlign: "center",
      boxShadow: "0 0 15px rgba(255, 215, 0, 0.6)",
      margin: "10px",
    }}
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    <h3>{title}</h3>
    <p>{skills}</p>
  </motion.div>
);

const Skills = () => {
  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* 3D Floating Effects */}
      <Canvas
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      >
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Float speed={2} rotationIntensity={1}>
          <mesh position={[1, 1, -2]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color="gold" wireframe />
          </mesh>
        </Float>
        <Float speed={2} rotationIntensity={1}>
          <mesh position={[-1.5, -1, -2]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color="gold" wireframe />
          </mesh>
        </Float>
      </Canvas>

      {/* Text Content */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "50px",
          maxWidth: "800px",
          margin: "auto",
          backdropFilter: "blur(10px)",
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: "20px",
          color: "white",
          boxShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>My Skills</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          <SkillCard title="💻 Frontend" skills="React.js, Three.js, Bootstrap" />
          <SkillCard title="🛠 Backend" skills="Node.js, Express.js, MongoDB" />
          <SkillCard title="🎨 UI/UX" skills="Figma, Adobe XD, Animations" />
          <SkillCard title="🚀 Tools" skills="Git, Vite, Webpack, Netlify" />
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
