import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Header = () => (
  <header>
    <ul className={styles.navigation}>
      <li>
        <Link href="/">
          <a className={styles.navpoint}>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a className={styles.navpoint}>About</a>
        </Link>
      </li>
      <li>
        <Link href="/projects">
          <a className={styles.navpoint}>Projects</a>
        </Link>
      </li>
    </ul>
  </header>
);

export default Header;
