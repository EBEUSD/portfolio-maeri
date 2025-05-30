import { useState } from "react";
import styles from "./RecentProjects.module.css";

const allProjects = [
  {
    id: 1,
    title: "Personal Blog Redesign",
    image:
      "https://hostingplus.ar/wp-content/uploads/2021/03/desktop-source-code-and-wallpaper-by-computer-language-with-coding-and-programming.jpg",
  },
  {
    id: 2,
    title: "E-Commerce",
    image:
      "https://hostingplus.ar/wp-content/uploads/2021/03/desktop-source-code-and-wallpaper-by-computer-language-with-coding-and-programming.jpg",
  },
  {
    id: 3,
    title: "Portfolio Website",
    image:
      "https://hostingplus.ar/wp-content/uploads/2021/03/desktop-source-code-and-wallpaper-by-computer-language-with-coding-and-programming.jpg",
  },
  {
    id: 4,
    title: "Tech Startup Landing",
    image:
      "https://hostingplus.ar/wp-content/uploads/2021/03/desktop-source-code-and-wallpaper-by-computer-language-with-coding-and-programming.jpg",
  },
  {
    id: 5,
    title: "Online Learning Platform Redesign",
    image:
      "https://hostingplus.ar/wp-content/uploads/2021/03/desktop-source-code-and-wallpaper-by-computer-language-with-coding-and-programming.jpg",
  },
  {
    id: 6,
    title: "CRM Dashboard",
    image:
      "https://hostingplus.ar/wp-content/uploads/2021/03/desktop-source-code-and-wallpaper-by-computer-language-with-coding-and-programming.jpg",
  },
  {
    id: 7,
    title: "App UI Concept",
    image:
      "https://hostingplus.ar/wp-content/uploads/2021/03/desktop-source-code-and-wallpaper-by-computer-language-with-coding-and-programming.jpg",
  },
  {
    id: 8,
    title: "Marketing Landing Page",
    image:
      "https://hostingplus.ar/wp-content/uploads/2021/03/desktop-source-code-and-wallpaper-by-computer-language-with-coding-and-programming.jpg",
  },
];

export default function RecentProjects() {
  const initialCount = 6;
  const increment = 3;

  const [visibleCount, setVisibleCount] = useState(initialCount);
  const hasMore = visibleCount < allProjects.length;

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + increment, allProjects.length));
  };

  const projectsToShow = allProjects.slice(0, visibleCount);

  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>Recent Projects</h2>
      <div className={styles.grid}>
        {projectsToShow.map((project, index) => {
          const isLastCard = index === projectsToShow.length - 1 && hasMore;

          return (
            <div
              key={project.id}
              className={`${styles.card} ${
                isLastCard ? styles.loadMoreCard : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
              />
              <div className={styles.content}>
                <h3>{project.title}</h3>
                {isLastCard ? (
                  <button className={styles.viewMoreBtn} onClick={showMore}>
                    View more
                  </button>
                ) : (
                  <button className={styles.detailsBtn}>Details</button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
