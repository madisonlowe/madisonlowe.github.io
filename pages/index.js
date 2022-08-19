import Navbar from "../components/Navbar";
import Title from "../components/Title";
import styles from "../styles/index.module.css";

const Home = () => (
  <main>
    <Navbar />
    <div className={styles.container}>
      <Title />
    </div>
  </main>
);

export default Home;
