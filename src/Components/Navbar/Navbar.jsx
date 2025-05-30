import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Maeri's Portfolio</div>
        <button className={styles.hamburger} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
          <li>
            <Link
              to="home"
              smooth={true}
              duration={800}
              onClick={closeMenu}
              className={styles.links}
              activeClass={styles.selectedLink}
              spy={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={800}
              onClick={closeMenu}
              className={styles.links}
              activeClass={styles.selectedLink}
              spy={true}
            >
              About
            </Link>
          </li>
         
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={800}
              onClick={closeMenu}
              className={styles.links}
              activeClass={styles.selectedLink}
              spy={true}
            >
              Skills
            </Link>
          </li>
           <li>
            <Link
              to="projects"
              smooth={true}
              duration={800}
              onClick={closeMenu}
              className={styles.links}
              activeClass={styles.selectedLink}
              spy={true}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              onClick={closeMenu}
              className={styles.links}
              activeClass={styles.selectedLink}
              spy={true}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
