import ProjectCard from "./ProjectCard";
import styles from "../styles/ProjectCardMap.module.css";

export default function ProjectCardMap({ projects }) {
  return (
    <div className={styles.projectsDiv}>
      {projects.map((project) => (
        <ProjectCard
          id={project.id}
          title={project.title}
          desc={project.desc}
          src={project.src}
          github={project.github}
          tags={project.tags}
        />
      ))}
    </div>
  );
}
