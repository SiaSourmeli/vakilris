import styles from "./Hero.module.css";
import Logo from "../logo";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      {/* <Logo /> */}
      <Image
        src="https://ucarecdn.com/7b26b6b4-2214-4359-9843-b3571d79eff8/logoPHATLINES.png"
     
        alt="logo"
        width={1000}
        height={500}
      />
      <div className={styles.heroText}>
        <p>@ Hellenic Pasteur Institute</p>
      </div>
    </div>
  );
}
