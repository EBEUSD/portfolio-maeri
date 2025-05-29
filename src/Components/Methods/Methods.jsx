import styles from './Methods.module.css';

const methods = [
  { name: 'Development Methods', icon: '💡' },
  { name: 'Responsive Design', icon: '📱' },
  { name: 'Modern Design Principles', icon: '🖼️' },
  { name: 'User-Centric Approach', icon: '👥' },
  { name: 'Team Player', icon: '🤝' },
  { name: 'Innovative Solutions', icon: '🚀' },
  { name: 'JavaScript', icon: '⚙️' },
  { name: 'Quality Assurance', icon: '🐞' },
];

export default function Methods() {
  return (
    <section className={styles.methodsSection}>
      <div className={styles.grid}>
        {methods.map((method, index) => (
          <div key={index} className={styles.method}>
            <span className={styles.icon}>{method.icon}</span>
            <span className={styles.label}>{method.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
