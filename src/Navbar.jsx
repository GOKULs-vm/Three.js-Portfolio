import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>
      <ul className="nav-links">
        <li>
          <Link to="about" smooth={true} duration={800}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={800}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={800}>
            Skills
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
