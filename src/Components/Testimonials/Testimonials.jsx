import { useState } from 'react';
import styles from './Testimonials.module.css';
import { FaUserCircle } from 'react-icons/fa';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const testimonials = [
  {
    id: 1,
    name: 'Elena Cruz',
    role: 'Marketing Manager',
    quote: 'Maeri designs exceeded our expectations. Highly recommended!',
  },
  {
    id: 2,
    name: 'Alexandre Lee',
    role: 'Product Manager',
    quote: 'Maeri\'s attention to detail is unmatched. A true professional!',
  },
  {
    id: 3,
    name: 'Sophie Roberts',
    role: 'Startup Founder',
    quote: 'Maeri transformed our online presence. Incredible results!',
  },
  {
    id: 4,
    name: 'Lucas Moretti',
    role: 'UX Director',
    quote: 'Fantastic communication and beautiful design work!',
  },
  {
    id: 5,
    name: 'María González',
    role: 'CMO',
    quote: 'Increíble ejecución, resultados que se notan en ventas.',
  },
];

const VISIBLE_COUNT = 3;

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < VISIBLE_COUNT; i++) {
      visible.push(testimonials[(startIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Client Testimonials</h2>
      <div className={styles.carouselWrapper}>
        <button className={styles.arrow} onClick={prevSlide}>
          <IoChevronBack />
        </button>

        <div className={styles.carousel}>
          {getVisibleTestimonials().map((testimonial) => (
            <div key={testimonial.id} className={styles.card}>
              <div className={styles.user}>
                <FaUserCircle className={styles.avatar} />
                <div>
                  <div className={styles.name}>{testimonial.name}</div>
                  <div className={styles.role}>{testimonial.role}</div>
                </div>
              </div>
              <p className={styles.quote}>{testimonial.quote}</p>
            </div>
          ))}
        </div>

        <button className={styles.arrow} onClick={nextSlide}>
          <IoChevronForward />
        </button>
      </div>

      <div className={styles.dots}>
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === startIndex ? styles.activeDot : ''}`}
            onClick={() => setStartIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
