import Navbar from "../components/Navbar";
import styles from "../styles/about.module.css";
import Head from "next/head";

const About = () => (
  <>
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
    <div className={styles.aboutDiv}>
      <main className={styles.aboutMain}>
        <h1>About.</h1>
        <section>
          <h2>
            I’m a full-stack software developer, based in the North of England.
            I like making things and solving problems.
          </h2>
          <p>
            Hey! My name is Madison and I’m a full-stack software developer. You
            can preview some of my work under the Projects tab, as well as on{" "}
            <a
              target="_blank"
              href="https://github.com/madisonlowe"
              className={styles.thirdHov}
            >
              GitHub
            </a>
            .
          </p>
          <p>
            In a previous life, I worked in retail, sales, customer service and
            complaints handling, and translated thousand year-old manuscripts
            while pursuing an MSc. I wanted something a little more dynamic and
            fulfilling in my day-to-day, though, and so decided to change
            careers, graduating from the{" "}
            <a
              target="_blank"
              href="https://www.schoolofcode.co.uk"
              className={styles.fourthHov}
            >
              School of Code
            </a>{" "}
            in 2022.
          </p>
          <p>
            Feel free to reach out! You can find me on{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/madisonclowe/"
              className={styles.firstHov}
            >
              LinkedIn
            </a>{" "}
            and on{" "}
            <a
              target="_blank"
              href="https://twitter.com/dotmdsn"
              className={styles.secondHov}
            >
              Twitter
            </a>
            . If you're more of a traditionalist, though, you can always{" "}
            <a
              target="_blank"
              href="mailto:dotmdsn@live.com"
              className={styles.thirdHov}
            >
              send me an email
            </a>{" "}
            <em>(opens in a new tab).</em>
          </p>
        </section>
      </main>
    </div>
  </>
);

export default About;
