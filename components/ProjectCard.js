import styles from "../styles/ProjectCard.module.css";

export default function ProjectCard({ title, desc, link, linktext, tags }) {
  return (
    <div className={styles.cardDiv}>
      <p className={styles.cardTitle}>{title}</p>
      <a href={link} className={styles.cardLink} target="_blank">
        {linktext}
      </a>
      <ul className={styles.tagsUl}>
        {tags.map((tag) => {
          return <li className={styles.tagsLi}>{tag}</li>;
        })}
      </ul>
      <p className={styles.description}>{desc}</p>
    </div>
  );
}
