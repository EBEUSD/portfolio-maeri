import styles from "./Hero.module.css";
export default function Hero() {
  return (
    <section  id="home" className={styles.hero}>
      <div className={styles.textContainer}>
        <h1>
          Explore Maeri Front-End <br /> Development <br /> Showcase
        </h1>
        <p className={styles.text}>
          Discover Maeri talent in front-end development. With a passion for
          creating visually appealing and user-friendly websites, Maeri work
          speaks for itself. Dive into her portfolio today.
        </p>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <img
            src="https://placehold.co/300x300/000/F00"
            alt="Placeholder Hero"
            width={300}
            height={300}
            className={styles.heroImage}
          />
        </div>
        <div className={styles.tagList}>
          <span className={`${styles.tag} ${styles.inactive}`}>Design</span>
          <span className={`${styles.tag} ${styles.active}`}>Development</span>
          <span className={`${styles.tag} ${styles.inactive}`}>UI/UX</span>
        </div>
      </div>
    </section>
  );
}
