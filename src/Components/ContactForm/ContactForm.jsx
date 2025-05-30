import React, { useEffect, useRef, useState } from 'react';
import styles from './ContactForm.module.css';
import Swal from 'sweetalert2';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const formRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const [state, handleSubmit] = useForm('xqkjzvoq'); // Reemplazá con tu propio ID de Formspree

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

  useEffect(() => {
    if (state.succeeded) {
      Swal.fire(
        'Message sent!',
        'Thanks for contacting me.',
        'success'
      ).then(() => {
        window.location.reload();
      });
    }
  }, [state.succeeded]);

  return (
    <section
      id="contact"
      ref={formRef}
      className={`${styles.contactSection} ${visible ? styles.fadeIn : ''}`}
    >
      <h2 className={styles.title}>Drop a <span>Line</span></h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.row}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email address" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className={styles.row}>
          <input type="text" name="company" placeholder="Your Company name" />
          <input type="tel" name="phone" placeholder="Your Phone number" />
        </div>
        <textarea name="message" placeholder="Your Message" rows="6" required />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <button type="submit" disabled={state.submitting}>Send Now</button>
      </form>
    </section>
  );
};

export default ContactForm;
