import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

const About = () => {
  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* 3D Background */}
      <Canvas
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        camera={{ position: [0, 0, 5] }}
      >
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Sphere args={[1.5, 64, 64]} position={[0, 0, -2]}>
          <meshStandardMaterial color="gold" wireframe />
        </Sphere>
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
        <h2>About Me</h2>
        <p>
          Welcome to my 3D portfolio! I specialize in **web development** with a passion 
          for **3D experiences and animations**.
        </p>
        <br></br>
        <p>
          I combine **React, Three.js, and Framer Motion** to create immersive web interfaces. 
          My goal is to push the boundaries of interactive web design.
        </p>
        <br></br>
        <p>
          Let’s build the future of the **web with creativity & technology** 🚀.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
