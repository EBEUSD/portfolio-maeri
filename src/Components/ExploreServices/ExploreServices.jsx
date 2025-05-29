import styles from './ExploreServices.module.css';

const services = [
  { number: '01', title: 'Web' },
  { number: '02', title: 'UI/UX Design' },
  { number: '03', title: 'Responsive' },
  { number: '04', title: 'Animations' },
  { number: '05', title: 'Front-End' },
  { number: '06', title: 'QA Tester' },
];

export default function ExploreServices() {
  return (
    <section className={styles.exploreServices}>
      <h2 className={styles.title}>Explore Maeri Services</h2>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.item}>
            <span className={styles.number}>{service.number}</span>
            <span className={styles.line} />
            <span className={styles.label}>{service.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
