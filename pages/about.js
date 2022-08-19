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
            Having previously worked in retail, telemarketing and customer
            service, after completing my Literature MSc during the Covid-19
            lockdowns, I decided to expand my horizons and try something new. I
            wanted to be able to work creatively and productively while engaging
            fresh opportunities for learning and personal growth. I knew that
            programming would allow me to do just that.
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
            applicants – to train full-time from April through August in
            software development.
          </p>
          <p>
            You can find me on{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/madisonclowe/"
              className={styles.thirdHov}
            >
              LinkedIn
            </a>{" "}
            and on{" "}
            <a
              target="_blank"
              href="https://twitter.com/dotmdsn"
              className={styles.fourthHov}
            >
              Twitter
            </a>
            . If you're more of a traditionalist, though, feel free to{" "}
            <a
              target="_blank"
              href="mailto:dotmdsn@live.com"
              className={styles.firstHov}
            >
              send me an email
            </a>{" "}
            <em>(opens in a new tab).</em> You can see some of my work under the
            Projects tab, as well as on{" "}
            <a
              target="_blank"
              href="https://github.com/madisonlowe"
              className={styles.secondHov}
            >
              GitHub
            </a>
            .{" "}
          </p>
        </section>
      </main>
    </div>
  </>
);

export default About;
