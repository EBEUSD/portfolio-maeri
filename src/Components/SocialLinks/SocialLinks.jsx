import styles from './SocialLinks.module.css';

export default function SocialLinks() {
  return (
    <div className={styles.socialContainer}>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
        LinkedIn
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
        GitHub
      </a>
      <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" className={styles.link}>
        Behance
      </a>
      <a href="https://x.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
        Twitter
      </a>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>
        Resume
      </a>
    </div>
  );
}
