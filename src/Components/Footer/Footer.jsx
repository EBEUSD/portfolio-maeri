import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Subcontainer}>
        <div className={styles.left}>
          <h4>Maeri portfolio</h4>
          <h2>Crafting Web Excellence.</h2>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className={styles.links}>
          <ul>
            <li>
              <Link
                to="home"
                smooth={true}
                duration={800}
                className={styles.link}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={800}
                className={styles.link}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={800}
                className={styles.link}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={800}
                className={styles.link}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={800}
                className={styles.link}
              >
                Contact
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={800}
                className={styles.link}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="methods"
                smooth={true}
                duration={800}
                className={styles.link}
              >
                Methods
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
