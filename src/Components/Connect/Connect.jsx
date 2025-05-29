import React, { useEffect, useRef, useState } from 'react';
import styles from './Connect.module.css';

const Connect = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.connect} ${visible ? styles.fadeIn : ''}`}
    >
      <div className={styles.overlay}>
        <h2 className={styles.title}>Let's <span>Connect.</span></h2>
        <p className={styles.text}>
          Reach out to Maeri for collaboration or inquiries. Ready to start a project together? Drop a message below!
        </p>
      </div>
    </section>
  );
};

export default Connect;
