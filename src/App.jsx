import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css"; 
import Navbar from "./Navbar";
import Hero from "./Hero";
// import Scene from "./Scene";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="App">
      {/* The 3D scene section */}
        <Navbar />
        <Hero />
        {/* <Scene /> */}
      

      {/* The sections for About, Projects, and Skills */}
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
