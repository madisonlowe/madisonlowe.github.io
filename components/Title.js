import { descriptors } from "../data.js";
import { useState } from "react";
import styles from "../styles/Title.module.css";

export default function Title() {
  const [descriptor, setDescriptor] = useState("software developer");
  const [index, setIndex] = useState(1);

  function handleDescriptor() {
    let incrementedIndex = (index + 1) % descriptors.length;
    setIndex(incrementedIndex);
    let nextDescriptor = descriptors[index];
    setDescriptor(nextDescriptor);
  }

  return (
    <main>
      <h1 className={styles.homeTitle}>
        My name is Madison and I am a{" "}
        <span className={styles.descriptor} onClick={handleDescriptor}>
          {descriptor}.
        </span>
      </h1>
    </main>
  );
}
