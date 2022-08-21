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
            Having previous experience in retail, sales, customer service and
            complaints handling, and translating thousand-year-old manuscripts,
            I decided to try something new in 2022. I wanted to be able to work
            creatively and productively, while also pushing myself to learn and
            grow. So, I decided to start programming!
          </p>
          <p>
            I got started by completing the SheCodes Basics{" "}
            <a
              target="_blank"
              href="https://www.shecodes.io/certificates/3406255c971ef3077b043a898fd80aed"
              className={styles.firstHov}
            >
              Introduction to Coding
            </a>{" "}
            and freeCodeCamp’s{" "}
            <a
              target="_blank"
              href="https://www.freecodecamp.org/certification/saelida/responsive-web-design"
              className={styles.secondHov}
            >
              Responsive Web Design
            </a>{" "}
            certifications in Spring 2022. This led me to the School of Code,
            where I was selected as one of 150 bootcampers – out of nearly 3000
            applicants – to develop software full-time from April through
            August. You can preview some of my work under the Projects tab, as
            well as on{" "}
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
            Feel free to reach out! You can find me on{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/madisonclowe/"
              className={styles.fourthHov}
            >
              LinkedIn
            </a>{" "}
            and on{" "}
            <a
              target="_blank"
              href="https://twitter.com/dotmdsn"
              className={styles.firstHov}
            >
              Twitter
            </a>
            . If you're more of a traditionalist, though, you can always{" "}
            <a
              target="_blank"
              href="mailto:dotmdsn@live.com"
              className={styles.secondHov}
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
