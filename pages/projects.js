import Navbar from "../components/Navbar";
import { projects } from "../data.js";
import ProjectCardMap from "../components/ProjectCardMap";
import styles from "../styles/projects.module.css";

const Projects = () => (
  <>
    <Navbar />
    <main className={styles.projectsMain}>
      <h1>Projects.</h1>
      <div className={styles.scrollBox}>
        <ProjectCardMap projects={projects} />
      </div>
    </main>
  </>
);

export default Projects;
