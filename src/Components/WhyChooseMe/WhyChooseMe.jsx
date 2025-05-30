import React, { useEffect, useRef, useState } from 'react';
import styles from './WhyChooseMe.module.css';
import { FaLaptopCode, FaChartLine, FaPalette } from 'react-icons/fa';

const WhyChooseMe = () => {
  const sectionRef = useRef();
  const [visible, setVisible] = useState([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible([true, true, true]);
          } else {
            setVisible([false, false, false]);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="about" className={styles.whyChooseMe} ref={sectionRef}>
      <div className={styles.whyChooseMeHeader}>
        <h2>Why choose me?</h2>
      </div>

      <div className={styles.reasons}>
        <div className={styles.backgroundOverlay}></div>
        <div
          className={`${styles.reason} ${
            visible[0] ? styles.fadeInStagger1 : styles.fadeOut
          }`}
        >
          <FaLaptopCode className={styles.icon} />
          <h3>Creativity in Coding</h3>
          <p>Experience a collaborative environment where ideas flourish.</p>
        </div>
        <div
          className={`${styles.reason} ${
            visible[1] ? styles.fadeInStagger2 : styles.fadeOut
          }`}
        >
          <FaChartLine className={styles.icon} />
          <h3>Skill Growth</h3>
          <p>Continuous learning and staying up to date with trends.</p>
        </div>
        <div
          className={`${styles.reason} ${
            visible[2] ? styles.fadeInStagger3 : styles.fadeOut
          }`}
        >
          <FaPalette className={styles.icon} />
          <h3>Cutting-Edge Design</h3>
          <p>Building visually appealing, intuitive user interfaces.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
