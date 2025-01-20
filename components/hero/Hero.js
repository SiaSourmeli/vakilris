import styles from "./Hero.module.css";
import Logo from "../logo";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <Logo />
      <div className={styles.heroText}>
        <p>@ Hellenic Pasteur Institute</p>
      </div>
    </div>
  );
};
