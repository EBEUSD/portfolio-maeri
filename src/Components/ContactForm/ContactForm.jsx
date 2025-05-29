import React, { useEffect, useRef, useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const formRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={formRef}
      className={`${styles.contactSection} ${visible ? styles.fadeIn : ''}`}
    >
      <h2 className={styles.title}>Drop a <span>Line</span></h2>
      <form className={styles.form}>
        <div className={styles.row}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email address" />
        </div>
        <div className={styles.row}>
          <input type="text" placeholder="Your Company name" />
          <input type="tel" placeholder="Your Phone number" />
        </div>
        <textarea placeholder="Your Message" rows="6" />
        <button type="submit">Send Now</button>
      </form>
    </section>
  );
};

export default ContactForm;
