import Navbar from "../components/Navbar";
import Title from "../components/Title";
import styles from "../styles/index.module.css";
import Head from "next/head";

const Home = () => (
  <main>
    <Head>
      <title>Madison Lowe</title>
      <link
        rel="icon"
        type="image/svg+xml"
        sizes="any"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💻</text></svg>"
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar />
    <div className={styles.container}>
      <Title />
    </div>
  </main>
);

export default Home;
