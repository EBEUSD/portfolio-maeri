import styles from './Skills.module.css';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', description: 'Markup language for structuring web content.', icon: '🌐' },
  { name: 'CSS3', description: 'Stylesheet language used for styling web pages.', icon: '🎨' },
  { name: 'JavaScript', description: 'Programming language for dynamic web content.', icon: '💻' },
  { name: 'React', description: 'JavaScript library for building user interfaces.', icon: '⚛️' },
  { name: 'Node.js', description: 'JavaScript runtime built on Chrome’s V8 JavaScript engine.', icon: '🟢' },
  { name: 'Express', description: 'Web framework for Node.js.', icon: '🚀' },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.background}>
        <motion.h2
          className={styles.title}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.6 }}
        >
          Skills
        </motion.h2>
      </div>

      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{skill.icon}</div>
            <h3 className={styles.name}>{skill.name}</h3>
            <p className={styles.description}>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
