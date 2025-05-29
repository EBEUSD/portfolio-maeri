import { useEffect, useRef, useState } from 'react';
import styles from './IntroText.module.css';

export default function IntroText() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Solo una vez
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${visible ? styles.fadeIn : ''}`}
    >
      <p className={styles.paragraph}>
        Maeri offers a variety of services tailored to <br />
        showcase your brand effectively.
      </p>
    </div>
  );
}
